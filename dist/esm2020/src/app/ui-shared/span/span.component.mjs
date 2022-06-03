import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
export class SpanComponent {
    constructor() {
        this.color = "primary";
        this.mode = "md";
    }
    ngOnInit() { }
}
SpanComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SpanComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SpanComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: SpanComponent, selector: "ui-span", inputs: { text: "text", class: "class", color: "color", mode: "mode" }, ngImport: i0, template: "<ion-text [color]=\"color\" [mode]=\"mode\"> \r\n  {{ text }} \r\n</ion-text>\r\n", styles: [""], components: [{ type: i1.IonText, selector: "ion-text", inputs: ["color", "mode"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SpanComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-span', template: "<ion-text [color]=\"color\" [mode]=\"mode\"> \r\n  {{ text }} \r\n</ion-text>\r\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { text: [{
                type: Input
            }], class: [{
                type: Input
            }], color: [{
                type: Input
            }], mode: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bhbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL3VpLXNoYXJlZC9zcGFuL3NwYW4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC91aS1zaGFyZWQvc3Bhbi9zcGFuLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7QUFPekQsTUFBTSxPQUFPLGFBQWE7SUFPeEI7UUFIUyxVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ2xCLFNBQUksR0FBRyxJQUFJLENBQUM7SUFFTCxDQUFDO0lBRWpCLFFBQVEsS0FBSSxDQUFDOzswR0FURixhQUFhOzhGQUFiLGFBQWEsdUhDUDFCLG1GQUdBOzJGRElhLGFBQWE7a0JBTHpCLFNBQVM7K0JBQ0UsU0FBUzswRUFNVixJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndWktc3BhbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NwYW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NwYW4uY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNwYW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcclxuICBASW5wdXQoKSBjb2xvciA9IFwicHJpbWFyeVwiO1xyXG4gIEBJbnB1dCgpIG1vZGUgPSBcIm1kXCI7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxufVxyXG4iLCI8aW9uLXRleHQgW2NvbG9yXT1cImNvbG9yXCIgW21vZGVdPVwibW9kZVwiPiBcclxuICB7eyB0ZXh0IH19IFxyXG48L2lvbi10ZXh0PlxyXG4iXX0=