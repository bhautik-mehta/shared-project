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
    }
    getFiles(numberItems) {
        console.log('number items----', numberItems);
        console.log('number items----', this.basePath);
        console.log('final ans', this.db.list(this.basePath, ref => ref.limitToLast(numberItems)));
        return this.db.list(this.basePath, ref => ref.limitToLast(numberItems));
    }
}
CamerahomeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: CamerahomeComponent, deps: [{ token: i1.AngularFireDatabase }, { token: i2.AuthService }, { token: i3.AngularFireStorage }], target: i0.ɵɵFactoryTarget.Component });
CamerahomeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: CamerahomeComponent, selector: "shared-camerahome", inputs: { position: "position", mode: "mode" }, outputs: { cameraHomeApiOutput: "cameraHomeApiOutput" }, ngImport: i0, template: "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      My home camera\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-content class=\"ion-padding\">\n    <div class=\"preview\">\n      this is camerahome works!\n\n      <div class=\"camera\">\n        <input type=\"file\" id=\"file\" #userPhoto (change)=\"onFileSelected($event)\" name=\"image\" autocomplete=\"off\" />\n        <ion-button [mode]=\"mode\" expand=\"block\" color=\"primary\" (click)=\"getFiles($event)\"></ion-button>\n      </div>\n    </div>\n  </ion-content>\n</ion-content>\n", styles: [""], components: [{ type: i4.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i4.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i4.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i4.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i4.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: CamerahomeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'shared-camerahome', template: "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      My home camera\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-content class=\"ion-padding\">\n    <div class=\"preview\">\n      this is camerahome works!\n\n      <div class=\"camera\">\n        <input type=\"file\" id=\"file\" #userPhoto (change)=\"onFileSelected($event)\" name=\"image\" autocomplete=\"off\" />\n        <ion-button [mode]=\"mode\" expand=\"block\" color=\"primary\" (click)=\"getFiles($event)\"></ion-button>\n      </div>\n    </div>\n  </ion-content>\n</ion-content>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.AngularFireDatabase }, { type: i2.AuthService }, { type: i3.AngularFireStorage }]; }, propDecorators: { position: [{
                type: Input
            }], mode: [{
                type: Input
            }], cameraHomeApiOutput: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2F1dGgvY2FtZXJhaG9tZS9jYW1lcmFob21lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvYXV0aC9jYW1lcmFob21lL2NhbWVyYWhvbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkvRSxPQUFPLEVBQU8sUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQVMvQyxNQUFNLE9BQU8sbUJBQW1CO0lBUzlCLFlBQW9CLEVBQXVCLEVBQVUsR0FBZ0IsRUFBVSxPQUEyQjtRQUF0RixPQUFFLEdBQUYsRUFBRSxDQUFxQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQVJqRyxhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDYix3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzNDLGFBQVEsR0FBRyxjQUFjLENBQUM7UUFDbEMsVUFBSyxHQUFHLGNBQWMsQ0FBQztRQUN2QixpQkFBWSxHQUFTLElBQUksQ0FBQztJQUdvRixDQUFDO0lBQy9HLFFBQVEsS0FBSyxDQUFDO0lBQ2QsY0FBYyxDQUFDLEtBQUs7UUFDbEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ25CLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sUUFBUSxHQUFHLGVBQWUsQ0FBQyxFQUFFLENBQUM7UUFDcEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRCxJQUFJO2FBQ0QsZUFBZSxFQUFFO2FBQ2pCLElBQUksQ0FDSCxRQUFRLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQy9CLElBQUksR0FBRyxFQUFFO29CQUNQLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO2lCQUNmO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQ0g7YUFDQSxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDZixJQUFJLEdBQUcsRUFBRTtnQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2xCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsUUFBUSxDQUFDLFdBQVc7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQ3pELEdBQUcsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUN2QyxHQUFHLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Z0hBNUNVLG1CQUFtQjtvR0FBbkIsbUJBQW1CLGtLQ2JoQyw2bkJBbUJBOzJGRE5hLG1CQUFtQjtrQkFML0IsU0FBUzsrQkFDRSxtQkFBbUI7cUtBS3BCLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNJLG1CQUFtQjtzQkFBNUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZVN0b3JhZ2UgfSBmcm9tIFwiQGFuZ3VsYXIvZmlyZS9jb21wYXQvc3RvcmFnZVwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL19zZXJ2aWNlcy9hdXRoLnNlcnZpY2VzJztcbmltcG9ydCB7IG1hcCwgZmluYWxpemUgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgQW5ndWxhckZpcmVEYXRhYmFzZSwgQW5ndWxhckZpcmVMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9jb21wYXQvZGF0YWJhc2UnO1xuaW1wb3J0IHsgRmlsZVVwbG9hZCB9IGZyb20gJy4uL21vZGVsL2ZpbGUtdXBsb2FkJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NoYXJlZC1jYW1lcmFob21lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbWVyYWhvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYW1lcmFob21lLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENhbWVyYWhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwb3NpdGlvbiA9ICdmbG9hdGluZyc7XG4gIEBJbnB1dCgpIG1vZGUgPSBcIm1vZGVcIjtcbiAgQE91dHB1dCgpIGNhbWVyYUhvbWVBcGlPdXRwdXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHByaXZhdGUgYmFzZVBhdGggPSAnL1Jvb21zSW1hZ2VzJztcbiAgdGl0bGUgPSBcImNsb3Vkc1NvcmFnZVwiO1xuICBzZWxlY3RlZEZpbGU6IEZpbGUgPSBudWxsO1xuICBmYjtcbiAgZG93bmxvYWRVUkw6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYjogQW5ndWxhckZpcmVEYXRhYmFzZSwgcHJpdmF0ZSBBcGk6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIHN0b3JhZ2U6IEFuZ3VsYXJGaXJlU3RvcmFnZSkgeyB9XG4gIG5nT25Jbml0KCkgeyB9XG4gIG9uRmlsZVNlbGVjdGVkKGV2ZW50KSB7XG4gICAgdmFyIG4gPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgY29uc3QgZmlsZVBhdGggPSBgUm9vbXNJbWFnZXMvJHtufWA7XG4gICAgY29uc3QgZmlsZVJlZiA9IHRoaXMuc3RvcmFnZS5yZWYoZmlsZVBhdGgpO1xuICAgIGNvbnN0IHRhc2sgPSB0aGlzLnN0b3JhZ2UudXBsb2FkKGBSb29tc0ltYWdlcy8ke259YCwgZmlsZSk7XG4gICAgdGFza1xuICAgICAgLnNuYXBzaG90Q2hhbmdlcygpXG4gICAgICAucGlwZShcbiAgICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZG93bmxvYWRVUkwgPSBmaWxlUmVmLmdldERvd25sb2FkVVJMKCk7XG4gICAgICAgICAgdGhpcy5kb3dubG9hZFVSTC5zdWJzY3JpYmUodXJsID0+IHtcbiAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgdGhpcy5mYiA9IHVybDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSh1cmwgPT4ge1xuICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgY29uc29sZS5sb2codXJsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBnZXRGaWxlcyhudW1iZXJJdGVtcyk6IEFuZ3VsYXJGaXJlTGlzdDxGaWxlVXBsb2FkPiB7XG4gICAgY29uc29sZS5sb2coJ251bWJlciBpdGVtcy0tLS0nLCBudW1iZXJJdGVtcyk7XG4gICAgY29uc29sZS5sb2coJ251bWJlciBpdGVtcy0tLS0nLCB0aGlzLmJhc2VQYXRoKTtcbiAgICBjb25zb2xlLmxvZygnZmluYWwgYW5zJywgdGhpcy5kYi5saXN0KHRoaXMuYmFzZVBhdGgsIHJlZiA9PlxuICAgICAgcmVmLmxpbWl0VG9MYXN0KG51bWJlckl0ZW1zKSkpO1xuICAgIHJldHVybiB0aGlzLmRiLmxpc3QodGhpcy5iYXNlUGF0aCwgcmVmID0+XG4gICAgICByZWYubGltaXRUb0xhc3QobnVtYmVySXRlbXMpKTtcbiAgfVxufVxuIiwiPGlvbi1oZWFkZXIgW3RyYW5zbHVjZW50XT1cInRydWVcIj5cbiAgPGlvbi10b29sYmFyIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgIDxpb24tdGl0bGU+XG4gICAgICBNeSBob21lIGNhbWVyYVxuICAgIDwvaW9uLXRpdGxlPlxuICA8L2lvbi10b29sYmFyPlxuPC9pb24taGVhZGVyPlxuPGlvbi1jb250ZW50IFtmdWxsc2NyZWVuXT1cInRydWVcIj5cbiAgPGlvbi1jb250ZW50IGNsYXNzPVwiaW9uLXBhZGRpbmdcIj5cbiAgICA8ZGl2IGNsYXNzPVwicHJldmlld1wiPlxuICAgICAgdGhpcyBpcyBjYW1lcmFob21lIHdvcmtzIVxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FtZXJhXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwiZmlsZVwiICN1c2VyUGhvdG8gKGNoYW5nZSk9XCJvbkZpbGVTZWxlY3RlZCgkZXZlbnQpXCIgbmFtZT1cImltYWdlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgLz5cbiAgICAgICAgPGlvbi1idXR0b24gW21vZGVdPVwibW9kZVwiIGV4cGFuZD1cImJsb2NrXCIgY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImdldEZpbGVzKCRldmVudClcIj48L2lvbi1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9pb24tY29udGVudD5cbjwvaW9uLWNvbnRlbnQ+XG4iXX0=