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
        }], ngImport: i0, template: "<ion-textarea\n  [rows]=\"rows\"\n  [cols]=\"cols\"\n  [color]=\"color\"\n  [placeholder]=\"placeholder\" \n  [name]=\"name\" \n  [readonly]=\"readonly\" \n  [required]=\"required\"\n  [disabled]=\"disabled\"\n  (ionChange)=\"onInputChange()\"\n  [mode]=\"mode\"\n>\n</ion-textarea>\n", styles: [""], components: [{ type: i1.IonTextarea, selector: "ion-textarea", inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "spellcheck", "value", "wrap"] }], directives: [{ type: i1.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: TextAreaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-text-area', providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: TextAreaComponent,
                            multi: true
                        }], template: "<ion-textarea\n  [rows]=\"rows\"\n  [cols]=\"cols\"\n  [color]=\"color\"\n  [placeholder]=\"placeholder\" \n  [name]=\"name\" \n  [readonly]=\"readonly\" \n  [required]=\"required\"\n  [disabled]=\"disabled\"\n  (ionChange)=\"onInputChange()\"\n  [mode]=\"mode\"\n>\n</ion-textarea>\n", styles: [""] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvdWktc2hhcmVkL3RleHQtYXJlYS90ZXh0LWFyZWEuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC91aS1zaGFyZWQvdGV4dC1hcmVhL3RleHQtYXJlYS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBWXpFLE1BQU0sT0FBTyxpQkFBaUI7SUFnQjVCO1FBZFMsZ0JBQVcsR0FBRyxhQUFhLENBQUM7UUFDNUIsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsU0FBSSxHQUFHLElBQUksQ0FBQztRQUdaLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFaEIsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQTBCakQsNEZBQTRGO1FBQzVGLGNBQVMsR0FBYyxHQUFHLEVBQUU7UUFDNUIsQ0FBQyxDQUFBO1FBRUQsMEVBQTBFO1FBQzFFLG9CQUFlLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRTtRQUM3QixDQUFDLENBQUE7SUE5QmUsQ0FBQztJQUVqQixpREFBaUQ7SUFDakQsZ0NBQWdDO0lBQ3pCLFVBQVUsQ0FBQyxLQUFVO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxnRUFBZ0U7SUFDekQsZ0JBQWdCLENBQUMsRUFBTztRQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsNEVBQTRFO0lBQzVFLHlFQUF5RTtJQUNsRSxpQkFBaUIsQ0FBQyxFQUFPO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCw0Q0FBNEM7SUFDNUMsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQztJQVVELFFBQVEsS0FBSSxDQUFDO0lBRWIsYUFBYTtRQUNYLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7OzhHQXBEVSxpQkFBaUI7a0dBQWpCLGlCQUFpQiw4UkFOakIsQ0FBQztZQUNWLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsV0FBVyxFQUFFLGlCQUFpQjtZQUM5QixLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUMsMEJDWEosOFJBYUE7MkZEQWEsaUJBQWlCO2tCQVY3QixTQUFTOytCQUNFLGNBQWMsYUFHYixDQUFDOzRCQUNWLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsbUJBQW1COzRCQUM5QixLQUFLLEVBQUUsSUFBSTt5QkFDWixDQUFDOzBFQUlPLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBRUcsS0FBSztzQkFBYixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBRUksaUJBQWlCO3NCQUExQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1aS10ZXh0LWFyZWEnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1hcmVhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dC1hcmVhLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogVGV4dEFyZWFDb21wb25lbnQsXG4gICAgbXVsdGk6IHRydWVcbiAgfV1cbn0pXG5leHBvcnQgY2xhc3MgVGV4dEFyZWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9IFwiUGxhY2Vob2xkZXJcIjtcbiAgQElucHV0KCkgbmFtZSA9IFwiXCI7XG4gIEBJbnB1dCgpIGNvbG9yID0gXCJwcmltYXJ5XCI7XG4gIEBJbnB1dCgpIHJlcXVpcmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHJlYWRvbmx5ID0gZmFsc2U7XG4gIEBJbnB1dCgpIHJvd3MgPSAxO1xuICBASW5wdXQoKSBjb2xzID0gNTtcbiAgQElucHV0KCkgbW9kZSA9IFwibWRcIjtcblxuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBuZXdUZXh0SW5wdXRWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8vIFRoaXMgaXMgdGhlIGluaXRpYWwgdmFsdWUgc2V0IHRvIHRoZSBjb21wb25lbnRcbiAgLy8gQHBhcmFtIHZhbHVlIFRoZSBpbnB1dCB2YWx1ZS5cbiAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8vIFNldHMgYSBtZXRob2QgaW4gb3JkZXIgdG8gcHJvcGFnYXRlIGNoYW5nZXMgYmFjayB0byB0aGUgZm9ybS5cbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cblxuICAvLyAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBjb250cm9sIGhhcyBiZWVuIHRvdWNoZWQuXG4gIC8vICogQHBhcmFtIGZuIENhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBudW1iZXIgaW5wdXQgaXMgdG91Y2hlZC5cbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvLyBTZXRzIHRoZSBkaXNhYmxlZCBzdGF0ZSB0aHJvdWdoIHRoZSBtb2RlbFxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIC8vIENhbGxlZCB3aGVuIG51bWJlciBpbnB1dCBpcyBibHVycmVkLiBOZWVkZWQgdG8gcHJvcGVybHkgaW1wbGVtZW50IGBDb250cm9sVmFsdWVBY2Nlc3NvcmAuXG4gIG9uVG91Y2hlZDogKCkgPT4gYW55ID0gKCkgPT4ge1xuICB9XG5cbiAgLy8gTWV0aG9kIHNldCBpbiBgcmVnaXN0ZXJPbkNoYW5nZWAgdG8gcHJvcGFnYXRlIGNoYW5nZXMgYmFjayB0byB0aGUgZm9ybS5cbiAgcHJvcGFnYXRlQ2hhbmdlID0gKF86IGFueSkgPT4ge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIG9uSW5wdXRDaGFuZ2UoKSB7XG4gICAgdGhpcy5uZXdUZXh0SW5wdXRWYWx1ZS5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbn1cbiIsIjxpb24tdGV4dGFyZWFcbiAgW3Jvd3NdPVwicm93c1wiXG4gIFtjb2xzXT1cImNvbHNcIlxuICBbY29sb3JdPVwiY29sb3JcIlxuICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBcbiAgW25hbWVdPVwibmFtZVwiIFxuICBbcmVhZG9ubHldPVwicmVhZG9ubHlcIiBcbiAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcbiAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgKGlvbkNoYW5nZSk9XCJvbklucHV0Q2hhbmdlKClcIlxuICBbbW9kZV09XCJtb2RlXCJcbj5cbjwvaW9uLXRleHRhcmVhPlxuIl19