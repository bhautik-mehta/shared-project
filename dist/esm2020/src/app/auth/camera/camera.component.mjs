import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import * as i0 from "@angular/core";
import * as i1 from "../core/_services/auth.services";
import * as i2 from "@ionic/angular";
import * as i3 from "@angular/router";
export class CameraComponent {
    constructor(authService, loadingController, alertController, router) {
        this.authService = authService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.router = router;
        this.position = 'floating';
        this.mode = "mode";
        this.cameraApiOutput = new EventEmitter();
        // this.authService.getUserProfile().subscribe((data: null) => {
        //   data = this.profile
        // });
    }
    ngOnInit() { }
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
            console.log("image", image);
            loading.dismiss();
            console.log(result);
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
CameraComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: CameraComponent, deps: [{ token: i1.AuthService }, { token: i2.LoadingController }, { token: i2.AlertController }, { token: i3.Router }], target: i0.ɵɵFactoryTarget.Component });
CameraComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: CameraComponent, selector: "shared-camera", inputs: { position: "position", mode: "mode" }, outputs: { cameraApiOutput: "cameraApiOutput" }, ngImport: i0, template: "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <!-- <ion-buttons slot=\"start\">\r\n      <ion-button expand=\"full\" type=\"button\" (click)=\"logout()\">\r\n        <ion-icon name=\"exit\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <ion-title>\r\n      My profile\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-content class=\"ion-padding\">\r\n    <div class=\"preview\">\r\n      <ion-avatar (click)=\"changeImage()\">\r\n        <script>\r\n          console.log(\"profile.imageUrl\", profile);\r\n        </script>\r\n        <img [src]=\"imageUrl\" />\r\n\r\n         <ng-template #placheholder_avatar>\r\n           <div class=\"fallback\">\r\n             <p>Select avatar</p>\r\n           </div>\r\n        </ng-template>\r\n      </ion-avatar>\r\n    </div>\r\n   </ion-content>\r\n</ion-content>\r\n", styles: [""], components: [{ type: i2.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i2.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i2.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i2.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i2.IonAvatar, selector: "ion-avatar" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: CameraComponent, decorators: [{
            type: Component,
            args: [{ selector: 'shared-camera', template: "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <!-- <ion-buttons slot=\"start\">\r\n      <ion-button expand=\"full\" type=\"button\" (click)=\"logout()\">\r\n        <ion-icon name=\"exit\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <ion-title>\r\n      My profile\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-content class=\"ion-padding\">\r\n    <div class=\"preview\">\r\n      <ion-avatar (click)=\"changeImage()\">\r\n        <script>\r\n          console.log(\"profile.imageUrl\", profile);\r\n        </script>\r\n        <img [src]=\"imageUrl\" />\r\n\r\n         <ng-template #placheholder_avatar>\r\n           <div class=\"fallback\">\r\n             <p>Select avatar</p>\r\n           </div>\r\n        </ng-template>\r\n      </ion-avatar>\r\n    </div>\r\n   </ion-content>\r\n</ion-content>\r\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.AuthService }, { type: i2.LoadingController }, { type: i2.AlertController }, { type: i3.Router }]; }, propDecorators: { position: [{
                type: Input
            }], mode: [{
                type: Input
            }], cameraApiOutput: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvYXV0aC9jYW1lcmEvY2FtZXJhLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvYXV0aC9jYW1lcmEvY2FtZXJhLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7QUFRM0UsTUFBTSxPQUFPLGVBQWU7SUFRMUIsWUFDVSxXQUF3QixFQUN4QixpQkFBb0MsRUFDcEMsZUFBZ0MsRUFDaEMsTUFBYztRQUhkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFWZixhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDYixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFVN0MsZ0VBQWdFO1FBQ2hFLHdCQUF3QjtRQUN4QixNQUFNO0lBQ1IsQ0FBQztJQUVELFFBQVEsS0FBSyxDQUFDO0lBQ2QsS0FBSyxDQUFDLFdBQVc7UUFDZixNQUFNLEtBQUssR0FBRyxNQUFNLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDbEMsT0FBTyxFQUFFLEVBQUU7WUFDWCxZQUFZLEVBQUUsS0FBSztZQUNuQixVQUFVLEVBQUUsZ0JBQWdCLENBQUMsR0FBRztZQUNoQyxNQUFNLEVBQUUsWUFBWSxDQUFDLE1BQU07U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFJLEtBQUssRUFBRTtZQUNULE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3RELE1BQU0sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3hCLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDM0IsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDbkIsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWCxNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO29CQUM5QyxNQUFNLEVBQUUsZUFBZTtvQkFDdkIsT0FBTyxFQUFFLDJDQUEyQztvQkFDcEQsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO2lCQUNoQixDQUFDLENBQUM7Z0JBQ0gsTUFBTSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDdkI7U0FDRjtJQUNILENBQUM7OzRHQTVDVSxlQUFlO2dHQUFmLGVBQWUsc0pDVjVCLHU2QkErQkE7MkZEckJhLGVBQWU7a0JBTDNCLFNBQVM7K0JBQ0UsZUFBZTtxTEFNaEIsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0ksZUFBZTtzQkFBeEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ2FtZXJhLCBDYW1lcmFSZXN1bHRUeXBlLCBDYW1lcmFTb3VyY2UgfSBmcm9tICdAY2FwYWNpdG9yL2NhbWVyYSc7XHJcbmltcG9ydCB7IEFsZXJ0Q29udHJvbGxlciwgTG9hZGluZ0NvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9fc2VydmljZXMvYXV0aC5zZXJ2aWNlcyc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2hhcmVkLWNhbWVyYScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbWVyYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2FtZXJhLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYW1lcmFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBwb3NpdGlvbiA9ICdmbG9hdGluZyc7XHJcbiAgQElucHV0KCkgbW9kZSA9IFwibW9kZVwiO1xyXG4gIEBPdXRwdXQoKSBjYW1lcmFBcGlPdXRwdXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHByb2ZpbGU6IG51bGw7XHJcbiAgaW1hZ2VVcmw6IG51bGw7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9hZGluZ0NvbnRyb2xsZXI6IExvYWRpbmdDb250cm9sbGVyLFxyXG4gICAgcHJpdmF0ZSBhbGVydENvbnRyb2xsZXI6IEFsZXJ0Q29udHJvbGxlcixcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcclxuICApIHtcclxuICAgIC8vIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlclByb2ZpbGUoKS5zdWJzY3JpYmUoKGRhdGE6IG51bGwpID0+IHtcclxuICAgIC8vICAgZGF0YSA9IHRoaXMucHJvZmlsZVxyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgfVxyXG4gIGFzeW5jIGNoYW5nZUltYWdlKCkge1xyXG4gICAgY29uc3QgaW1hZ2UgPSBhd2FpdCBDYW1lcmEuZ2V0UGhvdG8oe1xyXG4gICAgICBxdWFsaXR5OiA5MCxcclxuICAgICAgYWxsb3dFZGl0aW5nOiBmYWxzZSxcclxuICAgICAgcmVzdWx0VHlwZTogQ2FtZXJhUmVzdWx0VHlwZS5VcmksXHJcbiAgICAgIHNvdXJjZTogQ2FtZXJhU291cmNlLlBob3RvcyxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coaW1hZ2UpO1xyXG4gICAgaWYgKGltYWdlKSB7XHJcbiAgICAgIGNvbnN0IGxvYWRpbmcgPSBhd2FpdCB0aGlzLmxvYWRpbmdDb250cm9sbGVyLmNyZWF0ZSgpO1xyXG4gICAgICBhd2FpdCBsb2FkaW5nLnByZXNlbnQoKTtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS51cGxvYWRJbWFnZShpbWFnZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiaW1hZ2VcIiwgaW1hZ2UpXHJcbiAgICAgIGxvYWRpbmcuZGlzbWlzcygpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q29udHJvbGxlci5jcmVhdGUoe1xyXG4gICAgICAgICAgaGVhZGVyOiAnVXBsb2FkIGZhaWxlZCcsXHJcbiAgICAgICAgICBtZXNzYWdlOiAnVGhlcmUgd2FzIGFwcm9ibGVtIHVwbG9hZGluZyB5b3VyIGF2YXRhci4nLFxyXG4gICAgICAgICAgYnV0dG9uczogWydPSyddLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGF3YWl0IGFsZXJ0LnByZXNlbnQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8aW9uLWhlYWRlciBbdHJhbnNsdWNlbnRdPVwidHJ1ZVwiPlxyXG4gIDxpb24tdG9vbGJhciBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgIDwhLS0gPGlvbi1idXR0b25zIHNsb3Q9XCJzdGFydFwiPlxyXG4gICAgICA8aW9uLWJ1dHRvbiBleHBhbmQ9XCJmdWxsXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJsb2dvdXQoKVwiPlxyXG4gICAgICAgIDxpb24taWNvbiBuYW1lPVwiZXhpdFwiPjwvaW9uLWljb24+XHJcbiAgICAgIDwvaW9uLWJ1dHRvbj5cclxuICAgIDwvaW9uLWJ1dHRvbnM+IC0tPlxyXG4gICAgPGlvbi10aXRsZT5cclxuICAgICAgTXkgcHJvZmlsZVxyXG4gICAgPC9pb24tdGl0bGU+XHJcbiAgPC9pb24tdG9vbGJhcj5cclxuPC9pb24taGVhZGVyPlxyXG5cclxuPGlvbi1jb250ZW50IFtmdWxsc2NyZWVuXT1cInRydWVcIj5cclxuICA8aW9uLWNvbnRlbnQgY2xhc3M9XCJpb24tcGFkZGluZ1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cInByZXZpZXdcIj5cclxuICAgICAgPGlvbi1hdmF0YXIgKGNsaWNrKT1cImNoYW5nZUltYWdlKClcIj5cclxuICAgICAgICA8c2NyaXB0PlxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJwcm9maWxlLmltYWdlVXJsXCIsIHByb2ZpbGUpO1xyXG4gICAgICAgIDwvc2NyaXB0PlxyXG4gICAgICAgIDxpbWcgW3NyY109XCJpbWFnZVVybFwiIC8+XHJcblxyXG4gICAgICAgICA8bmctdGVtcGxhdGUgI3BsYWNoZWhvbGRlcl9hdmF0YXI+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImZhbGxiYWNrXCI+XHJcbiAgICAgICAgICAgICA8cD5TZWxlY3QgYXZhdGFyPC9wPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvaW9uLWF2YXRhcj5cclxuICAgIDwvZGl2PlxyXG4gICA8L2lvbi1jb250ZW50PlxyXG48L2lvbi1jb250ZW50PlxyXG4iXX0=