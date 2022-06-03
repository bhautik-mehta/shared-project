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
                }
                console.log(this.fb);
            });
        }))
            .subscribe(url => {
            if (url) {
                console.log(url);
                const dbtask = this.db.collection('images').add({ url: url });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2F1dGgvY2FtZXJhaG9tZS9jYW1lcmFob21lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvYXV0aC9jYW1lcmFob21lL2NhbWVyYWhvbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkvRSxPQUFPLEVBQU8sUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQVMvQyxNQUFNLE9BQU8sbUJBQW1CO0lBUzlCLFlBQW9CLEVBQW9CLEVBQVUsR0FBZ0IsRUFBVSxPQUEyQjtRQUFuRixPQUFFLEdBQUYsRUFBRSxDQUFrQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQVI5RixhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDYix3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzNDLGFBQVEsR0FBRyxjQUFjLENBQUM7UUFDbEMsVUFBSyxHQUFHLGNBQWMsQ0FBQztRQUN2QixpQkFBWSxHQUFTLElBQUksQ0FBQztJQUdpRixDQUFDO0lBQzVHLFFBQVEsS0FBSyxDQUFDO0lBQ2QsY0FBYyxDQUFDLEtBQUs7UUFDbEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ25CLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sUUFBUSxHQUFHLGVBQWUsQ0FBQyxFQUFFLENBQUM7UUFDcEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUzRCxJQUFJO2FBQ0QsZUFBZSxFQUFFO2FBQ2pCLElBQUksQ0FDSCxRQUFRLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQy9CLElBQUksR0FBRyxFQUFFO29CQUNQLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO2lCQUNmO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQ0g7YUFDQSxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDZixJQUFJLEdBQUcsRUFBRTtnQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQTthQUM5RDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7Z0hBckNVLG1CQUFtQjtvR0FBbkIsbUJBQW1CLGtLQ2JoQyxpb0JBbUJBOzJGRE5hLG1CQUFtQjtrQkFML0IsU0FBUzsrQkFDRSxtQkFBbUI7a0tBS3BCLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNJLG1CQUFtQjtzQkFBNUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZVN0b3JhZ2UgfSBmcm9tIFwiQGFuZ3VsYXIvZmlyZS9jb21wYXQvc3RvcmFnZVwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL19zZXJ2aWNlcy9hdXRoLnNlcnZpY2VzJztcbmltcG9ydCB7IG1hcCwgZmluYWxpemUgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgRmlsZVVwbG9hZCB9IGZyb20gJy4uL21vZGVsL2ZpbGUtdXBsb2FkJztcbmltcG9ydCB7IEFuZ3VsYXJGaXJlc3RvcmUgfSBmcm9tICdAYW5ndWxhci9maXJlL2NvbXBhdC9maXJlc3RvcmUnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hhcmVkLWNhbWVyYWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FtZXJhaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhbWVyYWhvbWUuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FtZXJhaG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHBvc2l0aW9uID0gJ2Zsb2F0aW5nJztcbiAgQElucHV0KCkgbW9kZSA9IFwibW9kZVwiO1xuICBAT3V0cHV0KCkgY2FtZXJhSG9tZUFwaU91dHB1dCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHJpdmF0ZSBiYXNlUGF0aCA9ICcvUm9vbXNJbWFnZXMnO1xuICB0aXRsZSA9IFwiY2xvdWRzU29yYWdlXCI7XG4gIHNlbGVjdGVkRmlsZTogRmlsZSA9IG51bGw7XG4gIGZiO1xuICBkb3dubG9hZFVSTDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRiOiBBbmd1bGFyRmlyZXN0b3JlLCBwcml2YXRlIEFwaTogQXV0aFNlcnZpY2UsIHByaXZhdGUgc3RvcmFnZTogQW5ndWxhckZpcmVTdG9yYWdlKSB7IH1cbiAgbmdPbkluaXQoKSB7IH1cbiAgb25GaWxlU2VsZWN0ZWQoZXZlbnQpIHtcbiAgICB2YXIgbiA9IERhdGUubm93KCk7XG4gICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGBSb29tc0ltYWdlcy8ke259YDtcbiAgICBjb25zdCBmaWxlUmVmID0gdGhpcy5zdG9yYWdlLnJlZihmaWxlUGF0aCk7XG4gICAgY29uc3QgdGFzayA9IHRoaXMuc3RvcmFnZS51cGxvYWQoYFJvb21zSW1hZ2VzLyR7bn1gLCBmaWxlKTtcblxuICAgIHRhc2tcbiAgICAgIC5zbmFwc2hvdENoYW5nZXMoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbmFsaXplKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmRvd25sb2FkVVJMID0gZmlsZVJlZi5nZXREb3dubG9hZFVSTCgpO1xuICAgICAgICAgIHRoaXMuZG93bmxvYWRVUkwuc3Vic2NyaWJlKHVybCA9PiB7XG4gICAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmIgPSB1cmw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZiKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUodXJsID0+IHtcbiAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHVybCk7XG4gICAgICAgICAgY29uc3QgZGJ0YXNrID0gdGhpcy5kYi5jb2xsZWN0aW9uKCdpbWFnZXMnKS5hZGQoeyB1cmw6IHVybCB9KVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG59XG4iLCI8aW9uLWhlYWRlciBbdHJhbnNsdWNlbnRdPVwidHJ1ZVwiPlxuICA8aW9uLXRvb2xiYXIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgPGlvbi10aXRsZT5cbiAgICAgIE15IGhvbWUgY2FtZXJhXG4gICAgPC9pb24tdGl0bGU+XG4gIDwvaW9uLXRvb2xiYXI+XG48L2lvbi1oZWFkZXI+XG48aW9uLWNvbnRlbnQgW2Z1bGxzY3JlZW5dPVwidHJ1ZVwiPlxuICA8aW9uLWNvbnRlbnQgY2xhc3M9XCJpb24tcGFkZGluZ1wiPlxuICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3XCI+XG4gICAgICB0aGlzIGlzIGNhbWVyYWhvbWUgd29ya3MhXG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYW1lcmFcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJmaWxlXCIgI3VzZXJQaG90byAoY2hhbmdlKT1cIm9uRmlsZVNlbGVjdGVkKCRldmVudClcIiBuYW1lPVwiaW1hZ2VcIiBhdXRvY29tcGxldGU9XCJvZmZcIiAvPlxuICAgICAgICA8IS0tIDxpb24tYnV0dG9uIFttb2RlXT1cIm1vZGVcIiBleHBhbmQ9XCJibG9ja1wiIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJleHByZXNzaW9uXCIpPjwvaW9uLWJ1dHRvbj4gLS0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9pb24tY29udGVudD5cbjwvaW9uLWNvbnRlbnQ+XG4iXX0=