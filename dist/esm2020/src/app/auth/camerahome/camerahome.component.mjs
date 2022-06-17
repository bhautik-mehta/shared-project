import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/compat/firestore";
import * as i2 from "../core/_services/auth.services";
import * as i3 from "@angular/fire/compat/storage";
import * as i4 from "@awesome-cordova-plugins/camera/ngx";
import * as i5 from "@ionic/angular";
export class CamerahomeComponent {
    constructor(db, Api, storage, camera) {
        this.db = db;
        this.Api = Api;
        this.storage = storage;
        this.camera = camera;
        this.position = 'floating';
        this.mode = "mode";
        this.cameraHomeApiOutput = new EventEmitter();
        this.basePath = '/RoomsImages';
        this.title = "cloudsSorage";
        this.selectedFile = null;
    }
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
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
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
CamerahomeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: CamerahomeComponent, deps: [{ token: i1.AngularFirestore }, { token: i2.AuthService }, { token: i3.AngularFireStorage }, { token: i4.Camera }], target: i0.ɵɵFactoryTarget.Component });
CamerahomeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: CamerahomeComponent, selector: "shared-camerahome", inputs: { position: "position", mode: "mode" }, outputs: { cameraHomeApiOutput: "cameraHomeApiOutput" }, ngImport: i0, template: "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      My home camera\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-content class=\"ion-padding\">\r\n    <div class=\"preview\">\r\n      this is camerahome works!\r\n\r\n      <div class=\"camera\">\r\n        <!-- <input type=\"file\" id=\"file\" #userPhoto (change)=\"onFileSelected($event)\" name=\"image\" autocomplete=\"off\" /> -->\r\n        <!-- <ion-button [mode]=\"mode\" expand=\"block\" color=\"primary\" (click)=\"expression\")></ion-button> -->\r\n        <div class=\"file-upload\" (click)=\"changeImage()\">\r\n          <!-- <img [src]=\"\" /> -->\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n</ion-content>\r\n", styles: [".file-upload{width:80px;height:80px;background-color:#0ff}\n"], components: [{ type: i5.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i5.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i5.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i5.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: CamerahomeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'shared-camerahome', template: "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      My home camera\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-content class=\"ion-padding\">\r\n    <div class=\"preview\">\r\n      this is camerahome works!\r\n\r\n      <div class=\"camera\">\r\n        <!-- <input type=\"file\" id=\"file\" #userPhoto (change)=\"onFileSelected($event)\" name=\"image\" autocomplete=\"off\" /> -->\r\n        <!-- <ion-button [mode]=\"mode\" expand=\"block\" color=\"primary\" (click)=\"expression\")></ion-button> -->\r\n        <div class=\"file-upload\" (click)=\"changeImage()\">\r\n          <!-- <img [src]=\"\" /> -->\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n</ion-content>\r\n", styles: [".file-upload{width:80px;height:80px;background-color:#0ff}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.AngularFirestore }, { type: i2.AuthService }, { type: i3.AngularFireStorage }, { type: i4.Camera }]; }, propDecorators: { position: [{
                type: Input
            }], mode: [{
                type: Input
            }], cameraHomeApiOutput: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2F1dGgvY2FtZXJhaG9tZS9jYW1lcmFob21lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvYXV0aC9jYW1lcmFob21lL2NhbWVyYWhvbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQWUvRSxNQUFNLE9BQU8sbUJBQW1CO0lBWTlCLFlBQW9CLEVBQW9CLEVBQVUsR0FBZ0IsRUFBVSxPQUEyQixFQUFVLE1BQWM7UUFBM0csT0FBRSxHQUFGLEVBQUUsQ0FBa0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBWHRILGFBQVEsR0FBRyxVQUFVLENBQUM7UUFDdEIsU0FBSSxHQUFHLE1BQU0sQ0FBQztRQUNiLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0MsYUFBUSxHQUFHLGNBQWMsQ0FBQztRQUNsQyxVQUFLLEdBQUcsY0FBYyxDQUFDO1FBQ3ZCLGlCQUFZLEdBQVMsSUFBSSxDQUFDO0lBTXlHLENBQUM7SUFDcEksUUFBUSxLQUFLLENBQUM7SUFDZCwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLHdDQUF3QztJQUN4Qyx5Q0FBeUM7SUFDekMsZ0RBQWdEO0lBQ2hELGdFQUFnRTtJQUVoRSxTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsdURBQXVEO0lBQ3ZELDhDQUE4QztJQUM5Qyx1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLHNGQUFzRjtJQUN0RixxRUFBcUU7SUFDckUsK0RBQStEO0lBQy9ELGNBQWM7SUFDZCxvREFBb0Q7SUFDcEQsY0FBYztJQUNkLFdBQVc7SUFDWCxRQUFRO0lBQ1IsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQiwrQ0FBK0M7SUFDL0MsVUFBVTtJQUNWLFVBQVU7SUFDVixJQUFJO0lBRUosS0FBSyxDQUFDLFdBQVc7UUFDZix3Q0FBd0M7UUFDeEMsaUJBQWlCO1FBQ2pCLHlCQUF5QjtRQUN6QixzQ0FBc0M7UUFDdEMsaUNBQWlDO1FBQ2pDLE1BQU07UUFDTixnQ0FBZ0M7UUFDaEMsZUFBZTtRQUNmLDJEQUEyRDtRQUMzRCw2QkFBNkI7UUFDN0IsZ0VBQWdFO1FBQ2hFLGdDQUFnQztRQUNoQyx1QkFBdUI7UUFDdkIsMkNBQTJDO1FBQzNDLG1CQUFtQjtRQUNuQix3REFBd0Q7UUFDeEQsaUNBQWlDO1FBQ2pDLDhEQUE4RDtRQUM5RCx5QkFBeUI7UUFDekIsVUFBVTtRQUNWLDZCQUE2QjtRQUM3QixNQUFNO1FBQ04sSUFBSTtRQUdKLE1BQU0sT0FBTyxHQUFrQjtZQUM3QixPQUFPLEVBQUUsR0FBRztZQUNaLGVBQWUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRO1lBQ3JELFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJO1lBQzNDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPO1NBQ3pDLENBQUE7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNqRCw0REFBNEQ7WUFDNUQsNkJBQTZCO1lBQzdCLElBQUksV0FBVyxHQUFHLHlCQUF5QixHQUFHLFNBQVMsQ0FBQztZQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1FBQ25ELENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O2dIQXJGVSxtQkFBbUI7b0dBQW5CLG1CQUFtQixrS0NmaEMsZ3pCQXVCQTsyRkRSYSxtQkFBbUI7a0JBTC9CLFNBQVM7K0JBQ0UsbUJBQW1CO3VMQUtwQixRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDSSxtQkFBbUI7c0JBQTVCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlU3RvcmFnZSB9IGZyb20gXCJAYW5ndWxhci9maXJlL2NvbXBhdC9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9fc2VydmljZXMvYXV0aC5zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IG1hcCwgZmluYWxpemUgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWQgfSBmcm9tICcuLi9tb2RlbC9maWxlLXVwbG9hZCc7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlc3RvcmUgfSBmcm9tICdAYW5ndWxhci9maXJlL2NvbXBhdC9maXJlc3RvcmUnO1xyXG5pbXBvcnQgeyBDYW1lcmEsIENhbWVyYU9wdGlvbnMgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY2FtZXJhL25neCc7XHJcbmltcG9ydCB7IENhbWVyYVJlc3VsdFR5cGUsIENhbWVyYVNvdXJjZSB9IGZyb20gJ0BjYXBhY2l0b3IvY2FtZXJhJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzaGFyZWQtY2FtZXJhaG9tZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbWVyYWhvbWUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NhbWVyYWhvbWUuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENhbWVyYWhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHBvc2l0aW9uID0gJ2Zsb2F0aW5nJztcclxuICBASW5wdXQoKSBtb2RlID0gXCJtb2RlXCI7XHJcbiAgQE91dHB1dCgpIGNhbWVyYUhvbWVBcGlPdXRwdXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgcHJpdmF0ZSBiYXNlUGF0aCA9ICcvUm9vbXNJbWFnZXMnO1xyXG4gIHRpdGxlID0gXCJjbG91ZHNTb3JhZ2VcIjtcclxuICBzZWxlY3RlZEZpbGU6IEZpbGUgPSBudWxsO1xyXG4gIGZiO1xyXG4gIGRvd25sb2FkVVJMOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcbiAgbG9hZGluZ0NvbnRyb2xsZXI6IGFueTtcclxuICBhdmF0YXJTZXJ2aWNlOiBhbnk7XHJcbiAgYWxlcnRDb250cm9sbGVyOiBhbnk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYjogQW5ndWxhckZpcmVzdG9yZSwgcHJpdmF0ZSBBcGk6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIHN0b3JhZ2U6IEFuZ3VsYXJGaXJlU3RvcmFnZSwgcHJpdmF0ZSBjYW1lcmE6IENhbWVyYSkgeyB9XHJcbiAgbmdPbkluaXQoKSB7IH1cclxuICAvLyBvbkZpbGVTZWxlY3RlZChldmVudCkge1xyXG4gIC8vICAgdmFyIG4gPSBEYXRlLm5vdygpO1xyXG4gIC8vICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcclxuICAvLyAgIGNvbnN0IGZpbGVQYXRoID0gYFJvb21zSW1hZ2VzLyR7bn1gO1xyXG4gIC8vICAgY29uc3QgZmlsZVJlZiA9IHRoaXMuc3RvcmFnZS5yZWYoZmlsZVBhdGgpO1xyXG4gIC8vICAgY29uc3QgdGFzayA9IHRoaXMuc3RvcmFnZS51cGxvYWQoYFJvb21zSW1hZ2VzLyR7bn1gLCBmaWxlKTtcclxuXHJcbiAgLy8gICB0YXNrXHJcbiAgLy8gICAgIC5zbmFwc2hvdENoYW5nZXMoKVxyXG4gIC8vICAgICAucGlwZShcclxuICAvLyAgICAgICBmaW5hbGl6ZSgoKSA9PiB7XHJcbiAgLy8gICAgICAgICB0aGlzLmRvd25sb2FkVVJMID0gZmlsZVJlZi5nZXREb3dubG9hZFVSTCgpO1xyXG4gIC8vICAgICAgICAgdGhpcy5kb3dubG9hZFVSTC5zdWJzY3JpYmUodXJsID0+IHtcclxuICAvLyAgICAgICAgICAgaWYgKHVybCkge1xyXG4gIC8vICAgICAgICAgICAgIHRoaXMuZmIgPSB1cmw7XHJcbiAgLy8gICAgICAgICAgICAgY29uc3QgZGJ0YXNrID0gdGhpcy5kYi5jb2xsZWN0aW9uKCdpbWFnZXMnKS5hZGQoeyB1cmw6IHRoaXMuZmIgfSkudGhlbihcclxuICAvLyAgICAgICAgICAgICAgIHN1Y2Nlc3MgPT4gY29uc29sZS5sb2coc3VjY2VzcywgJ3N1Y2Nlc3NmdWxseSBkb25lJylcclxuICAvLyAgICAgICAgICAgICApLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSwgJ3NvbWV0aGluZyB3cm9uZycpKTtcclxuICAvLyAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcy5mYi0tLS0tLS0nLCB0aGlzLmZiKTtcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgIH0pXHJcbiAgLy8gICAgIClcclxuICAvLyAgICAgLnN1YnNjcmliZSh1cmwgPT4ge1xyXG4gIC8vICAgICAgIGlmICh1cmwpIHtcclxuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCd1cmwtLS0tLS0tLS0tLS0nLCB1cmwpO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgfSk7XHJcbiAgLy8gfVxyXG5cclxuICBhc3luYyBjaGFuZ2VJbWFnZSgpIHtcclxuICAgIC8vIGNvbnN0IGltYWdlID0gYXdhaXQgQ2FtZXJhLmdldFBob3RvKHtcclxuICAgIC8vICAgcXVhbGl0eTogOTAsXHJcbiAgICAvLyAgIGFsbG93RWRpdGluZzogZmFsc2UsXHJcbiAgICAvLyAgIHJlc3VsdFR5cGU6IENhbWVyYVJlc3VsdFR5cGUuVXJpLFxyXG4gICAgLy8gICBzb3VyY2U6IENhbWVyYVNvdXJjZS5QaG90b3MsXHJcbiAgICAvLyB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGltYWdlLCAnYmFzZTY0Jyk7XHJcbiAgICAvLyBpZiAoaW1hZ2UpIHtcclxuICAgIC8vICAgY29uc3QgbG9hZGluZyA9IGF3YWl0IHRoaXMubG9hZGluZ0NvbnRyb2xsZXIuY3JlYXRlKCk7XHJcbiAgICAvLyAgIGF3YWl0IGxvYWRpbmcucHJlc2VudCgpO1xyXG4gICAgLy8gICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmF2YXRhclNlcnZpY2UudXBsb2FkSW1hZ2UoaW1hZ2UpO1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyhcImltYWdlXCIsIGltYWdlKVxyXG4gICAgLy8gICBsb2FkaW5nLmRpc21pc3MoKTtcclxuICAgIC8vICAgY29uc29sZS5sb2cocmVzdWx0LCAncmVzdWx0LS0tLS0tLS0tJylcclxuICAgIC8vICAgaWYgKCFyZXN1bHQpIHtcclxuICAgIC8vICAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XHJcbiAgICAvLyAgICAgICBoZWFkZXI6ICdVcGxvYWQgZmFpbGVkJyxcclxuICAgIC8vICAgICAgIG1lc3NhZ2U6ICdUaGVyZSB3YXMgYXByb2JsZW0gdXBsb2FkaW5nIHlvdXIgYXZhdGFyLicsXHJcbiAgICAvLyAgICAgICBidXR0b25zOiBbJ09LJ10sXHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgICAgYXdhaXQgYWxlcnQucHJlc2VudCgpO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIGNvbnN0IG9wdGlvbnM6IENhbWVyYU9wdGlvbnMgPSB7XHJcbiAgICAgIHF1YWxpdHk6IDEwMCxcclxuICAgICAgZGVzdGluYXRpb25UeXBlOiB0aGlzLmNhbWVyYS5EZXN0aW5hdGlvblR5cGUuRklMRV9VUkksXHJcbiAgICAgIGVuY29kaW5nVHlwZTogdGhpcy5jYW1lcmEuRW5jb2RpbmdUeXBlLkpQRUcsXHJcbiAgICAgIG1lZGlhVHlwZTogdGhpcy5jYW1lcmEuTWVkaWFUeXBlLlBJQ1RVUkVcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNhbWVyYS5nZXRQaWN0dXJlKG9wdGlvbnMpLnRoZW4oKGltYWdlRGF0YSkgPT4ge1xyXG4gICAgICAvLyBpbWFnZURhdGEgaXMgZWl0aGVyIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nIG9yIGEgZmlsZSBVUklcclxuICAgICAgLy8gSWYgaXQncyBiYXNlNjQgKERBVEFfVVJMKTpcclxuICAgICAgbGV0IGJhc2U2NEltYWdlID0gJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsJyArIGltYWdlRGF0YTtcclxuICAgICAgY29uc29sZS5sb2coYmFzZTY0SW1hZ2UsIFwidGhpcyBpcyBiYXNlNjRpbWFnZXNcIik7XHJcbiAgICB9LCAoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVyciwgXCJ0aGlzIGlzIGZpbmFsIGVycm9yXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8aW9uLWhlYWRlciBbdHJhbnNsdWNlbnRdPVwidHJ1ZVwiPlxyXG4gIDxpb24tdG9vbGJhciBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgIDxpb24tdGl0bGU+XHJcbiAgICAgIE15IGhvbWUgY2FtZXJhXHJcbiAgICA8L2lvbi10aXRsZT5cclxuICA8L2lvbi10b29sYmFyPlxyXG48L2lvbi1oZWFkZXI+XHJcbjxpb24tY29udGVudCBbZnVsbHNjcmVlbl09XCJ0cnVlXCI+XHJcbiAgPGlvbi1jb250ZW50IGNsYXNzPVwiaW9uLXBhZGRpbmdcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3XCI+XHJcbiAgICAgIHRoaXMgaXMgY2FtZXJhaG9tZSB3b3JrcyFcclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYW1lcmFcIj5cclxuICAgICAgICA8IS0tIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwiZmlsZVwiICN1c2VyUGhvdG8gKGNoYW5nZSk9XCJvbkZpbGVTZWxlY3RlZCgkZXZlbnQpXCIgbmFtZT1cImltYWdlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgLz4gLS0+XHJcbiAgICAgICAgPCEtLSA8aW9uLWJ1dHRvbiBbbW9kZV09XCJtb2RlXCIgZXhwYW5kPVwiYmxvY2tcIiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiZXhwcmVzc2lvblwiKT48L2lvbi1idXR0b24+IC0tPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLXVwbG9hZFwiIChjbGljayk9XCJjaGFuZ2VJbWFnZSgpXCI+XHJcbiAgICAgICAgICA8IS0tIDxpbWcgW3NyY109XCJcIiAvPiAtLT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9pb24tY29udGVudD5cclxuPC9pb24tY29udGVudD5cclxuIl19