import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
export class TextAreaComponent {
    constructor() {
        this.placeholder = "Placeholder";
        this.name = "";
        this.color = "primary";
        this.required = false;
        this.readonly = false;
        this.rows = 1;
        this.cols = 5;
        this.mode = "md";
        this.disabled = false;
        this.newTextInputValue = new EventEmitter();
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
        this.newTextInputValue.emit(this.value);
    }
}
TextAreaComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: TextAreaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TextAreaComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: TextAreaComponent, selector: "ui-text-area", inputs: { placeholder: "placeholder", name: "name", color: "color", required: "required", readonly: "readonly", rows: "rows", cols: "cols", mode: "mode", value: "value", disabled: "disabled" }, outputs: { newTextInputValue: "newTextInputValue" }, providers: [{
            provide: NG_VALUE_ACCESSOR,
            useExisting: TextAreaComponent,
            multi: true
        }], ngImport: i0, template: "<ion-textarea\r\n  [rows]=\"rows\"\r\n  [cols]=\"cols\"\r\n  [color]=\"color\"\r\n  [placeholder]=\"placeholder\" \r\n  [name]=\"name\" \r\n  [readonly]=\"readonly\" \r\n  [required]=\"required\"\r\n  [disabled]=\"disabled\"\r\n  (ionChange)=\"onInputChange()\"\r\n  [mode]=\"mode\"\r\n>\r\n</ion-textarea>\r\n", styles: [""], components: [{ type: i1.IonTextarea, selector: "ion-textarea", inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "spellcheck", "value", "wrap"] }], directives: [{ type: i1.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: TextAreaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-text-area', providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: TextAreaComponent,
                            multi: true
                        }], template: "<ion-textarea\r\n  [rows]=\"rows\"\r\n  [cols]=\"cols\"\r\n  [color]=\"color\"\r\n  [placeholder]=\"placeholder\" \r\n  [name]=\"name\" \r\n  [readonly]=\"readonly\" \r\n  [required]=\"required\"\r\n  [disabled]=\"disabled\"\r\n  (ionChange)=\"onInputChange()\"\r\n  [mode]=\"mode\"\r\n>\r\n</ion-textarea>\r\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { placeholder: [{
                type: Input
            }], name: [{
                type: Input
            }], color: [{
                type: Input
            }], required: [{
                type: Input
            }], readonly: [{
                type: Input
            }], rows: [{
                type: Input
            }], cols: [{
                type: Input
            }], mode: [{
                type: Input
            }], value: [{
                type: Input
            }], disabled: [{
                type: Input
            }], newTextInputValue: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvdWktc2hhcmVkL3RleHQtYXJlYS90ZXh0LWFyZWEuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC91aS1zaGFyZWQvdGV4dC1hcmVhL3RleHQtYXJlYS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBWXpFLE1BQU0sT0FBTyxpQkFBaUI7SUFnQjVCO1FBZFMsZ0JBQVcsR0FBRyxhQUFhLENBQUM7UUFDNUIsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsU0FBSSxHQUFHLElBQUksQ0FBQztRQUdaLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFaEIsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQTBCakQsNEZBQTRGO1FBQzVGLGNBQVMsR0FBYyxHQUFHLEVBQUU7UUFDNUIsQ0FBQyxDQUFBO1FBRUQsMEVBQTBFO1FBQzFFLG9CQUFlLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRTtRQUM3QixDQUFDLENBQUE7SUE5QmUsQ0FBQztJQUVqQixpREFBaUQ7SUFDakQsZ0NBQWdDO0lBQ3pCLFVBQVUsQ0FBQyxLQUFVO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxnRUFBZ0U7SUFDekQsZ0JBQWdCLENBQUMsRUFBTztRQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsNEVBQTRFO0lBQzVFLHlFQUF5RTtJQUNsRSxpQkFBaUIsQ0FBQyxFQUFPO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCw0Q0FBNEM7SUFDNUMsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQztJQVVELFFBQVEsS0FBSSxDQUFDO0lBRWIsYUFBYTtRQUNYLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7OzhHQXBEVSxpQkFBaUI7a0dBQWpCLGlCQUFpQiw4UkFOakIsQ0FBQztZQUNWLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsV0FBVyxFQUFFLGlCQUFpQjtZQUM5QixLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUMsMEJDWEosd1RBYUE7MkZEQWEsaUJBQWlCO2tCQVY3QixTQUFTOytCQUNFLGNBQWMsYUFHYixDQUFDOzRCQUNWLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsbUJBQW1COzRCQUM5QixLQUFLLEVBQUUsSUFBSTt5QkFDWixDQUFDOzBFQUlPLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBRUcsS0FBSztzQkFBYixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBRUksaUJBQWlCO3NCQUExQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3VpLXRleHQtYXJlYScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHQtYXJlYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dC1hcmVhLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbe1xyXG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICB1c2VFeGlzdGluZzogVGV4dEFyZWFDb21wb25lbnQsXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG4gIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZXh0QXJlYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG5cclxuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9IFwiUGxhY2Vob2xkZXJcIjtcclxuICBASW5wdXQoKSBuYW1lID0gXCJcIjtcclxuICBASW5wdXQoKSBjb2xvciA9IFwicHJpbWFyeVwiO1xyXG4gIEBJbnB1dCgpIHJlcXVpcmVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcmVhZG9ubHkgPSBmYWxzZTtcclxuICBASW5wdXQoKSByb3dzID0gMTtcclxuICBASW5wdXQoKSBjb2xzID0gNTtcclxuICBASW5wdXQoKSBtb2RlID0gXCJtZFwiO1xyXG5cclxuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKSBuZXdUZXh0SW5wdXRWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgLy8gVGhpcyBpcyB0aGUgaW5pdGlhbCB2YWx1ZSBzZXQgdG8gdGhlIGNvbXBvbmVudFxyXG4gIC8vIEBwYXJhbSB2YWx1ZSBUaGUgaW5wdXQgdmFsdWUuXHJcbiAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLy8gU2V0cyBhIG1ldGhvZCBpbiBvcmRlciB0byBwcm9wYWdhdGUgY2hhbmdlcyBiYWNrIHRvIHRoZSBmb3JtLlxyXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcclxuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICAvLyAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBjb250cm9sIGhhcyBiZWVuIHRvdWNoZWQuXHJcbiAgLy8gKiBAcGFyYW0gZm4gQ2FsbGJhY2sgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIG51bWJlciBpbnB1dCBpcyB0b3VjaGVkLlxyXG4gIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XHJcbiAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICAvLyBTZXRzIHRoZSBkaXNhYmxlZCBzdGF0ZSB0aHJvdWdoIHRoZSBtb2RlbFxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICAvLyBDYWxsZWQgd2hlbiBudW1iZXIgaW5wdXQgaXMgYmx1cnJlZC4gTmVlZGVkIHRvIHByb3Blcmx5IGltcGxlbWVudCBgQ29udHJvbFZhbHVlQWNjZXNzb3JgLlxyXG4gIG9uVG91Y2hlZDogKCkgPT4gYW55ID0gKCkgPT4ge1xyXG4gIH1cclxuXHJcbiAgLy8gTWV0aG9kIHNldCBpbiBgcmVnaXN0ZXJPbkNoYW5nZWAgdG8gcHJvcGFnYXRlIGNoYW5nZXMgYmFjayB0byB0aGUgZm9ybS5cclxuICBwcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gIG9uSW5wdXRDaGFuZ2UoKSB7XHJcbiAgICB0aGlzLm5ld1RleHRJbnB1dFZhbHVlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8aW9uLXRleHRhcmVhXHJcbiAgW3Jvd3NdPVwicm93c1wiXHJcbiAgW2NvbHNdPVwiY29sc1wiXHJcbiAgW2NvbG9yXT1cImNvbG9yXCJcclxuICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBcclxuICBbbmFtZV09XCJuYW1lXCIgXHJcbiAgW3JlYWRvbmx5XT1cInJlYWRvbmx5XCIgXHJcbiAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcclxuICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gIChpb25DaGFuZ2UpPVwib25JbnB1dENoYW5nZSgpXCJcclxuICBbbW9kZV09XCJtb2RlXCJcclxuPlxyXG48L2lvbi10ZXh0YXJlYT5cclxuIl19