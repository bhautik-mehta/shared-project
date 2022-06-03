import { Component, EventEmitter, Input, Output } from '@angular/core';
import { finalize } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/compat/firestore";
import * as i2 from "../core/_services/auth.services";
import * as i3 from "@angular/fire/compat/storage";
import * as i4 from "@ionic/angular";
export class CamerahomeComponent {
    constructor(db, Api, storage) {
        this.db = db;
        this.Api = Api;
        this.storage = storage;
        this.position = 'floating';
        this.mode = "mode";
        this.cameraHomeApiOutput = new EventEmitter();
        this.basePath = '/RoomsImages';
        this.title = "cloudsSorage";
        this.selectedFile = null;
    }
    ngOnInit() { }
    onFileSelected(event) {
        var n = Date.now();
        const file = event.target.files[0];
        const filePath = `RoomsImages/${n}`;
        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(`RoomsImages/${n}`, file);
        task
            .snapshotChanges()
            .pipe(finalize(() => {
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
                if (url) {
                    this.fb = url;
                    const dbtask = this.db.collection('images').add({ url: this.fb }).then(success => console.log(success, 'successfully done')).catch(e => console.log(e, 'something wrong'));
                }
                console.log('this.fb-------', this.fb);
            });
        }))
            .subscribe(url => {
            if (url) {
                console.log('url------------', url);
            }
        });
    }
}
CamerahomeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: CamerahomeComponent, deps: [{ token: i1.AngularFirestore }, { token: i2.AuthService }, { token: i3.AngularFireStorage }], target: i0.ɵɵFactoryTarget.Component });
CamerahomeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: CamerahomeComponent, selector: "shared-camerahome", inputs: { position: "position", mode: "mode" }, outputs: { cameraHomeApiOutput: "cameraHomeApiOutput" }, ngImport: i0, template: "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      My home camera\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-content class=\"ion-padding\">\n    <div class=\"preview\">\n      this is camerahome works!\n\n      <div class=\"camera\">\n        <input type=\"file\" id=\"file\" #userPhoto (change)=\"onFileSelected($event)\" name=\"image\" autocomplete=\"off\" />\n        <!-- <ion-button [mode]=\"mode\" expand=\"block\" color=\"primary\" (click)=\"expression\")></ion-button> -->\n      </div>\n    </div>\n  </ion-content>\n</ion-content>\n", styles: [""], components: [{ type: i4.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i4.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i4.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i4.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: CamerahomeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'shared-camerahome', template: "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      My home camera\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-content class=\"ion-padding\">\n    <div class=\"preview\">\n      this is camerahome works!\n\n      <div class=\"camera\">\n        <input type=\"file\" id=\"file\" #userPhoto (change)=\"onFileSelected($event)\" name=\"image\" autocomplete=\"off\" />\n        <!-- <ion-button [mode]=\"mode\" expand=\"block\" color=\"primary\" (click)=\"expression\")></ion-button> -->\n      </div>\n    </div>\n  </ion-content>\n</ion-content>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.AngularFirestore }, { type: i2.AuthService }, { type: i3.AngularFireStorage }]; }, propDecorators: { position: [{
                type: Input
            }], mode: [{
                type: Input
            }], cameraHomeApiOutput: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2F1dGgvY2FtZXJhaG9tZS9jYW1lcmFob21lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvYXV0aC9jYW1lcmFob21lL2NhbWVyYWhvbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkvRSxPQUFPLEVBQU8sUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQVMvQyxNQUFNLE9BQU8sbUJBQW1CO0lBUzlCLFlBQW9CLEVBQW9CLEVBQVUsR0FBZ0IsRUFBVSxPQUEyQjtRQUFuRixPQUFFLEdBQUYsRUFBRSxDQUFrQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQVI5RixhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDYix3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzNDLGFBQVEsR0FBRyxjQUFjLENBQUM7UUFDbEMsVUFBSyxHQUFHLGNBQWMsQ0FBQztRQUN2QixpQkFBWSxHQUFTLElBQUksQ0FBQztJQUdpRixDQUFDO0lBQzVHLFFBQVEsS0FBSyxDQUFDO0lBQ2QsY0FBYyxDQUFDLEtBQUs7UUFDbEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ25CLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sUUFBUSxHQUFHLGVBQWUsQ0FBQyxFQUFFLENBQUM7UUFDcEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUzRCxJQUFJO2FBQ0QsZUFBZSxFQUFFO2FBQ2pCLElBQUksQ0FDSCxRQUFRLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQy9CLElBQUksR0FBRyxFQUFFO29CQUNQLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO29CQUNkLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ3BFLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLENBQUMsQ0FDckQsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7aUJBQ2pEO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQ0g7YUFDQSxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDZixJQUFJLEdBQUcsRUFBRTtnQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ3JDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOztnSEF2Q1UsbUJBQW1CO29HQUFuQixtQkFBbUIsa0tDYmhDLGlvQkFtQkE7MkZETmEsbUJBQW1CO2tCQUwvQixTQUFTOytCQUNFLG1CQUFtQjtrS0FLcEIsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0ksbUJBQW1CO3NCQUE1QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFuZ3VsYXJGaXJlU3RvcmFnZSB9IGZyb20gXCJAYW5ndWxhci9maXJlL2NvbXBhdC9zdG9yYWdlXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2NvcmUvX3NlcnZpY2VzL2F1dGguc2VydmljZXMnO1xuaW1wb3J0IHsgbWFwLCBmaW5hbGl6ZSB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBGaWxlVXBsb2FkIH0gZnJvbSAnLi4vbW9kZWwvZmlsZS11cGxvYWQnO1xuaW1wb3J0IHsgQW5ndWxhckZpcmVzdG9yZSB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvY29tcGF0L2ZpcmVzdG9yZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaGFyZWQtY2FtZXJhaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYW1lcmFob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FtZXJhaG9tZS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDYW1lcmFob21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcG9zaXRpb24gPSAnZmxvYXRpbmcnO1xuICBASW5wdXQoKSBtb2RlID0gXCJtb2RlXCI7XG4gIEBPdXRwdXQoKSBjYW1lcmFIb21lQXBpT3V0cHV0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwcml2YXRlIGJhc2VQYXRoID0gJy9Sb29tc0ltYWdlcyc7XG4gIHRpdGxlID0gXCJjbG91ZHNTb3JhZ2VcIjtcbiAgc2VsZWN0ZWRGaWxlOiBGaWxlID0gbnVsbDtcbiAgZmI7XG4gIGRvd25sb2FkVVJMOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGI6IEFuZ3VsYXJGaXJlc3RvcmUsIHByaXZhdGUgQXBpOiBBdXRoU2VydmljZSwgcHJpdmF0ZSBzdG9yYWdlOiBBbmd1bGFyRmlyZVN0b3JhZ2UpIHsgfVxuICBuZ09uSW5pdCgpIHsgfVxuICBvbkZpbGVTZWxlY3RlZChldmVudCkge1xuICAgIHZhciBuID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgIGNvbnN0IGZpbGVQYXRoID0gYFJvb21zSW1hZ2VzLyR7bn1gO1xuICAgIGNvbnN0IGZpbGVSZWYgPSB0aGlzLnN0b3JhZ2UucmVmKGZpbGVQYXRoKTtcbiAgICBjb25zdCB0YXNrID0gdGhpcy5zdG9yYWdlLnVwbG9hZChgUm9vbXNJbWFnZXMvJHtufWAsIGZpbGUpO1xuXG4gICAgdGFza1xuICAgICAgLnNuYXBzaG90Q2hhbmdlcygpXG4gICAgICAucGlwZShcbiAgICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZG93bmxvYWRVUkwgPSBmaWxlUmVmLmdldERvd25sb2FkVVJMKCk7XG4gICAgICAgICAgdGhpcy5kb3dubG9hZFVSTC5zdWJzY3JpYmUodXJsID0+IHtcbiAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgdGhpcy5mYiA9IHVybDtcbiAgICAgICAgICAgICAgY29uc3QgZGJ0YXNrID0gdGhpcy5kYi5jb2xsZWN0aW9uKCdpbWFnZXMnKS5hZGQoeyB1cmw6IHRoaXMuZmIgfSkudGhlbihcbiAgICAgICAgICAgICAgICBzdWNjZXNzID0+IGNvbnNvbGUubG9nKHN1Y2Nlc3MsICdzdWNjZXNzZnVsbHkgZG9uZScpXG4gICAgICAgICAgICAgICkuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlLCAnc29tZXRoaW5nIHdyb25nJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMuZmItLS0tLS0tJywgdGhpcy5mYik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHVybCA9PiB7XG4gICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygndXJsLS0tLS0tLS0tLS0tJywgdXJsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxufVxuIiwiPGlvbi1oZWFkZXIgW3RyYW5zbHVjZW50XT1cInRydWVcIj5cbiAgPGlvbi10b29sYmFyIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgIDxpb24tdGl0bGU+XG4gICAgICBNeSBob21lIGNhbWVyYVxuICAgIDwvaW9uLXRpdGxlPlxuICA8L2lvbi10b29sYmFyPlxuPC9pb24taGVhZGVyPlxuPGlvbi1jb250ZW50IFtmdWxsc2NyZWVuXT1cInRydWVcIj5cbiAgPGlvbi1jb250ZW50IGNsYXNzPVwiaW9uLXBhZGRpbmdcIj5cbiAgICA8ZGl2IGNsYXNzPVwicHJldmlld1wiPlxuICAgICAgdGhpcyBpcyBjYW1lcmFob21lIHdvcmtzIVxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwiZmlsZVwiICN1c2VyUGhvdG8gKGNoYW5nZSk9XCJvbkZpbGVTZWxlY3RlZCgkZXZlbnQpXCIgbmFtZT1cImltYWdlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgLz5cbiAgICAgICAgPCEtLSA8aW9uLWJ1dHRvbiBbbW9kZV09XCJtb2RlXCIgZXhwYW5kPVwiYmxvY2tcIiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiZXhwcmVzc2lvblwiKT48L2lvbi1idXR0b24+IC0tPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvaW9uLWNvbnRlbnQ+XG48L2lvbi1jb250ZW50PlxuIl19