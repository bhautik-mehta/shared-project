import { Component, EventEmitter, Input, Output } from '@angular/core';
import { finalize } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/compat/database";
import * as i2 from "../core/_services/auth.services";
import * as i3 from "@angular/fire/compat/storage";
import * as i4 from "../model/file-upload";
import * as i5 from "@ionic/angular";
export class CamerahomeComponent {
    constructor(db, Api, storage, fileUpload) {
        this.db = db;
        this.Api = Api;
        this.storage = storage;
        this.fileUpload = fileUpload;
        this.basePath = '/uploadsimg';
        this.position = 'floating';
        this.mode = "mode";
        this.cameraHomeApiOutput = new EventEmitter();
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
                this.fileUpload.url = url;
                this.fileUpload.name = this.fileUpload.file.name;
                this.saveFileData(this.fileUpload);
                if (url) {
                    this.fb = url;
                }
                console.log(this.fb);
            });
        }))
            .subscribe(url => {
            if (url) {
                console.log(url);
            }
        });
    }
    saveFileData(fileUpload) {
        this.db.list(this.basePath).push(fileUpload);
    }
    getFiles(numberItems) {
        return this.db.list(this.basePath, ref => ref.limitToLast(numberItems));
    }
}
CamerahomeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: CamerahomeComponent, deps: [{ token: i1.AngularFireDatabase }, { token: i2.AuthService }, { token: i3.AngularFireStorage }, { token: i4.FileUpload }], target: i0.ɵɵFactoryTarget.Component });
CamerahomeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: CamerahomeComponent, selector: "shared-camerahome", inputs: { position: "position", mode: "mode" }, outputs: { cameraHomeApiOutput: "cameraHomeApiOutput" }, ngImport: i0, template: "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      My home camera\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-content class=\"ion-padding\">\n    <div class=\"preview\">\n      this is camerahome works!\n\n      <div class=\"camera\">\n        <input type=\"file\" id=\"file\" #userPhoto (change)=\"onFileSelected($event)\" name=\"image\" autocomplete=\"off\" />\n      </div>\n    </div>\n  </ion-content>\n</ion-content>\n", styles: [""], components: [{ type: i5.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i5.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i5.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i5.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: CamerahomeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'shared-camerahome', template: "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      My home camera\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-content class=\"ion-padding\">\n    <div class=\"preview\">\n      this is camerahome works!\n\n      <div class=\"camera\">\n        <input type=\"file\" id=\"file\" #userPhoto (change)=\"onFileSelected($event)\" name=\"image\" autocomplete=\"off\" />\n      </div>\n    </div>\n  </ion-content>\n</ion-content>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.AngularFireDatabase }, { type: i2.AuthService }, { type: i3.AngularFireStorage }, { type: i4.FileUpload }]; }, propDecorators: { position: [{
                type: Input
            }], mode: [{
                type: Input
            }], cameraHomeApiOutput: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2F1dGgvY2FtZXJhaG9tZS9jYW1lcmFob21lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvYXV0aC9jYW1lcmFob21lL2NhbWVyYWhvbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUsvRSxPQUFPLEVBQU8sUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7QUFRL0MsTUFBTSxPQUFPLG1CQUFtQjtJQVU5QixZQUFvQixFQUF1QixFQUFVLEdBQWdCLEVBQVUsT0FBMkIsRUFBUyxVQUFzQjtRQUFySCxPQUFFLEdBQUYsRUFBRSxDQUFxQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7UUFUakksYUFBUSxHQUFHLGFBQWEsQ0FBQztRQUN4QixhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDYix3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5ELFVBQUssR0FBRyxjQUFjLENBQUM7UUFDdkIsaUJBQVksR0FBUyxJQUFJLENBQUM7SUFHbUgsQ0FBQztJQUM5SSxRQUFRLEtBQUssQ0FBQztJQUNkLGNBQWMsQ0FBQyxLQUFLO1FBQ2xCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNuQixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxNQUFNLFFBQVEsR0FBRyxlQUFlLENBQUMsRUFBRSxDQUFDO1FBQ3BDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0QsSUFBSTthQUNELGVBQWUsRUFBRTthQUNqQixJQUFJLENBQ0gsUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzVDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDakQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ25DLElBQUksR0FBRyxFQUFFO29CQUNQLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO2lCQUNmO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQ0g7YUFDQSxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDZixJQUFJLEdBQUcsRUFBRTtnQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2xCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBQ08sWUFBWSxDQUFDLFVBQXNCO1FBQ3pDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELFFBQVEsQ0FBQyxXQUFtQjtRQUMxQixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FDdkMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7O2dIQS9DVSxtQkFBbUI7b0dBQW5CLG1CQUFtQixrS0NiaEMsMGdCQWtCQTsyRkRMYSxtQkFBbUI7a0JBTC9CLFNBQVM7K0JBQ0UsbUJBQW1COzhMQU1wQixRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDSSxtQkFBbUI7c0JBQTVCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQW5ndWxhckZpcmVTdG9yYWdlIH0gZnJvbSBcIkBhbmd1bGFyL2ZpcmUvY29tcGF0L3N0b3JhZ2VcIjtcbmltcG9ydCB7IEFuZ3VsYXJGaXJlRGF0YWJhc2UsIEFuZ3VsYXJGaXJlTGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvY29tcGF0L2RhdGFiYXNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9fc2VydmljZXMvYXV0aC5zZXJ2aWNlcyc7XG5pbXBvcnQgeyBtYXAsIGZpbmFsaXplIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IEZpbGVVcGxvYWQgfSBmcm9tICcuLi9tb2RlbC9maWxlLXVwbG9hZCc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaGFyZWQtY2FtZXJhaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYW1lcmFob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FtZXJhaG9tZS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDYW1lcmFob21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBiYXNlUGF0aCA9ICcvdXBsb2Fkc2ltZyc7XG4gIEBJbnB1dCgpIHBvc2l0aW9uID0gJ2Zsb2F0aW5nJztcbiAgQElucHV0KCkgbW9kZSA9IFwibW9kZVwiO1xuICBAT3V0cHV0KCkgY2FtZXJhSG9tZUFwaU91dHB1dCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICB0aXRsZSA9IFwiY2xvdWRzU29yYWdlXCI7XG4gIHNlbGVjdGVkRmlsZTogRmlsZSA9IG51bGw7XG4gIGZiO1xuICBkb3dubG9hZFVSTDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRiOiBBbmd1bGFyRmlyZURhdGFiYXNlLCBwcml2YXRlIEFwaTogQXV0aFNlcnZpY2UsIHByaXZhdGUgc3RvcmFnZTogQW5ndWxhckZpcmVTdG9yYWdlLCBwdWJsaWMgZmlsZVVwbG9hZDogRmlsZVVwbG9hZCkgeyB9XG4gIG5nT25Jbml0KCkgeyB9XG4gIG9uRmlsZVNlbGVjdGVkKGV2ZW50KSB7XG4gICAgdmFyIG4gPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgY29uc3QgZmlsZVBhdGggPSBgUm9vbXNJbWFnZXMvJHtufWA7XG4gICAgY29uc3QgZmlsZVJlZiA9IHRoaXMuc3RvcmFnZS5yZWYoZmlsZVBhdGgpO1xuICAgIGNvbnN0IHRhc2sgPSB0aGlzLnN0b3JhZ2UudXBsb2FkKGBSb29tc0ltYWdlcy8ke259YCwgZmlsZSk7XG4gICAgdGFza1xuICAgICAgLnNuYXBzaG90Q2hhbmdlcygpXG4gICAgICAucGlwZShcbiAgICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZG93bmxvYWRVUkwgPSBmaWxlUmVmLmdldERvd25sb2FkVVJMKCk7XG4gICAgICAgICAgdGhpcy5kb3dubG9hZFVSTC5zdWJzY3JpYmUodXJsID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmlsZVVwbG9hZC51cmwgPSB1cmw7XG4gICAgICAgICAgICB0aGlzLmZpbGVVcGxvYWQubmFtZSA9IHRoaXMuZmlsZVVwbG9hZC5maWxlLm5hbWU7XG4gICAgICAgICAgICB0aGlzLnNhdmVGaWxlRGF0YSh0aGlzLmZpbGVVcGxvYWQpO1xuICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICB0aGlzLmZiID0gdXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5mYik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHVybCA9PiB7XG4gICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyh1cmwpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICB9XG4gIHByaXZhdGUgc2F2ZUZpbGVEYXRhKGZpbGVVcGxvYWQ6IEZpbGVVcGxvYWQpOiB2b2lkIHtcbiAgICB0aGlzLmRiLmxpc3QodGhpcy5iYXNlUGF0aCkucHVzaChmaWxlVXBsb2FkKTtcbiAgfVxuICBnZXRGaWxlcyhudW1iZXJJdGVtczogbnVtYmVyKTogQW5ndWxhckZpcmVMaXN0PEZpbGVVcGxvYWQ+IHtcbiAgICByZXR1cm4gdGhpcy5kYi5saXN0KHRoaXMuYmFzZVBhdGgsIHJlZiA9PlxuICAgICAgcmVmLmxpbWl0VG9MYXN0KG51bWJlckl0ZW1zKSk7XG4gIH1cbn1cblxuIiwiPGlvbi1oZWFkZXIgW3RyYW5zbHVjZW50XT1cInRydWVcIj5cbiAgPGlvbi10b29sYmFyIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgIDxpb24tdGl0bGU+XG4gICAgICBNeSBob21lIGNhbWVyYVxuICAgIDwvaW9uLXRpdGxlPlxuICA8L2lvbi10b29sYmFyPlxuPC9pb24taGVhZGVyPlxuPGlvbi1jb250ZW50IFtmdWxsc2NyZWVuXT1cInRydWVcIj5cbiAgPGlvbi1jb250ZW50IGNsYXNzPVwiaW9uLXBhZGRpbmdcIj5cbiAgICA8ZGl2IGNsYXNzPVwicHJldmlld1wiPlxuICAgICAgdGhpcyBpcyBjYW1lcmFob21lIHdvcmtzIVxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwiZmlsZVwiICN1c2VyUGhvdG8gKGNoYW5nZSk9XCJvbkZpbGVTZWxlY3RlZCgkZXZlbnQpXCIgbmFtZT1cImltYWdlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2lvbi1jb250ZW50PlxuPC9pb24tY29udGVudD5cbiJdfQ==