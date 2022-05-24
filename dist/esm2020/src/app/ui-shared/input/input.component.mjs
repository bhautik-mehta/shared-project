import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
import * as i2 from "@angular/forms";
export class InputComponent {
    constructor() {
        this.placeholder = "Placeholder";
        this.type = "text";
        this.name = "";
        this.color = "primary";
        this.readonly = false;
        this.required = false;
        this.mode = "md";
        this.disabled = false;
        this.value = '';
        this.newValue = new EventEmitter();
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
        this.value = value;
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
    onInputChange() {
        this.newValue.emit(this.value);
    }
}
InputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: InputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
InputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: InputComponent, selector: "ui-input", inputs: { placeholder: "placeholder", type: "type", name: "name", color: "color", readonly: "readonly", required: "required", mode: "mode", disabled: "disabled", value: "value" }, outputs: { newValue: "newValue" }, providers: [{
            provide: NG_VALUE_ACCESSOR,
            useExisting: InputComponent,
            multi: true
        }], ngImport: i0, template: "<ion-input \n    [color]=\"color\"\n    [placeholder]=\"placeholder\" \n    [type]=\"type\" \n    [name]=\"name\" \n    [readonly]=\"readonly\" \n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    (ionChange)=\"onInputChange()\"\n    [mode]=\"mode\"\n    [(ngModel)]=\"value\"\n>\n</ion-input>\n", styles: [""], components: [{ type: i1.IonInput, selector: "ion-input", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"] }], directives: [{ type: i1.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }, { type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-input', providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: InputComponent,
                            multi: true
                        }], template: "<ion-input \n    [color]=\"color\"\n    [placeholder]=\"placeholder\" \n    [type]=\"type\" \n    [name]=\"name\" \n    [readonly]=\"readonly\" \n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    (ionChange)=\"onInputChange()\"\n    [mode]=\"mode\"\n    [(ngModel)]=\"value\"\n>\n</ion-input>\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { placeholder: [{
                type: Input
            }], type: [{
                type: Input
            }], name: [{
                type: Input
            }], color: [{
                type: Input
            }], readonly: [{
                type: Input
            }], required: [{
                type: Input
            }], mode: [{
                type: Input
            }], disabled: [{
                type: Input
            }], value: [{
                type: Input
            }], newValue: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC91aS1zaGFyZWQvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC91aS1zaGFyZWQvaW5wdXQvaW5wdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFZekUsTUFBTSxPQUFPLGNBQWM7SUFlekI7UUFiUyxnQkFBVyxHQUFHLGFBQWEsQ0FBQztRQUM1QixTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2QsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFNBQUksR0FBRyxJQUFJLENBQUM7UUFFWixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFVixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQTBCeEMsNEZBQTRGO1FBQzVGLGNBQVMsR0FBYyxHQUFHLEVBQUU7UUFDNUIsQ0FBQyxDQUFBO1FBRUQsMEVBQTBFO1FBQzFFLG9CQUFlLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRTtRQUM3QixDQUFDLENBQUE7SUE5QmUsQ0FBQztJQUVqQixpREFBaUQ7SUFDakQsZ0NBQWdDO0lBQ3pCLFVBQVUsQ0FBQyxLQUFVO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxnRUFBZ0U7SUFDekQsZ0JBQWdCLENBQUMsRUFBTztRQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsNEVBQTRFO0lBQzVFLHlFQUF5RTtJQUNsRSxpQkFBaUIsQ0FBQyxFQUFPO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCw0Q0FBNEM7SUFDNUMsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQztJQVVELFFBQVEsS0FBSSxDQUFDO0lBRWIsYUFBYTtRQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzsyR0FuRFUsY0FBYzsrRkFBZCxjQUFjLDBQQU5kLENBQUM7WUFDVixPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLFdBQVcsRUFBRSxjQUFjO1lBQzNCLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQywwQkNYSixvVEFhQTsyRkRBYSxjQUFjO2tCQVYxQixTQUFTOytCQUNFLFVBQVUsYUFHVCxDQUFDOzRCQUNWLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsZ0JBQWdCOzRCQUMzQixLQUFLLEVBQUUsSUFBSTt5QkFDWixDQUFDOzBFQUlPLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFFRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFFSSxRQUFRO3NCQUFqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1aS1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2lucHV0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogSW5wdXRDb21wb25lbnQsXG4gICAgbXVsdGk6IHRydWVcbiAgfV1cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9IFwiUGxhY2Vob2xkZXJcIjtcbiAgQElucHV0KCkgdHlwZSA9IFwidGV4dFwiO1xuICBASW5wdXQoKSBuYW1lID0gXCJcIjtcbiAgQElucHV0KCkgY29sb3IgPSBcInByaW1hcnlcIjtcbiAgQElucHV0KCkgcmVhZG9ubHkgPSBmYWxzZTtcbiAgQElucHV0KCkgcmVxdWlyZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbW9kZSA9IFwibWRcIjtcblxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSB2YWx1ZSA9ICcnO1xuXG4gIEBPdXRwdXQoKSBuZXdWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8vIFRoaXMgaXMgdGhlIGluaXRpYWwgdmFsdWUgc2V0IHRvIHRoZSBjb21wb25lbnRcbiAgLy8gQHBhcmFtIHZhbHVlIFRoZSBpbnB1dCB2YWx1ZS5cbiAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8vIFNldHMgYSBtZXRob2QgaW4gb3JkZXIgdG8gcHJvcGFnYXRlIGNoYW5nZXMgYmFjayB0byB0aGUgZm9ybS5cbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cblxuICAvLyAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBjb250cm9sIGhhcyBiZWVuIHRvdWNoZWQuXG4gIC8vICogQHBhcmFtIGZuIENhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBudW1iZXIgaW5wdXQgaXMgdG91Y2hlZC5cbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvLyBTZXRzIHRoZSBkaXNhYmxlZCBzdGF0ZSB0aHJvdWdoIHRoZSBtb2RlbFxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIC8vIENhbGxlZCB3aGVuIG51bWJlciBpbnB1dCBpcyBibHVycmVkLiBOZWVkZWQgdG8gcHJvcGVybHkgaW1wbGVtZW50IGBDb250cm9sVmFsdWVBY2Nlc3NvcmAuXG4gIG9uVG91Y2hlZDogKCkgPT4gYW55ID0gKCkgPT4ge1xuICB9XG5cbiAgLy8gTWV0aG9kIHNldCBpbiBgcmVnaXN0ZXJPbkNoYW5nZWAgdG8gcHJvcGFnYXRlIGNoYW5nZXMgYmFjayB0byB0aGUgZm9ybS5cbiAgcHJvcGFnYXRlQ2hhbmdlID0gKF86IGFueSkgPT4ge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIG9uSW5wdXRDaGFuZ2UoKSB7XG4gICAgdGhpcy5uZXdWYWx1ZS5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbn1cbiIsIjxpb24taW5wdXQgXG4gICAgW2NvbG9yXT1cImNvbG9yXCJcbiAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBcbiAgICBbdHlwZV09XCJ0eXBlXCIgXG4gICAgW25hbWVdPVwibmFtZVwiIFxuICAgIFtyZWFkb25seV09XCJyZWFkb25seVwiIFxuICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXG4gICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAoaW9uQ2hhbmdlKT1cIm9uSW5wdXRDaGFuZ2UoKVwiXG4gICAgW21vZGVdPVwibW9kZVwiXG4gICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXG4+XG48L2lvbi1pbnB1dD5cbiJdfQ==