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
SpanComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: SpanComponent, selector: "ui-span", inputs: { text: "text", class: "class", color: "color", mode: "mode" }, ngImport: i0, template: "<ion-text [color]=\"color\" [mode]=\"mode\"> \n  {{ text }} \n</ion-text>\n", styles: [""], components: [{ type: i1.IonText, selector: "ion-text", inputs: ["color", "mode"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SpanComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-span', template: "<ion-text [color]=\"color\" [mode]=\"mode\"> \n  {{ text }} \n</ion-text>\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { text: [{
                type: Input
            }], class: [{
                type: Input
            }], color: [{
                type: Input
            }], mode: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bhbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL3VpLXNoYXJlZC9zcGFuL3NwYW4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC91aS1zaGFyZWQvc3Bhbi9zcGFuLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7QUFPekQsTUFBTSxPQUFPLGFBQWE7SUFPeEI7UUFIUyxVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ2xCLFNBQUksR0FBRyxJQUFJLENBQUM7SUFFTCxDQUFDO0lBRWpCLFFBQVEsS0FBSSxDQUFDOzswR0FURixhQUFhOzhGQUFiLGFBQWEsdUhDUDFCLDZFQUdBOzJGRElhLGFBQWE7a0JBTHpCLFNBQVM7K0JBQ0UsU0FBUzswRUFNVixJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndWktc3BhbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zcGFuLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3Bhbi5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTcGFuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbG9yID0gXCJwcmltYXJ5XCI7XG4gIEBJbnB1dCgpIG1vZGUgPSBcIm1kXCI7XG4gIFxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge31cblxufVxuIiwiPGlvbi10ZXh0IFtjb2xvcl09XCJjb2xvclwiIFttb2RlXT1cIm1vZGVcIj4gXG4gIHt7IHRleHQgfX0gXG48L2lvbi10ZXh0PlxuIl19