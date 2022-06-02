import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
import * as i2 from "../../ui-shared/span/span.component";
export class HomeComponent {
    constructor() {
        this.mode = "mode";
        this.homeSelection = new EventEmitter();
    }
    ngOnInit() { }
    onButtonClick(selected) {
        this.homeSelection.next(selected);
    }
}
HomeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: HomeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HomeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: HomeComponent, selector: "shared-home", inputs: { mode: "mode" }, outputs: { homeSelection: "homeSelection" }, ngImport: i0, template: "<ion-content class=\"auth-form\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col align-self-center>\r\n        <ion-button [mode]=\"mode\" expand=\"block\" color=\"primary\" (click)=\"onButtonClick(0)\">Register</ion-button>\r\n        <br />\r\n        <ui-span [mode]=\"mode\" class=\"already\">or Already a user?</ui-span>\r\n        <br />\r\n        <ion-button [mode]=\"mode\" expand=\"block\" color=\"danger\" (click)=\"onButtonClick(1)\">Sign In</ion-button>\r\n        <br />\r\n        <ion-button [mode]=\"mode\" expand=\"block\" color=\"success\" (click)=\"onButtonClick(2)\">Camera</ion-button>\r\n        <br />\r\n        <ion-button [mode]=\"mode\" expand=\"block\" color=\"dark\" (click)=\"onButtonClick(3)\">Home Camera</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n", styles: [""], components: [{ type: i1.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1.IonGrid, selector: "ion-grid", inputs: ["fixed"] }, { type: i1.IonRow, selector: "ion-row" }, { type: i1.IonCol, selector: "ion-col", inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] }, { type: i1.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: i2.SpanComponent, selector: "ui-span", inputs: ["text", "class", "color", "mode"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: HomeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'shared-home', template: "<ion-content class=\"auth-form\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col align-self-center>\r\n        <ion-button [mode]=\"mode\" expand=\"block\" color=\"primary\" (click)=\"onButtonClick(0)\">Register</ion-button>\r\n        <br />\r\n        <ui-span [mode]=\"mode\" class=\"already\">or Already a user?</ui-span>\r\n        <br />\r\n        <ion-button [mode]=\"mode\" expand=\"block\" color=\"danger\" (click)=\"onButtonClick(1)\">Sign In</ion-button>\r\n        <br />\r\n        <ion-button [mode]=\"mode\" expand=\"block\" color=\"success\" (click)=\"onButtonClick(2)\">Camera</ion-button>\r\n        <br />\r\n        <ion-button [mode]=\"mode\" expand=\"block\" color=\"dark\" (click)=\"onButtonClick(3)\">Home Camera</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { mode: [{
                type: Input
            }], homeSelection: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2F1dGgvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvYXV0aC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU8vRSxNQUFNLE9BQU8sYUFBYTtJQUt4QjtRQUhTLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDYixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFN0IsQ0FBQztJQUVqQixRQUFRLEtBQUksQ0FBQztJQUdiLGFBQWEsQ0FBQyxRQUFRO1FBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7OzBHQVpVLGFBQWE7OEZBQWIsYUFBYSwwSENQMUIsaTBCQWlCQTsyRkRWYSxhQUFhO2tCQUx6QixTQUFTOytCQUNFLGFBQWE7MEVBTWQsSUFBSTtzQkFBWixLQUFLO2dCQUNJLGFBQWE7c0JBQXRCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NoYXJlZC1ob21lJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIG1vZGUgPSBcIm1vZGVcIjtcclxuICBAT3V0cHV0KCkgaG9tZVNlbGVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuXHJcbiAgb25CdXR0b25DbGljayhzZWxlY3RlZCkge1xyXG4gICAgdGhpcy5ob21lU2VsZWN0aW9uLm5leHQoc2VsZWN0ZWQpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGlvbi1jb250ZW50IGNsYXNzPVwiYXV0aC1mb3JtXCI+XHJcbiAgPGlvbi1ncmlkPlxyXG4gICAgPGlvbi1yb3c+XHJcbiAgICAgIDxpb24tY29sIGFsaWduLXNlbGYtY2VudGVyPlxyXG4gICAgICAgIDxpb24tYnV0dG9uIFttb2RlXT1cIm1vZGVcIiBleHBhbmQ9XCJibG9ja1wiIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJvbkJ1dHRvbkNsaWNrKDApXCI+UmVnaXN0ZXI8L2lvbi1idXR0b24+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPHVpLXNwYW4gW21vZGVdPVwibW9kZVwiIGNsYXNzPVwiYWxyZWFkeVwiPm9yIEFscmVhZHkgYSB1c2VyPzwvdWktc3Bhbj5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8aW9uLWJ1dHRvbiBbbW9kZV09XCJtb2RlXCIgZXhwYW5kPVwiYmxvY2tcIiBjb2xvcj1cImRhbmdlclwiIChjbGljayk9XCJvbkJ1dHRvbkNsaWNrKDEpXCI+U2lnbiBJbjwvaW9uLWJ1dHRvbj5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8aW9uLWJ1dHRvbiBbbW9kZV09XCJtb2RlXCIgZXhwYW5kPVwiYmxvY2tcIiBjb2xvcj1cInN1Y2Nlc3NcIiAoY2xpY2spPVwib25CdXR0b25DbGljaygyKVwiPkNhbWVyYTwvaW9uLWJ1dHRvbj5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8aW9uLWJ1dHRvbiBbbW9kZV09XCJtb2RlXCIgZXhwYW5kPVwiYmxvY2tcIiBjb2xvcj1cImRhcmtcIiAoY2xpY2spPVwib25CdXR0b25DbGljaygzKVwiPkhvbWUgQ2FtZXJhPC9pb24tYnV0dG9uPlxyXG4gICAgICA8L2lvbi1jb2w+XHJcbiAgICA8L2lvbi1yb3c+XHJcbiAgPC9pb24tZ3JpZD5cclxuPC9pb24tY29udGVudD5cclxuIl19