import { Component, EventEmitter, Input, Output } from '@angular/core';
import { finalize } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "../core/_services/auth.services";
import * as i2 from "@angular/fire/compat/storage";
import * as i3 from "@ionic/angular";
export class CamerahomeComponent {
    constructor(Api, storage) {
        this.Api = Api;
        this.storage = storage;
        this.position = 'floating';
        this.mode = "mode";
        this.cameraHomeApiOutput = new EventEmitter();
        this.title = "cloudsSorage";
        this.selectedFile = null;
    }
    ngOnInit() { }
    onFileSelected(event) {
        const d = new Date();
        let n = d.getDate();
        // var n = Date.now();
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
            .pipe(finalize(() => {
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
                if (url) {
                    this.fb = url;
                }
                console.log(this.fb);
            });
        }))
            .subscribe(url => {
            if (url) {
                console.log('this my final url', url);
            }
        });
    }
}
CamerahomeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: CamerahomeComponent, deps: [{ token: i1.AuthService }, { token: i2.AngularFireStorage }], target: i0.ɵɵFactoryTarget.Component });
CamerahomeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: CamerahomeComponent, selector: "shared-camerahome", inputs: { position: "position", mode: "mode" }, outputs: { cameraHomeApiOutput: "cameraHomeApiOutput" }, ngImport: i0, template: "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      My home camera\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-content class=\"ion-padding\">\n    <div class=\"preview\">\n      this is camerahome works!\n\n      <div class=\"camera\">\n        <input type=\"file\" id=\"file\" #userPhoto (change)=\"onFileSelected($event)\" name=\"image\" autocomplete=\"off\" />\n      </div>\n    </div>\n  </ion-content>\n</ion-content>\n", styles: [""], components: [{ type: i3.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i3.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i3.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i3.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: CamerahomeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'shared-camerahome', template: "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      My home camera\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-content class=\"ion-padding\">\n    <div class=\"preview\">\n      this is camerahome works!\n\n      <div class=\"camera\">\n        <input type=\"file\" id=\"file\" #userPhoto (change)=\"onFileSelected($event)\" name=\"image\" autocomplete=\"off\" />\n      </div>\n    </div>\n  </ion-content>\n</ion-content>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.AuthService }, { type: i2.AngularFireStorage }]; }, propDecorators: { position: [{
                type: Input
            }], mode: [{
                type: Input
            }], cameraHomeApiOutput: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2F1dGgvY2FtZXJhaG9tZS9jYW1lcmFob21lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvYXV0aC9jYW1lcmFob21lL2NhbWVyYWhvbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkvRSxPQUFPLEVBQU8sUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBTy9DLE1BQU0sT0FBTyxtQkFBbUI7SUFTOUIsWUFBb0IsR0FBZ0IsRUFBVSxPQUEyQjtRQUFyRCxRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFSaEUsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUN0QixTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2Isd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuRCxVQUFLLEdBQUcsY0FBYyxDQUFDO1FBQ3ZCLGlCQUFZLEdBQVMsSUFBSSxDQUFDO0lBR21ELENBQUM7SUFDOUUsUUFBUSxLQUFLLENBQUM7SUFDZCxjQUFjLENBQUMsS0FBSztRQUNsQixNQUFNLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixzQkFBc0I7UUFDdEIsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFaEMsTUFBTSxRQUFRLEdBQUcsZUFBZSxDQUFDLEVBQUUsQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSTthQUNELGVBQWUsRUFBRTthQUNqQixJQUFJLENBQ0gsUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzVDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMvQixJQUFJLEdBQUcsRUFBRTtvQkFDUCxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQztpQkFDZjtnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUNIO2FBQ0EsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2YsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUN2QztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7Z0hBMUNVLG1CQUFtQjtvR0FBbkIsbUJBQW1CLGtLQ1hoQywwZ0JBa0JBOzJGRFBhLG1CQUFtQjtrQkFML0IsU0FBUzsrQkFDRSxtQkFBbUI7bUlBS3BCLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNJLG1CQUFtQjtzQkFBNUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZVN0b3JhZ2UgfSBmcm9tIFwiQGFuZ3VsYXIvZmlyZS9jb21wYXQvc3RvcmFnZVwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL19zZXJ2aWNlcy9hdXRoLnNlcnZpY2VzJztcbmltcG9ydCB7IG1hcCwgZmluYWxpemUgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hhcmVkLWNhbWVyYWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FtZXJhaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhbWVyYWhvbWUuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FtZXJhaG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHBvc2l0aW9uID0gJ2Zsb2F0aW5nJztcbiAgQElucHV0KCkgbW9kZSA9IFwibW9kZVwiO1xuICBAT3V0cHV0KCkgY2FtZXJhSG9tZUFwaU91dHB1dCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICB0aXRsZSA9IFwiY2xvdWRzU29yYWdlXCI7XG4gIHNlbGVjdGVkRmlsZTogRmlsZSA9IG51bGw7XG4gIGZiO1xuICBkb3dubG9hZFVSTDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIEFwaTogQXV0aFNlcnZpY2UsIHByaXZhdGUgc3RvcmFnZTogQW5ndWxhckZpcmVTdG9yYWdlKSB7IH1cbiAgbmdPbkluaXQoKSB7IH1cbiAgb25GaWxlU2VsZWN0ZWQoZXZlbnQpIHtcbiAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcbiAgICBsZXQgbiA9IGQuZ2V0RGF0ZSgpO1xuICAgIC8vIHZhciBuID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgIGNvbnNvbGUubG9nKCdmaWxlLS0tLS0tJywgZmlsZSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IGBSb29tc0ltYWdlcy8ke259YDtcbiAgICBjb25zb2xlLmxvZygnZmlsZVBhdGgtLS0tLS0nLCBmaWxlUGF0aCk7XG4gICAgY29uc3QgZmlsZVJlZiA9IHRoaXMuc3RvcmFnZS5yZWYoZmlsZVBhdGgpO1xuICAgIGNvbnNvbGUubG9nKCdmaWxlUmVmLS0tLS0tJywgZmlsZVJlZik7XG4gICAgY29uc3QgdGFzayA9IHRoaXMuc3RvcmFnZS51cGxvYWQoYFJvb21zSW1hZ2VzLyR7bn1gLCBmaWxlKTtcbiAgICBjb25zb2xlLmxvZygndGFzay0tLS0tLScsIHRhc2spO1xuICAgIHRhc2tcbiAgICAgIC5zbmFwc2hvdENoYW5nZXMoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbmFsaXplKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmRvd25sb2FkVVJMID0gZmlsZVJlZi5nZXREb3dubG9hZFVSTCgpO1xuICAgICAgICAgIHRoaXMuZG93bmxvYWRVUkwuc3Vic2NyaWJlKHVybCA9PiB7XG4gICAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmIgPSB1cmw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZiKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUodXJsID0+IHtcbiAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIG15IGZpbmFsIHVybCcsIHVybCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cblxufVxuIiwiPGlvbi1oZWFkZXIgW3RyYW5zbHVjZW50XT1cInRydWVcIj5cbiAgPGlvbi10b29sYmFyIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgIDxpb24tdGl0bGU+XG4gICAgICBNeSBob21lIGNhbWVyYVxuICAgIDwvaW9uLXRpdGxlPlxuICA8L2lvbi10b29sYmFyPlxuPC9pb24taGVhZGVyPlxuPGlvbi1jb250ZW50IFtmdWxsc2NyZWVuXT1cInRydWVcIj5cbiAgPGlvbi1jb250ZW50IGNsYXNzPVwiaW9uLXBhZGRpbmdcIj5cbiAgICA8ZGl2IGNsYXNzPVwicHJldmlld1wiPlxuICAgICAgdGhpcyBpcyBjYW1lcmFob21lIHdvcmtzIVxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwiZmlsZVwiICN1c2VyUGhvdG8gKGNoYW5nZSk9XCJvbkZpbGVTZWxlY3RlZCgkZXZlbnQpXCIgbmFtZT1cImltYWdlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2lvbi1jb250ZW50PlxuPC9pb24tY29udGVudD5cbiJdfQ==