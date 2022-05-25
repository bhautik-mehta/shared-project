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
        }], ngImport: i0, template: "<ion-input \r\n    [color]=\"color\"\r\n    [placeholder]=\"placeholder\" \r\n    [type]=\"type\" \r\n    [name]=\"name\" \r\n    [readonly]=\"readonly\" \r\n    [required]=\"required\"\r\n    [disabled]=\"disabled\"\r\n    (ionChange)=\"onInputChange()\"\r\n    [mode]=\"mode\"\r\n    [(ngModel)]=\"value\"\r\n>\r\n</ion-input>\r\n", styles: [""], components: [{ type: i1.IonInput, selector: "ion-input", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"] }], directives: [{ type: i1.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }, { type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-input', providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: InputComponent,
                            multi: true
                        }], template: "<ion-input \r\n    [color]=\"color\"\r\n    [placeholder]=\"placeholder\" \r\n    [type]=\"type\" \r\n    [name]=\"name\" \r\n    [readonly]=\"readonly\" \r\n    [required]=\"required\"\r\n    [disabled]=\"disabled\"\r\n    (ionChange)=\"onInputChange()\"\r\n    [mode]=\"mode\"\r\n    [(ngModel)]=\"value\"\r\n>\r\n</ion-input>\r\n", styles: [""] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC91aS1zaGFyZWQvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC91aS1zaGFyZWQvaW5wdXQvaW5wdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFZekUsTUFBTSxPQUFPLGNBQWM7SUFlekI7UUFiUyxnQkFBVyxHQUFHLGFBQWEsQ0FBQztRQUM1QixTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2QsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFNBQUksR0FBRyxJQUFJLENBQUM7UUFFWixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFVixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQTBCeEMsNEZBQTRGO1FBQzVGLGNBQVMsR0FBYyxHQUFHLEVBQUU7UUFDNUIsQ0FBQyxDQUFBO1FBRUQsMEVBQTBFO1FBQzFFLG9CQUFlLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRTtRQUM3QixDQUFDLENBQUE7SUE5QmUsQ0FBQztJQUVqQixpREFBaUQ7SUFDakQsZ0NBQWdDO0lBQ3pCLFVBQVUsQ0FBQyxLQUFVO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxnRUFBZ0U7SUFDekQsZ0JBQWdCLENBQUMsRUFBTztRQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsNEVBQTRFO0lBQzVFLHlFQUF5RTtJQUNsRSxpQkFBaUIsQ0FBQyxFQUFPO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCw0Q0FBNEM7SUFDNUMsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQztJQVVELFFBQVEsS0FBSSxDQUFDO0lBRWIsYUFBYTtRQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzsyR0FuRFUsY0FBYzsrRkFBZCxjQUFjLDBQQU5kLENBQUM7WUFDVixPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLFdBQVcsRUFBRSxjQUFjO1lBQzNCLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQywwQkNYSiw4VUFhQTsyRkRBYSxjQUFjO2tCQVYxQixTQUFTOytCQUNFLFVBQVUsYUFHVCxDQUFDOzRCQUNWLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsZ0JBQWdCOzRCQUMzQixLQUFLLEVBQUUsSUFBSTt5QkFDWixDQUFDOzBFQUlPLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFFRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFFSSxRQUFRO3NCQUFqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3VpLWlucHV0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2lucHV0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbe1xyXG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICB1c2VFeGlzdGluZzogSW5wdXRDb21wb25lbnQsXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG4gIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG5cclxuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9IFwiUGxhY2Vob2xkZXJcIjtcclxuICBASW5wdXQoKSB0eXBlID0gXCJ0ZXh0XCI7XHJcbiAgQElucHV0KCkgbmFtZSA9IFwiXCI7XHJcbiAgQElucHV0KCkgY29sb3IgPSBcInByaW1hcnlcIjtcclxuICBASW5wdXQoKSByZWFkb25seSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHJlcXVpcmVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbW9kZSA9IFwibWRcIjtcclxuXHJcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSB2YWx1ZSA9ICcnO1xyXG5cclxuICBAT3V0cHV0KCkgbmV3VmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIC8vIFRoaXMgaXMgdGhlIGluaXRpYWwgdmFsdWUgc2V0IHRvIHRoZSBjb21wb25lbnRcclxuICAvLyBAcGFyYW0gdmFsdWUgVGhlIGlucHV0IHZhbHVlLlxyXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8vIFNldHMgYSBtZXRob2QgaW4gb3JkZXIgdG8gcHJvcGFnYXRlIGNoYW5nZXMgYmFjayB0byB0aGUgZm9ybS5cclxuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XHJcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgLy8gKiBSZWdpc3RlcnMgYSBjYWxsYmFjayB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgY29udHJvbCBoYXMgYmVlbiB0b3VjaGVkLlxyXG4gIC8vICogQHBhcmFtIGZuIENhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBudW1iZXIgaW5wdXQgaXMgdG91Y2hlZC5cclxuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xyXG4gICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgLy8gU2V0cyB0aGUgZGlzYWJsZWQgc3RhdGUgdGhyb3VnaCB0aGUgbW9kZWxcclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2FsbGVkIHdoZW4gbnVtYmVyIGlucHV0IGlzIGJsdXJyZWQuIE5lZWRlZCB0byBwcm9wZXJseSBpbXBsZW1lbnQgYENvbnRyb2xWYWx1ZUFjY2Vzc29yYC5cclxuICBvblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IHtcclxuICB9XHJcblxyXG4gIC8vIE1ldGhvZCBzZXQgaW4gYHJlZ2lzdGVyT25DaGFuZ2VgIHRvIHByb3BhZ2F0ZSBjaGFuZ2VzIGJhY2sgdG8gdGhlIGZvcm0uXHJcbiAgcHJvcGFnYXRlQ2hhbmdlID0gKF86IGFueSkgPT4ge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBvbklucHV0Q2hhbmdlKCkge1xyXG4gICAgdGhpcy5uZXdWYWx1ZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGlvbi1pbnB1dCBcclxuICAgIFtjb2xvcl09XCJjb2xvclwiXHJcbiAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBcclxuICAgIFt0eXBlXT1cInR5cGVcIiBcclxuICAgIFtuYW1lXT1cIm5hbWVcIiBcclxuICAgIFtyZWFkb25seV09XCJyZWFkb25seVwiIFxyXG4gICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcclxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAoaW9uQ2hhbmdlKT1cIm9uSW5wdXRDaGFuZ2UoKVwiXHJcbiAgICBbbW9kZV09XCJtb2RlXCJcclxuICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxyXG4+XHJcbjwvaW9uLWlucHV0PlxyXG4iXX0=