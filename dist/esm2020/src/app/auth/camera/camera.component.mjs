import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import * as i0 from "@angular/core";
import * as i1 from "../core/_services/auth.services";
import * as i2 from "@ionic/angular";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common";
export class CameraComponent {
    constructor(authService, loadingController, alertController, router) {
        this.authService = authService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.router = router;
        this.position = 'floating';
        this.mode = "mode";
        this.cameraApiOutput = new EventEmitter();
        this.authService.getUserProfile().then((data) => {
            this.profile = data;
        });
    }
    ngOnInit() {
        // console.log('hello world');
        this.authService.getUserProfile().then((data) => {
            this.profile = data;
            console.log(this.profile, 'hello profile');
            console.log(data, this.profile, 'imagesssssssss');
            console.log('imagesssssssss');
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
CameraComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: CameraComponent, selector: "shared-camera", inputs: { position: "position", mode: "mode" }, outputs: { cameraApiOutput: "cameraApiOutput" }, ngImport: i0, template: "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      My profile\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-content class=\"ion-padding\">\r\n    <div class=\"preview\">\r\n      <ion-avatar (click)=\"changeImage()\">\r\n        <img *ngIf=\"imageUrl; else placheholder_avatar;\" [src]=\"imageUrl\" />\r\n         <ng-template #placheholder_avatar>\r\n           <div class=\"fallback\">\r\n             <p>Select avatar</p>\r\n           </div>\r\n        </ng-template>\r\n      </ion-avatar>\r\n    </div>\r\n   </ion-content>\r\n</ion-content>\r\n", styles: [""], components: [{ type: i2.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i2.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i2.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i2.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i2.IonAvatar, selector: "ion-avatar" }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: CameraComponent, decorators: [{
            type: Component,
            args: [{ selector: 'shared-camera', template: "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      My profile\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-content class=\"ion-padding\">\r\n    <div class=\"preview\">\r\n      <ion-avatar (click)=\"changeImage()\">\r\n        <img *ngIf=\"imageUrl; else placheholder_avatar;\" [src]=\"imageUrl\" />\r\n         <ng-template #placheholder_avatar>\r\n           <div class=\"fallback\">\r\n             <p>Select avatar</p>\r\n           </div>\r\n        </ng-template>\r\n      </ion-avatar>\r\n    </div>\r\n   </ion-content>\r\n</ion-content>\r\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.AuthService }, { type: i2.LoadingController }, { type: i2.AlertController }, { type: i3.Router }]; }, propDecorators: { position: [{
                type: Input
            }], mode: [{
                type: Input
            }], cameraApiOutput: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvYXV0aC9jYW1lcmEvY2FtZXJhLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvYXV0aC9jYW1lcmEvY2FtZXJhLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7O0FBUTNFLE1BQU0sT0FBTyxlQUFlO0lBUTFCLFlBQ1UsV0FBd0IsRUFDeEIsaUJBQW9DLEVBQ3BDLGVBQWdDLEVBQ2hDLE1BQWM7UUFIZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBVmYsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUN0QixTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2Isb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBVTdDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7WUFDbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNOLDhCQUE4QjtRQUU5QixJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO1lBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztZQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLENBQUE7WUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQy9CLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELEtBQUssQ0FBQyxXQUFXO1FBQ2YsTUFBTSxLQUFLLEdBQUcsTUFBTSxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ2xDLE9BQU8sRUFBRSxFQUFFO1lBQ1gsWUFBWSxFQUFFLEtBQUs7WUFDbkIsVUFBVSxFQUFFLGdCQUFnQixDQUFDLEdBQUc7WUFDaEMsTUFBTSxFQUFFLFlBQVksQ0FBQyxNQUFNO1NBQzVCLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsSUFBSSxLQUFLLEVBQUU7WUFDVCxNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN0RCxNQUFNLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN4QixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO1lBQzNCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ25CLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1gsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztvQkFDOUMsTUFBTSxFQUFFLGVBQWU7b0JBQ3ZCLE9BQU8sRUFBRSwyQ0FBMkM7b0JBQ3BELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQztpQkFDaEIsQ0FBQyxDQUFDO2dCQUNILE1BQU0sS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7SUFDSCxDQUFDOzs0R0F2RFUsZUFBZTtnR0FBZixlQUFlLHNKQ1Y1QiwycEJBc0JBOzJGRFphLGVBQWU7a0JBTDNCLFNBQVM7K0JBQ0UsZUFBZTtxTEFNaEIsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0ksZUFBZTtzQkFBeEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ2FtZXJhLCBDYW1lcmFSZXN1bHRUeXBlLCBDYW1lcmFTb3VyY2UgfSBmcm9tICdAY2FwYWNpdG9yL2NhbWVyYSc7XHJcbmltcG9ydCB7IEFsZXJ0Q29udHJvbGxlciwgTG9hZGluZ0NvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9fc2VydmljZXMvYXV0aC5zZXJ2aWNlcyc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2hhcmVkLWNhbWVyYScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbWVyYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2FtZXJhLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYW1lcmFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBwb3NpdGlvbiA9ICdmbG9hdGluZyc7XHJcbiAgQElucHV0KCkgbW9kZSA9IFwibW9kZVwiO1xyXG4gIEBPdXRwdXQoKSBjYW1lcmFBcGlPdXRwdXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHByb2ZpbGU6IG51bGw7XHJcbiAgaW1hZ2VVcmw6IG51bGw7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9hZGluZ0NvbnRyb2xsZXI6IExvYWRpbmdDb250cm9sbGVyLFxyXG4gICAgcHJpdmF0ZSBhbGVydENvbnRyb2xsZXI6IEFsZXJ0Q29udHJvbGxlcixcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcclxuICApIHtcclxuICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlclByb2ZpbGUoKS50aGVuKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5wcm9maWxlID0gZGF0YVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdoZWxsbyB3b3JsZCcpO1xyXG5cclxuICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlclByb2ZpbGUoKS50aGVuKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5wcm9maWxlID0gZGF0YVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2ZpbGUsICdoZWxsbyBwcm9maWxlJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEsIHRoaXMucHJvZmlsZSwgJ2ltYWdlc3Nzc3Nzc3NzJylcclxuICAgICAgY29uc29sZS5sb2coJ2ltYWdlc3Nzc3Nzc3NzJylcclxuICAgIH0pLmNhdGNoKGUgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlLCAnZXJyb3InKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBhc3luYyBjaGFuZ2VJbWFnZSgpIHtcclxuICAgIGNvbnN0IGltYWdlID0gYXdhaXQgQ2FtZXJhLmdldFBob3RvKHtcclxuICAgICAgcXVhbGl0eTogOTAsXHJcbiAgICAgIGFsbG93RWRpdGluZzogZmFsc2UsXHJcbiAgICAgIHJlc3VsdFR5cGU6IENhbWVyYVJlc3VsdFR5cGUuVXJpLFxyXG4gICAgICBzb3VyY2U6IENhbWVyYVNvdXJjZS5QaG90b3MsXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKGltYWdlKTtcclxuICAgIGlmIChpbWFnZSkge1xyXG4gICAgICBjb25zdCBsb2FkaW5nID0gYXdhaXQgdGhpcy5sb2FkaW5nQ29udHJvbGxlci5jcmVhdGUoKTtcclxuICAgICAgYXdhaXQgbG9hZGluZy5wcmVzZW50KCk7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UudXBsb2FkSW1hZ2UoaW1hZ2UpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImltYWdlXCIsIGltYWdlKVxyXG4gICAgICBsb2FkaW5nLmRpc21pc3MoKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcclxuICAgICAgICAgIGhlYWRlcjogJ1VwbG9hZCBmYWlsZWQnLFxyXG4gICAgICAgICAgbWVzc2FnZTogJ1RoZXJlIHdhcyBhcHJvYmxlbSB1cGxvYWRpbmcgeW91ciBhdmF0YXIuJyxcclxuICAgICAgICAgIGJ1dHRvbnM6IFsnT0snXSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBhd2FpdCBhbGVydC5wcmVzZW50KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGlvbi1oZWFkZXIgW3RyYW5zbHVjZW50XT1cInRydWVcIj5cclxuICA8aW9uLXRvb2xiYXIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICA8aW9uLXRpdGxlPlxyXG4gICAgICBNeSBwcm9maWxlXHJcbiAgICA8L2lvbi10aXRsZT5cclxuICA8L2lvbi10b29sYmFyPlxyXG48L2lvbi1oZWFkZXI+XHJcblxyXG48aW9uLWNvbnRlbnQgW2Z1bGxzY3JlZW5dPVwidHJ1ZVwiPlxyXG4gIDxpb24tY29udGVudCBjbGFzcz1cImlvbi1wYWRkaW5nXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHJldmlld1wiPlxyXG4gICAgICA8aW9uLWF2YXRhciAoY2xpY2spPVwiY2hhbmdlSW1hZ2UoKVwiPlxyXG4gICAgICAgIDxpbWcgKm5nSWY9XCJpbWFnZVVybDsgZWxzZSBwbGFjaGVob2xkZXJfYXZhdGFyO1wiIFtzcmNdPVwiaW1hZ2VVcmxcIiAvPlxyXG4gICAgICAgICA8bmctdGVtcGxhdGUgI3BsYWNoZWhvbGRlcl9hdmF0YXI+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImZhbGxiYWNrXCI+XHJcbiAgICAgICAgICAgICA8cD5TZWxlY3QgYXZhdGFyPC9wPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvaW9uLWF2YXRhcj5cclxuICAgIDwvZGl2PlxyXG4gICA8L2lvbi1jb250ZW50PlxyXG48L2lvbi1jb250ZW50PlxyXG4iXX0=