import { Component, EventEmitter, Input, Output } from '@angular/core';
import { finalize } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "../core/_services/auth.services";
import * as i2 from "@angular/fire/compat/storage";
import * as i3 from "@ionic/angular";
// import { FileUpload } from '../model/file-upload';
export class CamerahomeComponent {
    constructor(Api, storage) {
        this.Api = Api;
        this.storage = storage;
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
                // this.fileUpload.url = url;
                // this.fileUpload.name = this.fileUpload.file.name;
                // this.saveFileData(this.fileUpload);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2F1dGgvY2FtZXJhaG9tZS9jYW1lcmFob21lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvYXV0aC9jYW1lcmFob21lL2NhbWVyYWhvbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUsvRSxPQUFPLEVBQU8sUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBRS9DLHFEQUFxRDtBQU1yRCxNQUFNLE9BQU8sbUJBQW1CO0lBVTlCLFlBQW9CLEdBQWdCLEVBQVUsT0FBMkI7UUFBckQsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBVGpFLGFBQVEsR0FBRyxhQUFhLENBQUM7UUFDeEIsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUN0QixTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2Isd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuRCxVQUFLLEdBQUcsY0FBYyxDQUFDO1FBQ3ZCLGlCQUFZLEdBQVMsSUFBSSxDQUFDO0lBR21ELENBQUM7SUFDOUUsUUFBUSxLQUFLLENBQUM7SUFDZCxjQUFjLENBQUMsS0FBSztRQUNsQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDbkIsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsTUFBTSxRQUFRLEdBQUcsZUFBZSxDQUFDLEVBQUUsQ0FBQztRQUNwQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNELElBQUk7YUFDRCxlQUFlLEVBQUU7YUFDakIsSUFBSSxDQUNILFFBQVEsQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDL0IsNkJBQTZCO2dCQUM3QixvREFBb0Q7Z0JBQ3BELHNDQUFzQztnQkFDdEMsSUFBSSxHQUFHLEVBQUU7b0JBQ1AsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7aUJBQ2Y7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FDSDthQUNBLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNmLElBQUksR0FBRyxFQUFFO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7O2dIQXhDVSxtQkFBbUI7b0dBQW5CLG1CQUFtQixrS0NiaEMsMGdCQWtCQTsyRkRMYSxtQkFBbUI7a0JBTC9CLFNBQVM7K0JBQ0UsbUJBQW1CO21JQU1wQixRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDSSxtQkFBbUI7c0JBQTVCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQW5ndWxhckZpcmVTdG9yYWdlIH0gZnJvbSBcIkBhbmd1bGFyL2ZpcmUvY29tcGF0L3N0b3JhZ2VcIjtcbi8vIGltcG9ydCB7IEFuZ3VsYXJGaXJlRGF0YWJhc2UsIEFuZ3VsYXJGaXJlTGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvY29tcGF0L2RhdGFiYXNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9fc2VydmljZXMvYXV0aC5zZXJ2aWNlcyc7XG5pbXBvcnQgeyBtYXAsIGZpbmFsaXplIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbi8vIGltcG9ydCB7IEZpbGVVcGxvYWQgfSBmcm9tICcuLi9tb2RlbC9maWxlLXVwbG9hZCc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaGFyZWQtY2FtZXJhaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYW1lcmFob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FtZXJhaG9tZS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDYW1lcmFob21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBiYXNlUGF0aCA9ICcvdXBsb2Fkc2ltZyc7XG4gIEBJbnB1dCgpIHBvc2l0aW9uID0gJ2Zsb2F0aW5nJztcbiAgQElucHV0KCkgbW9kZSA9IFwibW9kZVwiO1xuICBAT3V0cHV0KCkgY2FtZXJhSG9tZUFwaU91dHB1dCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICB0aXRsZSA9IFwiY2xvdWRzU29yYWdlXCI7XG4gIHNlbGVjdGVkRmlsZTogRmlsZSA9IG51bGw7XG4gIGZiO1xuICBkb3dubG9hZFVSTDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIEFwaTogQXV0aFNlcnZpY2UsIHByaXZhdGUgc3RvcmFnZTogQW5ndWxhckZpcmVTdG9yYWdlKSB7IH1cbiAgbmdPbkluaXQoKSB7IH1cbiAgb25GaWxlU2VsZWN0ZWQoZXZlbnQpIHtcbiAgICB2YXIgbiA9IERhdGUubm93KCk7XG4gICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGBSb29tc0ltYWdlcy8ke259YDtcbiAgICBjb25zdCBmaWxlUmVmID0gdGhpcy5zdG9yYWdlLnJlZihmaWxlUGF0aCk7XG4gICAgY29uc3QgdGFzayA9IHRoaXMuc3RvcmFnZS51cGxvYWQoYFJvb21zSW1hZ2VzLyR7bn1gLCBmaWxlKTtcbiAgICB0YXNrXG4gICAgICAuc25hcHNob3RDaGFuZ2VzKClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaW5hbGl6ZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kb3dubG9hZFVSTCA9IGZpbGVSZWYuZ2V0RG93bmxvYWRVUkwoKTtcbiAgICAgICAgICB0aGlzLmRvd25sb2FkVVJMLnN1YnNjcmliZSh1cmwgPT4ge1xuICAgICAgICAgICAgLy8gdGhpcy5maWxlVXBsb2FkLnVybCA9IHVybDtcbiAgICAgICAgICAgIC8vIHRoaXMuZmlsZVVwbG9hZC5uYW1lID0gdGhpcy5maWxlVXBsb2FkLmZpbGUubmFtZTtcbiAgICAgICAgICAgIC8vIHRoaXMuc2F2ZUZpbGVEYXRhKHRoaXMuZmlsZVVwbG9hZCk7XG4gICAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmIgPSB1cmw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZiKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUodXJsID0+IHtcbiAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHVybCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gIH1cbiAgLy8gcHJpdmF0ZSBzYXZlRmlsZURhdGEoZmlsZVVwbG9hZDogRmlsZVVwbG9hZCk6IHZvaWQge1xuICAvLyAgIHRoaXMuZGIubGlzdCh0aGlzLmJhc2VQYXRoKS5wdXNoKGZpbGVVcGxvYWQpO1xuICAvLyB9XG4gIC8vIGdldEZpbGVzKG51bWJlckl0ZW1zOiBudW1iZXIpOiBBbmd1bGFyRmlyZUxpc3Q8RmlsZVVwbG9hZD4ge1xuICAvLyAgIHJldHVybiB0aGlzLmRiLmxpc3QodGhpcy5iYXNlUGF0aCwgcmVmID0+XG4gIC8vICAgICByZWYubGltaXRUb0xhc3QobnVtYmVySXRlbXMpKTtcbiAgLy8gfVxufVxuXG4iLCI8aW9uLWhlYWRlciBbdHJhbnNsdWNlbnRdPVwidHJ1ZVwiPlxuICA8aW9uLXRvb2xiYXIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgPGlvbi10aXRsZT5cbiAgICAgIE15IGhvbWUgY2FtZXJhXG4gICAgPC9pb24tdGl0bGU+XG4gIDwvaW9uLXRvb2xiYXI+XG48L2lvbi1oZWFkZXI+XG48aW9uLWNvbnRlbnQgW2Z1bGxzY3JlZW5dPVwidHJ1ZVwiPlxuICA8aW9uLWNvbnRlbnQgY2xhc3M9XCJpb24tcGFkZGluZ1wiPlxuICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3XCI+XG4gICAgICB0aGlzIGlzIGNhbWVyYWhvbWUgd29ya3MhXG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYW1lcmFcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJmaWxlXCIgI3VzZXJQaG90byAoY2hhbmdlKT1cIm9uRmlsZVNlbGVjdGVkKCRldmVudClcIiBuYW1lPVwiaW1hZ2VcIiBhdXRvY29tcGxldGU9XCJvZmZcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvaW9uLWNvbnRlbnQ+XG48L2lvbi1jb250ZW50PlxuIl19