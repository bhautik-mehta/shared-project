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
        }], ngImport: i0, template: "<ion-checkbox \n  [color]=\"color\"\n  [checked]=\"isChecked\"\n  [slot]=\"slot\"\n  [name]=\"name\"\n  [disabled]=\"readonly\"\n  (ionChange)=\"onCheckClick()\"\n  [mode]=\"mode\"\n></ion-checkbox>\n<ui-label [color]=\"color\" [text]=\"label\"></ui-label>", styles: [""], components: [{ type: i1.IonCheckbox, selector: "ion-checkbox", inputs: ["checked", "color", "disabled", "indeterminate", "mode", "name", "value"] }, { type: i2.LabelComponent, selector: "ui-label", inputs: ["text", "class", "color", "position", "mode"] }], directives: [{ type: i1.BooleanValueAccessor, selector: "ion-checkbox,ion-toggle" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: CheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-checkbox', providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: CheckboxComponent,
                            multi: true
                        }], template: "<ion-checkbox \n  [color]=\"color\"\n  [checked]=\"isChecked\"\n  [slot]=\"slot\"\n  [name]=\"name\"\n  [disabled]=\"readonly\"\n  (ionChange)=\"onCheckClick()\"\n  [mode]=\"mode\"\n></ion-checkbox>\n<ui-label [color]=\"color\" [text]=\"label\"></ui-label>", styles: [""] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC91aS1zaGFyZWQvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC91aS1zaGFyZWQvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFZekUsTUFBTSxPQUFPLGlCQUFpQjtJQWM1QjtRQVpTLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixTQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ2YsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFNBQUksR0FBRyxJQUFJLENBQUM7UUFFWixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWhCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQTBCL0MsNEZBQTRGO1FBQzVGLGNBQVMsR0FBYyxHQUFHLEVBQUU7UUFDNUIsQ0FBQyxDQUFBO1FBRUQsMEVBQTBFO1FBQzFFLG9CQUFlLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRTtRQUM3QixDQUFDLENBQUE7SUE5QmUsQ0FBQztJQUVqQixpREFBaUQ7SUFDakQsZ0NBQWdDO0lBQ3pCLFVBQVUsQ0FBQyxLQUFVO1FBQzFCLHNCQUFzQjtJQUN4QixDQUFDO0lBRUQsZ0VBQWdFO0lBQ3pELGdCQUFnQixDQUFDLEVBQU87UUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELDRFQUE0RTtJQUM1RSx5RUFBeUU7SUFDbEUsaUJBQWlCLENBQUMsRUFBTztRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsNENBQTRDO0lBQzVDLGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzdCLENBQUM7SUFVRCxRQUFRLEtBQUksQ0FBQztJQUViLFlBQVk7UUFDVixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7OEdBbkRVLGlCQUFpQjtrR0FBakIsaUJBQWlCLGlQQU5qQixDQUFDO1lBQ1YsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixXQUFXLEVBQUUsaUJBQWlCO1lBQzlCLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQywwQkNYSixrUUFTb0Q7MkZESXZDLGlCQUFpQjtrQkFWN0IsU0FBUzsrQkFDRSxhQUFhLGFBR1osQ0FBQzs0QkFDVixPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLG1CQUFtQjs0QkFDOUIsS0FBSyxFQUFFLElBQUk7eUJBQ1osQ0FBQzswRUFJTyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFFRyxRQUFRO3NCQUFoQixLQUFLO2dCQUVJLGVBQWU7c0JBQXhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VpLWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hlY2tib3guY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBDaGVja2JveENvbXBvbmVudCxcbiAgICBtdWx0aTogdHJ1ZVxuICB9XVxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIEBJbnB1dCgpIGNvbG9yID0gXCJwcmltYXJ5XCI7XG4gIEBJbnB1dCgpIGlzQ2hlY2tlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBzbG90ID0gXCJzdGFydFwiO1xuICBASW5wdXQoKSBuYW1lID0gXCJcIjtcbiAgQElucHV0KCkgcmVhZG9ubHkgPSBmYWxzZTtcbiAgQElucHV0KCkgbGFiZWwgPSBcIlwiO1xuICBASW5wdXQoKSBtb2RlID0gXCJtZFwiO1xuXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIGNoZWNrSW5wdXRWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8vIFRoaXMgaXMgdGhlIGluaXRpYWwgdmFsdWUgc2V0IHRvIHRoZSBjb21wb25lbnRcbiAgLy8gQHBhcmFtIHZhbHVlIFRoZSBpbnB1dCB2YWx1ZS5cbiAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIC8vIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8vIFNldHMgYSBtZXRob2QgaW4gb3JkZXIgdG8gcHJvcGFnYXRlIGNoYW5nZXMgYmFjayB0byB0aGUgZm9ybS5cbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cblxuICAvLyAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBjb250cm9sIGhhcyBiZWVuIHRvdWNoZWQuXG4gIC8vICogQHBhcmFtIGZuIENhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBudW1iZXIgaW5wdXQgaXMgdG91Y2hlZC5cbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvLyBTZXRzIHRoZSBkaXNhYmxlZCBzdGF0ZSB0aHJvdWdoIHRoZSBtb2RlbFxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIC8vIENhbGxlZCB3aGVuIG51bWJlciBpbnB1dCBpcyBibHVycmVkLiBOZWVkZWQgdG8gcHJvcGVybHkgaW1wbGVtZW50IGBDb250cm9sVmFsdWVBY2Nlc3NvcmAuXG4gIG9uVG91Y2hlZDogKCkgPT4gYW55ID0gKCkgPT4ge1xuICB9XG5cbiAgLy8gTWV0aG9kIHNldCBpbiBgcmVnaXN0ZXJPbkNoYW5nZWAgdG8gcHJvcGFnYXRlIGNoYW5nZXMgYmFjayB0byB0aGUgZm9ybS5cbiAgcHJvcGFnYXRlQ2hhbmdlID0gKF86IGFueSkgPT4ge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIG9uQ2hlY2tDbGljaygpIHtcbiAgICB0aGlzLmlzQ2hlY2tlZCA9ICF0aGlzLmlzQ2hlY2tlZDtcbiAgICB0aGlzLmNoZWNrSW5wdXRWYWx1ZS5lbWl0KHRoaXMuaXNDaGVja2VkKTtcbiAgfVxuXG59XG4iLCI8aW9uLWNoZWNrYm94IFxuICBbY29sb3JdPVwiY29sb3JcIlxuICBbY2hlY2tlZF09XCJpc0NoZWNrZWRcIlxuICBbc2xvdF09XCJzbG90XCJcbiAgW25hbWVdPVwibmFtZVwiXG4gIFtkaXNhYmxlZF09XCJyZWFkb25seVwiXG4gIChpb25DaGFuZ2UpPVwib25DaGVja0NsaWNrKClcIlxuICBbbW9kZV09XCJtb2RlXCJcbj48L2lvbi1jaGVja2JveD5cbjx1aS1sYWJlbCBbY29sb3JdPVwiY29sb3JcIiBbdGV4dF09XCJsYWJlbFwiPjwvdWktbGFiZWw+Il19