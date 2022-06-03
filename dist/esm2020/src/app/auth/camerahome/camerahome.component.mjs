import { Component, EventEmitter, Input, Output } from '@angular/core';
import { finalize } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/compat/database";
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
        const dbtask = this.db.list(`RoomsImages/${n}`, file);
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
            }
        });
        dbtask
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
            }
        });
    }
}
CamerahomeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: CamerahomeComponent, deps: [{ token: i1.AngularFireDatabase }, { token: i2.AuthService }, { token: i3.AngularFireStorage }], target: i0.ɵɵFactoryTarget.Component });
CamerahomeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: CamerahomeComponent, selector: "shared-camerahome", inputs: { position: "position", mode: "mode" }, outputs: { cameraHomeApiOutput: "cameraHomeApiOutput" }, ngImport: i0, template: "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      My home camera\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-content class=\"ion-padding\">\n    <div class=\"preview\">\n      this is camerahome works!\n\n      <div class=\"camera\">\n        <input type=\"file\" id=\"file\" #userPhoto (change)=\"onFileSelected($event)\" name=\"image\" autocomplete=\"off\" />\n        <!-- <ion-button [mode]=\"mode\" expand=\"block\" color=\"primary\" (click)=\"expression\")></ion-button> -->\n      </div>\n    </div>\n  </ion-content>\n</ion-content>\n", styles: [""], components: [{ type: i4.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i4.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i4.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i4.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: CamerahomeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'shared-camerahome', template: "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      My home camera\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-content class=\"ion-padding\">\n    <div class=\"preview\">\n      this is camerahome works!\n\n      <div class=\"camera\">\n        <input type=\"file\" id=\"file\" #userPhoto (change)=\"onFileSelected($event)\" name=\"image\" autocomplete=\"off\" />\n        <!-- <ion-button [mode]=\"mode\" expand=\"block\" color=\"primary\" (click)=\"expression\")></ion-button> -->\n      </div>\n    </div>\n  </ion-content>\n</ion-content>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.AngularFireDatabase }, { type: i2.AuthService }, { type: i3.AngularFireStorage }]; }, propDecorators: { position: [{
                type: Input
            }], mode: [{
                type: Input
            }], cameraHomeApiOutput: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2F1dGgvY2FtZXJhaG9tZS9jYW1lcmFob21lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvYXV0aC9jYW1lcmFob21lL2NhbWVyYWhvbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkvRSxPQUFPLEVBQU8sUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQVMvQyxNQUFNLE9BQU8sbUJBQW1CO0lBUzlCLFlBQW9CLEVBQXVCLEVBQVUsR0FBZ0IsRUFBVSxPQUEyQjtRQUF0RixPQUFFLEdBQUYsRUFBRSxDQUFxQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQVJqRyxhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDYix3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzNDLGFBQVEsR0FBRyxjQUFjLENBQUM7UUFDbEMsVUFBSyxHQUFHLGNBQWMsQ0FBQztRQUN2QixpQkFBWSxHQUFTLElBQUksQ0FBQztJQUdvRixDQUFDO0lBQy9HLFFBQVEsS0FBSyxDQUFDO0lBQ2QsY0FBYyxDQUFDLEtBQUs7UUFDbEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ25CLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sUUFBUSxHQUFHLGVBQWUsQ0FBQyxFQUFFLENBQUM7UUFDcEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RELElBQUk7YUFDRCxlQUFlLEVBQUU7YUFDakIsSUFBSSxDQUNILFFBQVEsQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDL0IsSUFBSSxHQUFHLEVBQUU7b0JBQ1AsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7aUJBQ2Y7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FDSDthQUNBLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNmLElBQUksR0FBRyxFQUFFO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLE1BQU07YUFDSCxlQUFlLEVBQUU7YUFDakIsSUFBSSxDQUNILFFBQVEsQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDL0IsSUFBSSxHQUFHLEVBQUU7b0JBQ1AsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7aUJBQ2Y7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FDSDthQUNBLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNmLElBQUksR0FBRyxFQUFFO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O2dIQXREVSxtQkFBbUI7b0dBQW5CLG1CQUFtQixrS0NiaEMsaW9CQW1CQTsyRkROYSxtQkFBbUI7a0JBTC9CLFNBQVM7K0JBQ0UsbUJBQW1CO3FLQUtwQixRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDSSxtQkFBbUI7c0JBQTVCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQW5ndWxhckZpcmVTdG9yYWdlIH0gZnJvbSBcIkBhbmd1bGFyL2ZpcmUvY29tcGF0L3N0b3JhZ2VcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9fc2VydmljZXMvYXV0aC5zZXJ2aWNlcyc7XG5pbXBvcnQgeyBtYXAsIGZpbmFsaXplIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IEFuZ3VsYXJGaXJlRGF0YWJhc2UsIEFuZ3VsYXJGaXJlTGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvY29tcGF0L2RhdGFiYXNlJztcbmltcG9ydCB7IEZpbGVVcGxvYWQgfSBmcm9tICcuLi9tb2RlbC9maWxlLXVwbG9hZCc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaGFyZWQtY2FtZXJhaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYW1lcmFob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FtZXJhaG9tZS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDYW1lcmFob21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcG9zaXRpb24gPSAnZmxvYXRpbmcnO1xuICBASW5wdXQoKSBtb2RlID0gXCJtb2RlXCI7XG4gIEBPdXRwdXQoKSBjYW1lcmFIb21lQXBpT3V0cHV0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwcml2YXRlIGJhc2VQYXRoID0gJy9Sb29tc0ltYWdlcyc7XG4gIHRpdGxlID0gXCJjbG91ZHNTb3JhZ2VcIjtcbiAgc2VsZWN0ZWRGaWxlOiBGaWxlID0gbnVsbDtcbiAgZmI7XG4gIGRvd25sb2FkVVJMOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGI6IEFuZ3VsYXJGaXJlRGF0YWJhc2UsIHByaXZhdGUgQXBpOiBBdXRoU2VydmljZSwgcHJpdmF0ZSBzdG9yYWdlOiBBbmd1bGFyRmlyZVN0b3JhZ2UpIHsgfVxuICBuZ09uSW5pdCgpIHsgfVxuICBvbkZpbGVTZWxlY3RlZChldmVudCkge1xuICAgIHZhciBuID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgIGNvbnN0IGZpbGVQYXRoID0gYFJvb21zSW1hZ2VzLyR7bn1gO1xuICAgIGNvbnN0IGZpbGVSZWYgPSB0aGlzLnN0b3JhZ2UucmVmKGZpbGVQYXRoKTtcbiAgICBjb25zdCB0YXNrID0gdGhpcy5zdG9yYWdlLnVwbG9hZChgUm9vbXNJbWFnZXMvJHtufWAsIGZpbGUpO1xuICAgIGNvbnN0IGRidGFzayA9IHRoaXMuZGIubGlzdChgUm9vbXNJbWFnZXMvJHtufWAsIGZpbGUpO1xuICAgIHRhc2tcbiAgICAgIC5zbmFwc2hvdENoYW5nZXMoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbmFsaXplKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmRvd25sb2FkVVJMID0gZmlsZVJlZi5nZXREb3dubG9hZFVSTCgpO1xuICAgICAgICAgIHRoaXMuZG93bmxvYWRVUkwuc3Vic2NyaWJlKHVybCA9PiB7XG4gICAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmIgPSB1cmw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZiKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUodXJsID0+IHtcbiAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHVybCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIGRidGFza1xuICAgICAgLnNuYXBzaG90Q2hhbmdlcygpXG4gICAgICAucGlwZShcbiAgICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZG93bmxvYWRVUkwgPSBmaWxlUmVmLmdldERvd25sb2FkVVJMKCk7XG4gICAgICAgICAgdGhpcy5kb3dubG9hZFVSTC5zdWJzY3JpYmUodXJsID0+IHtcbiAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgdGhpcy5mYiA9IHVybDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSh1cmwgPT4ge1xuICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgY29uc29sZS5sb2codXJsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICAvLyBnZXRGaWxlcyhudW1iZXJJdGVtcyk6IEFuZ3VsYXJGaXJlTGlzdDxGaWxlVXBsb2FkPiB7XG4gIC8vICAgY29uc29sZS5sb2coJ251bWJlciBpdGVtcy0tLS0nLCBudW1iZXJJdGVtcyk7XG4gIC8vICAgY29uc29sZS5sb2coJ251bWJlciBpdGVtcy0tLS0nLCB0aGlzLmJhc2VQYXRoKTtcbiAgLy8gICBjb25zb2xlLmxvZygnZmluYWwgYW5zJywgdGhpcy5kYi5saXN0KHRoaXMuYmFzZVBhdGgsIHJlZiA9PlxuICAvLyAgICAgcmVmLmxpbWl0VG9MYXN0KG51bWJlckl0ZW1zKSkpO1xuICAvLyAgIHJldHVybiB0aGlzLmRiLmxpc3QodGhpcy5iYXNlUGF0aCwgcmVmID0+XG4gIC8vICAgICByZWYubGltaXRUb0xhc3QobnVtYmVySXRlbXMpKTtcbiAgLy8gfVxufVxuIiwiPGlvbi1oZWFkZXIgW3RyYW5zbHVjZW50XT1cInRydWVcIj5cbiAgPGlvbi10b29sYmFyIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgIDxpb24tdGl0bGU+XG4gICAgICBNeSBob21lIGNhbWVyYVxuICAgIDwvaW9uLXRpdGxlPlxuICA8L2lvbi10b29sYmFyPlxuPC9pb24taGVhZGVyPlxuPGlvbi1jb250ZW50IFtmdWxsc2NyZWVuXT1cInRydWVcIj5cbiAgPGlvbi1jb250ZW50IGNsYXNzPVwiaW9uLXBhZGRpbmdcIj5cbiAgICA8ZGl2IGNsYXNzPVwicHJldmlld1wiPlxuICAgICAgdGhpcyBpcyBjYW1lcmFob21lIHdvcmtzIVxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwiZmlsZVwiICN1c2VyUGhvdG8gKGNoYW5nZSk9XCJvbkZpbGVTZWxlY3RlZCgkZXZlbnQpXCIgbmFtZT1cImltYWdlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgLz5cbiAgICAgICAgPCEtLSA8aW9uLWJ1dHRvbiBbbW9kZV09XCJtb2RlXCIgZXhwYW5kPVwiYmxvY2tcIiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiZXhwcmVzc2lvblwiKT48L2lvbi1idXR0b24+IC0tPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvaW9uLWNvbnRlbnQ+XG48L2lvbi1jb250ZW50PlxuIl19