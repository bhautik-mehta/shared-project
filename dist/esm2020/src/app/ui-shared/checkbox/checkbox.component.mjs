import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
import * as i2 from "../label/label.component";
export class CheckboxComponent {
    constructor() {
        this.color = "primary";
        this.isChecked = false;
        this.slot = "start";
        this.name = "";
        this.readonly = false;
        this.label = "";
        this.mode = "md";
        this.disabled = false;
        this.checkInputValue = new EventEmitter();
        // Called when number input is blurred. Needed to properly implement `ControlValueAccessor`.
        this.onTouched = () => {
        };
        // Method set in `registerOnChange` to propagate changes back to the form.
        this.propagateChange = (_) => {
        };
    }
    // This is the initial value set to the component
    // @param value The input value.
    writeValue(value) {
        // this.value = value;
    }
    // Sets a method in order to propagate changes back to the form.
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    // * Registers a callback to be triggered when the control has been touched.
    // * @param fn Callback to be triggered when the number input is touched.
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    // Sets the disabled state through the model
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    ngOnInit() { }
    onCheckClick() {
        this.isChecked = !this.isChecked;
        this.checkInputValue.emit(this.isChecked);
    }
}
CheckboxComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: CheckboxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CheckboxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: CheckboxComponent, selector: "ui-checkbox", inputs: { color: "color", isChecked: "isChecked", slot: "slot", name: "name", readonly: "readonly", label: "label", mode: "mode", disabled: "disabled" }, outputs: { checkInputValue: "checkInputValue" }, providers: [{
            provide: NG_VALUE_ACCESSOR,
            useExisting: CheckboxComponent,
            multi: true
        }], ngImport: i0, template: "<ion-checkbox \r\n  [color]=\"color\"\r\n  [checked]=\"isChecked\"\r\n  [slot]=\"slot\"\r\n  [name]=\"name\"\r\n  [disabled]=\"readonly\"\r\n  (ionChange)=\"onCheckClick()\"\r\n  [mode]=\"mode\"\r\n></ion-checkbox>\r\n<ui-label [color]=\"color\" [text]=\"label\"></ui-label>", styles: [""], components: [{ type: i1.IonCheckbox, selector: "ion-checkbox", inputs: ["checked", "color", "disabled", "indeterminate", "mode", "name", "value"] }, { type: i2.LabelComponent, selector: "ui-label", inputs: ["text", "class", "color", "position", "mode"] }], directives: [{ type: i1.BooleanValueAccessor, selector: "ion-checkbox,ion-toggle" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: CheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-checkbox', providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: CheckboxComponent,
                            multi: true
                        }], template: "<ion-checkbox \r\n  [color]=\"color\"\r\n  [checked]=\"isChecked\"\r\n  [slot]=\"slot\"\r\n  [name]=\"name\"\r\n  [disabled]=\"readonly\"\r\n  (ionChange)=\"onCheckClick()\"\r\n  [mode]=\"mode\"\r\n></ion-checkbox>\r\n<ui-label [color]=\"color\" [text]=\"label\"></ui-label>", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input
            }], isChecked: [{
                type: Input
            }], slot: [{
                type: Input
            }], name: [{
                type: Input
            }], readonly: [{
                type: Input
            }], label: [{
                type: Input
            }], mode: [{
                type: Input
            }], disabled: [{
                type: Input
            }], checkInputValue: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC91aS1zaGFyZWQvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC91aS1zaGFyZWQvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFZekUsTUFBTSxPQUFPLGlCQUFpQjtJQWM1QjtRQVpTLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixTQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ2YsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFNBQUksR0FBRyxJQUFJLENBQUM7UUFFWixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWhCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQTBCL0MsNEZBQTRGO1FBQzVGLGNBQVMsR0FBYyxHQUFHLEVBQUU7UUFDNUIsQ0FBQyxDQUFBO1FBRUQsMEVBQTBFO1FBQzFFLG9CQUFlLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRTtRQUM3QixDQUFDLENBQUE7SUE5QmUsQ0FBQztJQUVqQixpREFBaUQ7SUFDakQsZ0NBQWdDO0lBQ3pCLFVBQVUsQ0FBQyxLQUFVO1FBQzFCLHNCQUFzQjtJQUN4QixDQUFDO0lBRUQsZ0VBQWdFO0lBQ3pELGdCQUFnQixDQUFDLEVBQU87UUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELDRFQUE0RTtJQUM1RSx5RUFBeUU7SUFDbEUsaUJBQWlCLENBQUMsRUFBTztRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsNENBQTRDO0lBQzVDLGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzdCLENBQUM7SUFVRCxRQUFRLEtBQUksQ0FBQztJQUViLFlBQVk7UUFDVixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7OEdBbkRVLGlCQUFpQjtrR0FBakIsaUJBQWlCLGlQQU5qQixDQUFDO1lBQ1YsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixXQUFXLEVBQUUsaUJBQWlCO1lBQzlCLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQywwQkNYSixvUkFTb0Q7MkZESXZDLGlCQUFpQjtrQkFWN0IsU0FBUzsrQkFDRSxhQUFhLGFBR1osQ0FBQzs0QkFDVixPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLG1CQUFtQjs0QkFDOUIsS0FBSyxFQUFFLElBQUk7eUJBQ1osQ0FBQzswRUFJTyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFFRyxRQUFRO3NCQUFoQixLQUFLO2dCQUVJLGVBQWU7c0JBQXhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndWktY2hlY2tib3gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2hlY2tib3guY29tcG9uZW50LnNjc3MnXSxcclxuICBwcm92aWRlcnM6IFt7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBDaGVja2JveENvbXBvbmVudCxcclxuICAgIG11bHRpOiB0cnVlXHJcbiAgfV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gIEBJbnB1dCgpIGNvbG9yID0gXCJwcmltYXJ5XCI7XHJcbiAgQElucHV0KCkgaXNDaGVja2VkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2xvdCA9IFwic3RhcnRcIjtcclxuICBASW5wdXQoKSBuYW1lID0gXCJcIjtcclxuICBASW5wdXQoKSByZWFkb25seSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGxhYmVsID0gXCJcIjtcclxuICBASW5wdXQoKSBtb2RlID0gXCJtZFwiO1xyXG5cclxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCkgY2hlY2tJbnB1dFZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAvLyBUaGlzIGlzIHRoZSBpbml0aWFsIHZhbHVlIHNldCB0byB0aGUgY29tcG9uZW50XHJcbiAgLy8gQHBhcmFtIHZhbHVlIFRoZSBpbnB1dCB2YWx1ZS5cclxuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAvLyB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvLyBTZXRzIGEgbWV0aG9kIGluIG9yZGVyIHRvIHByb3BhZ2F0ZSBjaGFuZ2VzIGJhY2sgdG8gdGhlIGZvcm0uXHJcbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xyXG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIC8vICogUmVnaXN0ZXJzIGEgY2FsbGJhY2sgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbnRyb2wgaGFzIGJlZW4gdG91Y2hlZC5cclxuICAvLyAqIEBwYXJhbSBmbiBDYWxsYmFjayB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgbnVtYmVyIGlucHV0IGlzIHRvdWNoZWQuXHJcbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcclxuICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIC8vIFNldHMgdGhlIGRpc2FibGVkIHN0YXRlIHRocm91Z2ggdGhlIG1vZGVsXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIC8vIENhbGxlZCB3aGVuIG51bWJlciBpbnB1dCBpcyBibHVycmVkLiBOZWVkZWQgdG8gcHJvcGVybHkgaW1wbGVtZW50IGBDb250cm9sVmFsdWVBY2Nlc3NvcmAuXHJcbiAgb25Ub3VjaGVkOiAoKSA9PiBhbnkgPSAoKSA9PiB7XHJcbiAgfVxyXG5cclxuICAvLyBNZXRob2Qgc2V0IGluIGByZWdpc3Rlck9uQ2hhbmdlYCB0byBwcm9wYWdhdGUgY2hhbmdlcyBiYWNrIHRvIHRoZSBmb3JtLlxyXG4gIHByb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxuXHJcbiAgb25DaGVja0NsaWNrKCkge1xyXG4gICAgdGhpcy5pc0NoZWNrZWQgPSAhdGhpcy5pc0NoZWNrZWQ7XHJcbiAgICB0aGlzLmNoZWNrSW5wdXRWYWx1ZS5lbWl0KHRoaXMuaXNDaGVja2VkKTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxpb24tY2hlY2tib3ggXHJcbiAgW2NvbG9yXT1cImNvbG9yXCJcclxuICBbY2hlY2tlZF09XCJpc0NoZWNrZWRcIlxyXG4gIFtzbG90XT1cInNsb3RcIlxyXG4gIFtuYW1lXT1cIm5hbWVcIlxyXG4gIFtkaXNhYmxlZF09XCJyZWFkb25seVwiXHJcbiAgKGlvbkNoYW5nZSk9XCJvbkNoZWNrQ2xpY2soKVwiXHJcbiAgW21vZGVdPVwibW9kZVwiXHJcbj48L2lvbi1jaGVja2JveD5cclxuPHVpLWxhYmVsIFtjb2xvcl09XCJjb2xvclwiIFt0ZXh0XT1cImxhYmVsXCI+PC91aS1sYWJlbD4iXX0=