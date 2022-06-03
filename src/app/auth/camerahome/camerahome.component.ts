import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { AuthService } from '../core/_services/auth.services';
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { FileUpload } from '../model/file-upload';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'shared-camerahome',
  templateUrl: './camerahome.component.html',
  styleUrls: ['./camerahome.component.scss'],
})
export class CamerahomeComponent implements OnInit {
  @Input() position = 'floating';
  @Input() mode = "mode";
  @Output() cameraHomeApiOutput = new EventEmitter();
  private basePath = '/RoomsImages';
  title = "cloudsSorage";
  selectedFile: File = null;
  fb;
  downloadURL: Observable<string>;
  constructor(private db: AngularFirestore, private Api: AuthService, private storage: AngularFireStorage) { }
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
            if (url) {
              this.fb = url;
            }
            console.log('this.fb-------', this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log('url------------', url);
          const dbtask = this.db.collection('images').add({ url: 'this is basic' }).then(
            success => console.log(success, 'successfully done')
          ).catch(e => console.log(e, 'something wrong'));

        }
      });
  }

}
