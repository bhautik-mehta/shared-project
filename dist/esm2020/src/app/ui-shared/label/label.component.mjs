import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
export class LabelComponent {
    constructor() {
        this.color = "primary";
        this.position = "fixed";
        this.mode = "md";
    }
    ngOnInit() { }
}
LabelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: LabelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LabelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: LabelComponent, selector: "ui-label", inputs: { text: "text", class: "class", color: "color", position: "position", mode: "mode" }, ngImport: i0, template: "<ion-label [color]=\"color\" [position]=\"position\" [mode]=\"mode\"> \r\n  {{ text }} \r\n</ion-label>", styles: [""], components: [{ type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: LabelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-label', template: "<ion-label [color]=\"color\" [position]=\"position\" [mode]=\"mode\"> \r\n  {{ text }} \r\n</ion-label>", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { text: [{
                type: Input
            }], class: [{
                type: Input
            }], color: [{
                type: Input
            }], position: [{
                type: Input
            }], mode: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC91aS1zaGFyZWQvbGFiZWwvbGFiZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC91aS1zaGFyZWQvbGFiZWwvbGFiZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQU96RCxNQUFNLE9BQU8sY0FBYztJQVF6QjtRQUpTLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsYUFBUSxHQUFHLE9BQU8sQ0FBQztRQUNuQixTQUFJLEdBQUcsSUFBSSxDQUFDO0lBRUwsQ0FBQztJQUVqQixRQUFRLEtBQUksQ0FBQzs7MkdBVkYsY0FBYzsrRkFBZCxjQUFjLDhJQ1AzQix5R0FFWTsyRkRLQyxjQUFjO2tCQUwxQixTQUFTOytCQUNFLFVBQVU7MEVBTVgsSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndWktbGFiZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9sYWJlbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbGFiZWwuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIExhYmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY29sb3IgPSBcInByaW1hcnlcIjtcclxuICBASW5wdXQoKSBwb3NpdGlvbiA9IFwiZml4ZWRcIjtcclxuICBASW5wdXQoKSBtb2RlID0gXCJtZFwiO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxuXHJcbn1cclxuIiwiPGlvbi1sYWJlbCBbY29sb3JdPVwiY29sb3JcIiBbcG9zaXRpb25dPVwicG9zaXRpb25cIiBbbW9kZV09XCJtb2RlXCI+IFxyXG4gIHt7IHRleHQgfX0gXHJcbjwvaW9uLWxhYmVsPiJdfQ==