import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
export class ShowimgComponent {
    constructor() {
        this.position = 'floating';
        this.mode = "mode";
        this.showImgApiOutput = new EventEmitter();
    }
    ngOnInit() { }
}
ShowimgComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ShowimgComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ShowimgComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: ShowimgComponent, selector: "shared-showimg", inputs: { position: "position", mode: "mode" }, outputs: { showImgApiOutput: "showImgApiOutput" }, ngImport: i0, template: "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      My home camera\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-content class=\"ion-padding\">\n    <div class=\"preview\">\n      this is preview below\n      <div class=\"show-img\">\n        <img src=\"\" />\n      </div>\n    </div>\n  </ion-content>\n</ion-content>\n", styles: [""], components: [{ type: i1.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ShowimgComponent, decorators: [{
            type: Component,
            args: [{ selector: 'shared-showimg', template: "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      My home camera\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-content class=\"ion-padding\">\n    <div class=\"preview\">\n      this is preview below\n      <div class=\"show-img\">\n        <img src=\"\" />\n      </div>\n    </div>\n  </ion-content>\n</ion-content>\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { position: [{
                type: Input
            }], mode: [{
                type: Input
            }], showImgApiOutput: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd2ltZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2F1dGgvc2hvd2ltZy9zaG93aW1nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvYXV0aC9zaG93aW1nL3Nob3dpbWcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBUS9FLE1BQU0sT0FBTyxnQkFBZ0I7SUFJM0I7UUFIUyxhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDYixxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFakIsUUFBUSxLQUFLLENBQUM7OzZHQU5ILGdCQUFnQjtpR0FBaEIsZ0JBQWdCLHlKQ1I3QixnYUFpQkE7MkZEVGEsZ0JBQWdCO2tCQUw1QixTQUFTOytCQUNFLGdCQUFnQjswRUFLakIsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0ksZ0JBQWdCO3NCQUF6QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hhcmVkLXNob3dpbWcnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2hvd2ltZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Nob3dpbWcuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2hvd2ltZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHBvc2l0aW9uID0gJ2Zsb2F0aW5nJztcbiAgQElucHV0KCkgbW9kZSA9IFwibW9kZVwiO1xuICBAT3V0cHV0KCkgc2hvd0ltZ0FwaU91dHB1dCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG59XG4iLCI8aW9uLWhlYWRlciBbdHJhbnNsdWNlbnRdPVwidHJ1ZVwiPlxuICA8aW9uLXRvb2xiYXIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgPGlvbi10aXRsZT5cbiAgICAgIE15IGhvbWUgY2FtZXJhXG4gICAgPC9pb24tdGl0bGU+XG4gIDwvaW9uLXRvb2xiYXI+XG48L2lvbi1oZWFkZXI+XG48aW9uLWNvbnRlbnQgW2Z1bGxzY3JlZW5dPVwidHJ1ZVwiPlxuICA8aW9uLWNvbnRlbnQgY2xhc3M9XCJpb24tcGFkZGluZ1wiPlxuICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3XCI+XG4gICAgICB0aGlzIGlzIHByZXZpZXcgYmVsb3dcbiAgICAgIDxkaXYgY2xhc3M9XCJzaG93LWltZ1wiPlxuICAgICAgICA8aW1nIHNyYz1cIlwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9pb24tY29udGVudD5cbjwvaW9uLWNvbnRlbnQ+XG4iXX0=