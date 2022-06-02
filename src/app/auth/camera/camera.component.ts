import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../core/_services/auth.services';
@Component({
  selector: 'shared-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent implements OnInit {

  @Input() position = 'floating';
  @Input() mode = "mode";
  @Output() cameraApiOutput = new EventEmitter();

  profile: null;
  imageUrl: null;
  constructor(
    private authService: AuthService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private router: Router
  ) {
    this.authService.getUserProfile().then((data: any) => {
      this.profile = data
    });
  }

  ngOnInit() {
    // console.log('hello world');

    this.authService.getUserProfile().then((data: any) => {
      this.profile = data
      console.log(this.profile, 'hello profile');
      console.log(data, this.profile, 'imagesssssssss')
      console.log('imagesssssssss')
    }).catch(e => {
      console.log(e, 'error');
    });
  }
  async changeImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos,
    });
    console.log(image);
    if (image) {
      const loading = await this.loadingController.create();
      await loading.present();
      const result = await this.authService.uploadImage(image);
      console.log("image", image)
      loading.dismiss();
      console.log(result)
      if (!result) {
        const alert = await this.alertController.create({
          header: 'Upload failed',
          message: 'There was aproblem uploading your avatar.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    }
  }
}
