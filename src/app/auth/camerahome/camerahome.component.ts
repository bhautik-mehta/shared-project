import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { AuthService } from '../core/_services/auth.services';
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
@Component({
  selector: 'shared-camerahome',
  templateUrl: './camerahome.component.html',
  styleUrls: ['./camerahome.component.scss'],
})
export class CamerahomeComponent implements OnInit {
  @Input() position = 'floating';
  @Input() mode = "mode";
  @Output() cameraHomeApiOutput = new EventEmitter();

  title = "cloudsSorage";
  selectedFile: File = null;
  fb;
  downloadURL: Observable<string>;
  constructor(private Api: AuthService, private storage: AngularFireStorage) { }
  ngOnInit() { }
  onFileSelected(event) {
    var n = Date.name;
    const file = event.target.files[0];
    console.log('file------', file);

    const filePath = `RoomsImages/${n}`;
    console.log('filePath------', filePath);
    const fileRef = this.storage.ref(filePath);
    console.log('fileRef------', fileRef);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    console.log('task------', task);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log('this my final url', url);
        }
      });
  }


}
