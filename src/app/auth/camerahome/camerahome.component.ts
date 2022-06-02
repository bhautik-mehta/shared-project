import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AuthService } from '../core/_services/auth.services';
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { FileUpload } from '../model/file-upload';
@Component({
  selector: 'shared-camerahome',
  templateUrl: './camerahome.component.html',
  styleUrls: ['./camerahome.component.scss'],
})
export class CamerahomeComponent implements OnInit {
  private basePath = '/uploadsimg';
  @Input() position = 'floating';
  @Input() mode = "mode";
  @Output() cameraHomeApiOutput = new EventEmitter();

  title = "cloudsSorage";
  selectedFile: File = null;
  fb;
  downloadURL: Observable<string>;
  constructor(private db: AngularFireDatabase, private Api: AuthService, private storage: AngularFireStorage, public fileUpload: FileUpload) { }
  ngOnInit() { }
  onFileSelected(event) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            this.fileUpload.url = url;
            this.fileUpload.name = this.fileUpload.file.name;
            this.saveFileData(this.fileUpload);
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });

  }
  private saveFileData(fileUpload: FileUpload): void {
    this.db.list(this.basePath).push(fileUpload);
  }
  getFiles(numberItems: number): AngularFireList<FileUpload> {
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems));
  }
}

