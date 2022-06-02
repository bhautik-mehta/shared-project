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
        var n = Date.name;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2F1dGgvY2FtZXJhaG9tZS9jYW1lcmFob21lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvYXV0aC9jYW1lcmFob21lL2NhbWVyYWhvbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkvRSxPQUFPLEVBQU8sUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBTy9DLE1BQU0sT0FBTyxtQkFBbUI7SUFTOUIsWUFBb0IsR0FBZ0IsRUFBVSxPQUEyQjtRQUFyRCxRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFSaEUsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUN0QixTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2Isd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuRCxVQUFLLEdBQUcsY0FBYyxDQUFDO1FBQ3ZCLGlCQUFZLEdBQVMsSUFBSSxDQUFDO0lBR21ELENBQUM7SUFDOUUsUUFBUSxLQUFLLENBQUM7SUFDZCxjQUFjLENBQUMsS0FBSztRQUNsQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2xCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRWhDLE1BQU0sUUFBUSxHQUFHLGVBQWUsQ0FBQyxFQUFFLENBQUM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN4QyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUk7YUFDRCxlQUFlLEVBQUU7YUFDakIsSUFBSSxDQUNILFFBQVEsQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDL0IsSUFBSSxHQUFHLEVBQUU7b0JBQ1AsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7aUJBQ2Y7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FDSDthQUNBLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNmLElBQUksR0FBRyxFQUFFO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDdkM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O2dIQXhDVSxtQkFBbUI7b0dBQW5CLG1CQUFtQixrS0NYaEMsMGdCQWtCQTsyRkRQYSxtQkFBbUI7a0JBTC9CLFNBQVM7K0JBQ0UsbUJBQW1CO21JQUtwQixRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDSSxtQkFBbUI7c0JBQTVCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQW5ndWxhckZpcmVTdG9yYWdlIH0gZnJvbSBcIkBhbmd1bGFyL2ZpcmUvY29tcGF0L3N0b3JhZ2VcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9fc2VydmljZXMvYXV0aC5zZXJ2aWNlcyc7XG5pbXBvcnQgeyBtYXAsIGZpbmFsaXplIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NoYXJlZC1jYW1lcmFob21lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbWVyYWhvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYW1lcmFob21lLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENhbWVyYWhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwb3NpdGlvbiA9ICdmbG9hdGluZyc7XG4gIEBJbnB1dCgpIG1vZGUgPSBcIm1vZGVcIjtcbiAgQE91dHB1dCgpIGNhbWVyYUhvbWVBcGlPdXRwdXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgdGl0bGUgPSBcImNsb3Vkc1NvcmFnZVwiO1xuICBzZWxlY3RlZEZpbGU6IEZpbGUgPSBudWxsO1xuICBmYjtcbiAgZG93bmxvYWRVUkw6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBBcGk6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIHN0b3JhZ2U6IEFuZ3VsYXJGaXJlU3RvcmFnZSkgeyB9XG4gIG5nT25Jbml0KCkgeyB9XG4gIG9uRmlsZVNlbGVjdGVkKGV2ZW50KSB7XG4gICAgdmFyIG4gPSBEYXRlLm5hbWU7XG4gICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICBjb25zb2xlLmxvZygnZmlsZS0tLS0tLScsIGZpbGUpO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSBgUm9vbXNJbWFnZXMvJHtufWA7XG4gICAgY29uc29sZS5sb2coJ2ZpbGVQYXRoLS0tLS0tJywgZmlsZVBhdGgpO1xuICAgIGNvbnN0IGZpbGVSZWYgPSB0aGlzLnN0b3JhZ2UucmVmKGZpbGVQYXRoKTtcbiAgICBjb25zb2xlLmxvZygnZmlsZVJlZi0tLS0tLScsIGZpbGVSZWYpO1xuICAgIGNvbnN0IHRhc2sgPSB0aGlzLnN0b3JhZ2UudXBsb2FkKGBSb29tc0ltYWdlcy8ke259YCwgZmlsZSk7XG4gICAgY29uc29sZS5sb2coJ3Rhc2stLS0tLS0nLCB0YXNrKTtcbiAgICB0YXNrXG4gICAgICAuc25hcHNob3RDaGFuZ2VzKClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaW5hbGl6ZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kb3dubG9hZFVSTCA9IGZpbGVSZWYuZ2V0RG93bmxvYWRVUkwoKTtcbiAgICAgICAgICB0aGlzLmRvd25sb2FkVVJMLnN1YnNjcmliZSh1cmwgPT4ge1xuICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICB0aGlzLmZiID0gdXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5mYik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHVybCA9PiB7XG4gICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygndGhpcyBteSBmaW5hbCB1cmwnLCB1cmwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG5cbn1cbiIsIjxpb24taGVhZGVyIFt0cmFuc2x1Y2VudF09XCJ0cnVlXCI+XG4gIDxpb24tdG9vbGJhciBjb2xvcj1cInByaW1hcnlcIj5cbiAgICA8aW9uLXRpdGxlPlxuICAgICAgTXkgaG9tZSBjYW1lcmFcbiAgICA8L2lvbi10aXRsZT5cbiAgPC9pb24tdG9vbGJhcj5cbjwvaW9uLWhlYWRlcj5cbjxpb24tY29udGVudCBbZnVsbHNjcmVlbl09XCJ0cnVlXCI+XG4gIDxpb24tY29udGVudCBjbGFzcz1cImlvbi1wYWRkaW5nXCI+XG4gICAgPGRpdiBjbGFzcz1cInByZXZpZXdcIj5cbiAgICAgIHRoaXMgaXMgY2FtZXJhaG9tZSB3b3JrcyFcblxuICAgICAgPGRpdiBjbGFzcz1cImNhbWVyYVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cImZpbGVcIiAjdXNlclBob3RvIChjaGFuZ2UpPVwib25GaWxlU2VsZWN0ZWQoJGV2ZW50KVwiIG5hbWU9XCJpbWFnZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9pb24tY29udGVudD5cbjwvaW9uLWNvbnRlbnQ+XG4iXX0=