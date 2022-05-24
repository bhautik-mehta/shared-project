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
LabelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: LabelComponent, selector: "ui-label", inputs: { text: "text", class: "class", color: "color", position: "position", mode: "mode" }, ngImport: i0, template: "<ion-label [color]=\"color\" [position]=\"position\" [mode]=\"mode\"> \n  {{ text }} \n</ion-label>", styles: [""], components: [{ type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: LabelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-label', template: "<ion-label [color]=\"color\" [position]=\"position\" [mode]=\"mode\"> \n  {{ text }} \n</ion-label>", styles: [""] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC91aS1zaGFyZWQvbGFiZWwvbGFiZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC91aS1zaGFyZWQvbGFiZWwvbGFiZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQU96RCxNQUFNLE9BQU8sY0FBYztJQVF6QjtRQUpTLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsYUFBUSxHQUFHLE9BQU8sQ0FBQztRQUNuQixTQUFJLEdBQUcsSUFBSSxDQUFDO0lBRUwsQ0FBQztJQUVqQixRQUFRLEtBQUksQ0FBQzs7MkdBVkYsY0FBYzsrRkFBZCxjQUFjLDhJQ1AzQixxR0FFWTsyRkRLQyxjQUFjO2tCQUwxQixTQUFTOytCQUNFLFVBQVU7MEVBTVgsSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndWktbGFiZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGFiZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sYWJlbC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBMYWJlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBjb2xvciA9IFwicHJpbWFyeVwiO1xuICBASW5wdXQoKSBwb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgQElucHV0KCkgbW9kZSA9IFwibWRcIjtcbiAgXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG59XG4iLCI8aW9uLWxhYmVsIFtjb2xvcl09XCJjb2xvclwiIFtwb3NpdGlvbl09XCJwb3NpdGlvblwiIFttb2RlXT1cIm1vZGVcIj4gXG4gIHt7IHRleHQgfX0gXG48L2lvbi1sYWJlbD4iXX0=