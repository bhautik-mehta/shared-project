import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/compat/firestore";
import * as i2 from "../core/_services/auth.services";
import * as i3 from "@angular/fire/compat/storage";
import * as i4 from "@ionic/angular";
import * as i5 from "@angular/common";
export class ShowimgComponent {
    constructor(db, Api, storage) {
        this.db = db;
        this.Api = Api;
        this.storage = storage;
        this.basePath = '/RoomsImages';
        this.date = [];
        this.position = 'floating';
        this.mode = "mode";
        this.showImgApiOutput = new EventEmitter();
    }
    ngOnInit() {
        this.db.collection('images').valueChanges().subscribe(res => {
            if (res !== [''])
                this.date = res;
        });
    }
}
ShowimgComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ShowimgComponent, deps: [{ token: i1.AngularFirestore }, { token: i2.AuthService }, { token: i3.AngularFireStorage }], target: i0.ɵɵFactoryTarget.Component });
ShowimgComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: ShowimgComponent, selector: "shared-showimg", inputs: { position: "position", mode: "mode" }, outputs: { showImgApiOutput: "showImgApiOutput" }, ngImport: i0, template: "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      My home camera\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-content class=\"ion-padding\">\n    <div class=\"preview\">\n      this is preview below\n      <div class=\"show-img\">\n        <div class=\"images-preview\" *ngFor=\"let items of date\">\n          <img src={{items.url}} class=\"img-responsive\" alt=\"{{items.url}}\" />\n        </div>\n      </div>\n    </div>\n  </ion-content>\n</ion-content>\n", styles: [".show-img{display:grid;grid-template-columns:repeat(5,1fr);grid-gap:10px;gap:10px}.images-preview{height:300px;width:300px;object-fit:contain}.img-responsive{width:100%;height:100%;max-width:100%;max-height:100%;object-fit:contain}\n"], components: [{ type: i4.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i4.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i4.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i4.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }], directives: [{ type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ShowimgComponent, decorators: [{
            type: Component,
            args: [{ selector: 'shared-showimg', template: "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      My home camera\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-content class=\"ion-padding\">\n    <div class=\"preview\">\n      this is preview below\n      <div class=\"show-img\">\n        <div class=\"images-preview\" *ngFor=\"let items of date\">\n          <img src={{items.url}} class=\"img-responsive\" alt=\"{{items.url}}\" />\n        </div>\n      </div>\n    </div>\n  </ion-content>\n</ion-content>\n", styles: [".show-img{display:grid;grid-template-columns:repeat(5,1fr);grid-gap:10px;gap:10px}.images-preview{height:300px;width:300px;object-fit:contain}.img-responsive{width:100%;height:100%;max-width:100%;max-height:100%;object-fit:contain}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.AngularFirestore }, { type: i2.AuthService }, { type: i3.AngularFireStorage }]; }, propDecorators: { position: [{
                type: Input
            }], mode: [{
                type: Input
            }], showImgApiOutput: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd2ltZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2F1dGgvc2hvd2ltZy9zaG93aW1nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvYXV0aC9zaG93aW1nL3Nob3dpbWcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQWMvRSxNQUFNLE9BQU8sZ0JBQWdCO0lBTTNCLFlBQW9CLEVBQW9CLEVBQVUsR0FBZ0IsRUFBVSxPQUEyQjtRQUFuRixPQUFFLEdBQUYsRUFBRSxDQUFrQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQUwvRixhQUFRLEdBQUcsY0FBYyxDQUFDO1FBQ2xDLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDRCxhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDYixxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQzJELENBQUM7SUFFNUcsUUFBUTtRQUNOLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMxRCxJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQTtRQUNuQixDQUFDLENBQUMsQ0FBQztJQUVMLENBQUM7OzZHQWRVLGdCQUFnQjtpR0FBaEIsZ0JBQWdCLHlKQ2Q3QiwraUJBbUJBOzJGRExhLGdCQUFnQjtrQkFMNUIsU0FBUzsrQkFDRSxnQkFBZ0I7a0tBT2pCLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNJLGdCQUFnQjtzQkFBekIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuZ3VsYXJGaXJlRGF0YWJhc2UgfSBmcm9tICdAYW5ndWxhci9maXJlL2NvbXBhdC9kYXRhYmFzZSc7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZVN0b3JhZ2UgfSBmcm9tICdAYW5ndWxhci9maXJlL2NvbXBhdC9zdG9yYWdlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2NvcmUvX3NlcnZpY2VzL2F1dGguc2VydmljZXMnO1xuaW1wb3J0IHsgRmlsZVVwbG9hZCB9IGZyb20gJy4uL21vZGVsL2ZpbGUtdXBsb2FkJztcbmltcG9ydCB7IGdldFN0b3JhZ2UsIHJlZiwgbGlzdEFsbCB9IGZyb20gXCJmaXJlYmFzZS9zdG9yYWdlXCI7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZXN0b3JlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9jb21wYXQvZmlyZXN0b3JlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NoYXJlZC1zaG93aW1nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Nob3dpbWcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaG93aW1nLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNob3dpbWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIGJhc2VQYXRoID0gJy9Sb29tc0ltYWdlcyc7XG4gIGRhdGUgPSBbXTtcbiAgQElucHV0KCkgcG9zaXRpb24gPSAnZmxvYXRpbmcnO1xuICBASW5wdXQoKSBtb2RlID0gXCJtb2RlXCI7XG4gIEBPdXRwdXQoKSBzaG93SW1nQXBpT3V0cHV0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRiOiBBbmd1bGFyRmlyZXN0b3JlLCBwcml2YXRlIEFwaTogQXV0aFNlcnZpY2UsIHByaXZhdGUgc3RvcmFnZTogQW5ndWxhckZpcmVTdG9yYWdlKSB7IH1cbiAgdHV0b3JpYWxzXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGIuY29sbGVjdGlvbignaW1hZ2VzJykudmFsdWVDaGFuZ2VzKCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBpZiAocmVzICE9PSBbJyddKVxuICAgICAgICB0aGlzLmRhdGUgPSByZXNcbiAgICB9KTtcblxuICB9XG59XG4iLCI8aW9uLWhlYWRlciBbdHJhbnNsdWNlbnRdPVwidHJ1ZVwiPlxuICA8aW9uLXRvb2xiYXIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgPGlvbi10aXRsZT5cbiAgICAgIE15IGhvbWUgY2FtZXJhXG4gICAgPC9pb24tdGl0bGU+XG4gIDwvaW9uLXRvb2xiYXI+XG48L2lvbi1oZWFkZXI+XG48aW9uLWNvbnRlbnQgW2Z1bGxzY3JlZW5dPVwidHJ1ZVwiPlxuICA8aW9uLWNvbnRlbnQgY2xhc3M9XCJpb24tcGFkZGluZ1wiPlxuICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3XCI+XG4gICAgICB0aGlzIGlzIHByZXZpZXcgYmVsb3dcbiAgICAgIDxkaXYgY2xhc3M9XCJzaG93LWltZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VzLXByZXZpZXdcIiAqbmdGb3I9XCJsZXQgaXRlbXMgb2YgZGF0ZVwiPlxuICAgICAgICAgIDxpbWcgc3JjPXt7aXRlbXMudXJsfX0gY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIGFsdD1cInt7aXRlbXMudXJsfX1cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2lvbi1jb250ZW50PlxuPC9pb24tY29udGVudD5cbiJdfQ==