import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { AuthService } from '../core/_services/auth.services';
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { FileUpload } from '../model/file-upload';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { CameraResultType, CameraSource } from '@capacitor/camera';
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
  loadingController: any;
  avatarService: any;
  alertController: any;
  constructor(private db: AngularFirestore, private Api: AuthService, private storage: AngularFireStorage, private camera: Camera) { }
  ngOnInit() { }
  // onFileSelected(event) {
  //   var n = Date.now();
  //   const file = event.target.files[0];
  //   const filePath = `RoomsImages/${n}`;
  //   const fileRef = this.storage.ref(filePath);
  //   const task = this.storage.upload(`RoomsImages/${n}`, file);

  //   task
  //     .snapshotChanges()
  //     .pipe(
  //       finalize(() => {
  //         this.downloadURL = fileRef.getDownloadURL();
  //         this.downloadURL.subscribe(url => {
  //           if (url) {
  //             this.fb = url;
  //             const dbtask = this.db.collection('images').add({ url: this.fb }).then(
  //               success => console.log(success, 'successfully done')
  //             ).catch(e => console.log(e, 'something wrong'));
  //           }
  //           console.log('this.fb-------', this.fb);
  //         });
  //       })
  //     )
  //     .subscribe(url => {
  //       if (url) {
  //         console.log('url------------', url);
  //       }
  //     });
  // }

  async changeImage() {
    // const image = await Camera.getPhoto({
    //   quality: 90,
    //   allowEditing: false,
    //   resultType: CameraResultType.Uri,
    //   source: CameraSource.Photos,
    // });
    // console.log(image, 'base64');
    // if (image) {
    //   const loading = await this.loadingController.create();
    //   await loading.present();
    //   const result = await this.avatarService.uploadImage(image);
    //   console.log("image", image)
    //   loading.dismiss();
    //   console.log(result, 'result---------')
    //   if (!result) {
    //     const alert = await this.alertController.create({
    //       header: 'Upload failed',
    //       message: 'There was aproblem uploading your avatar.',
    //       buttons: ['OK'],
    //     });
    //     await alert.present();
    //   }
    // }


    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(base64Image, "this is base64images");
    }, (err) => {
      console.log(err, "this is final error");
    });
  }

}
