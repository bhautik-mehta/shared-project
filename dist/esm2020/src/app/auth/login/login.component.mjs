import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../core/_services/auth.services";
import * as i3 from "@ionic/angular";
import * as i4 from "../../ui-shared/label/label.component";
import * as i5 from "../../ui-shared/input/input.component";
import * as i6 from "../../ui-shared/span/span.component";
import * as i7 from "@angular/common";
export class LoginComponent {
    constructor(FB, auth) {
        this.FB = FB;
        this.auth = auth;
        this.position = 'floating';
        this.mode = "mode";
        this.loginApiOutput = new EventEmitter();
        this.emailValidation = "^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$";
        this.passwordValidation = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$";
        this.setDefaultData();
    }
    get f() {
        return this.loginForm.controls;
    }
    ngOnInit() { }
    setDefaultData() {
        this.isFormSubmit = false;
        this.loginForm = this.FB.group({
            email: ['', [
                    Validators.required,
                    Validators.pattern(this.emailValidation)
                ]],
            password: ['', [
                    Validators.required,
                    Validators.pattern(this.passwordValidation)
                ]]
        });
    }
    setEmitData(data, type) {
        switch (type.toString().toLowerCase()) {
            case 'email':
                this.f.email.setValue(data);
                break;
            case 'password':
                this.f.password.setValue(data);
                break;
            default:
                break;
        }
    }
    submitForm() {
        this.isFormSubmit = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.auth.SignIn(this.f.email.value, this.f.password.value).then(res => {
            this.loginApiOutput.next({
                isApiCalled: true,
                isApiSuccess: true,
                response: res
            });
            console.log('You\'re in!', res);
        }).catch(err => {
            this.loginApiOutput.next({
                isApiCalled: true,
                isApiSuccess: false,
                response: err
            });
            console.log('Something went wrong:', err.message);
        });
    }
}
LoginComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: LoginComponent, deps: [{ token: i1.FormBuilder }, { token: i2.AuthService }], target: i0.ɵɵFactoryTarget.Component });
LoginComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: LoginComponent, selector: "shared-login", inputs: { position: "position", mode: "mode" }, outputs: { loginApiOutput: "loginApiOutput" }, ngImport: i0, template: "<ion-content>\r\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"submitForm()\" novalidate>\r\n    <ion-item lines=\"full\" [mode]=\"mode\">\r\n      <ui-label [text]=\"'Email'\" [position]=\"position\" [mode]=\"mode\"></ui-label>\r\n      <ui-input class=\"width-100\" [mode]=\"mode\"\r\n        [type]=\"'text'\" [required]=\"true\" formControlName=\"email\"\r\n        [placeholder]=\"'Enter email'\" (newValue)=\"setEmitData($event, 'email')\"\r\n      ></ui-input>\r\n      <small *ngIf=\"isFormSubmit && f.email.errors\">\r\n        <ui-span *ngIf=\"f.email.errors.required\" [text]=\"'Email is required'\" [color]=\"'danger'\" [mode]=\"mode\"></ui-span>\r\n        <ui-span *ngIf=\"f.email.errors.pattern\" [text]=\"'Email is invalid'\" [color]=\"'danger'\" [mode]=\"mode\"></ui-span>\r\n      </small>\r\n    </ion-item>\r\n    <ion-item lines=\"full\" [mode]=\"mode\">\r\n      <ui-label [text]=\"'Password'\" [position]=\"position\" [mode]=\"mode\"></ui-label>\r\n      <ui-input class=\"width-100\" [mode]=\"mode\"\r\n        [type]=\"'password'\" [required]=\"true\" formControlName=\"password\"\r\n        [placeholder]=\"'Enter password'\" (newValue)=\"setEmitData($event, 'password')\"\r\n      ></ui-input>\r\n      <small *ngIf=\"isFormSubmit && f.password.errors\">\r\n        <ui-span *ngIf=\"f.password.errors.required\" [text]=\"'Password is required'\" [color]=\"'danger'\" [mode]=\"mode\"></ui-span>\r\n        <ui-span *ngIf=\"f.password.errors.pattern\" [text]=\"'Password is invalid'\" [color]=\"'danger'\" [mode]=\"mode\"></ui-span>\r\n      </small>\r\n    </ion-item>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button type=\"submit\" color=\"primary\" expand=\"block\" [mode]=\"mode\">Sign In</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n</ion-content>", styles: [".show-option,.hide-option{font-size:1.2rem;display:block;justify-content:center}\n"], components: [{ type: i3.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i3.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "counterFormatter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i4.LabelComponent, selector: "ui-label", inputs: ["text", "class", "color", "position", "mode"] }, { type: i5.InputComponent, selector: "ui-input", inputs: ["placeholder", "type", "name", "color", "readonly", "required", "mode", "disabled", "value"], outputs: ["newValue"] }, { type: i6.SpanComponent, selector: "ui-span", inputs: ["text", "class", "color", "mode"] }, { type: i3.IonRow, selector: "ion-row" }, { type: i3.IonCol, selector: "ion-col", inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] }, { type: i3.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }], directives: [{ type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: LoginComponent, decorators: [{
            type: Component,
            args: [{ selector: 'shared-login', template: "<ion-content>\r\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"submitForm()\" novalidate>\r\n    <ion-item lines=\"full\" [mode]=\"mode\">\r\n      <ui-label [text]=\"'Email'\" [position]=\"position\" [mode]=\"mode\"></ui-label>\r\n      <ui-input class=\"width-100\" [mode]=\"mode\"\r\n        [type]=\"'text'\" [required]=\"true\" formControlName=\"email\"\r\n        [placeholder]=\"'Enter email'\" (newValue)=\"setEmitData($event, 'email')\"\r\n      ></ui-input>\r\n      <small *ngIf=\"isFormSubmit && f.email.errors\">\r\n        <ui-span *ngIf=\"f.email.errors.required\" [text]=\"'Email is required'\" [color]=\"'danger'\" [mode]=\"mode\"></ui-span>\r\n        <ui-span *ngIf=\"f.email.errors.pattern\" [text]=\"'Email is invalid'\" [color]=\"'danger'\" [mode]=\"mode\"></ui-span>\r\n      </small>\r\n    </ion-item>\r\n    <ion-item lines=\"full\" [mode]=\"mode\">\r\n      <ui-label [text]=\"'Password'\" [position]=\"position\" [mode]=\"mode\"></ui-label>\r\n      <ui-input class=\"width-100\" [mode]=\"mode\"\r\n        [type]=\"'password'\" [required]=\"true\" formControlName=\"password\"\r\n        [placeholder]=\"'Enter password'\" (newValue)=\"setEmitData($event, 'password')\"\r\n      ></ui-input>\r\n      <small *ngIf=\"isFormSubmit && f.password.errors\">\r\n        <ui-span *ngIf=\"f.password.errors.required\" [text]=\"'Password is required'\" [color]=\"'danger'\" [mode]=\"mode\"></ui-span>\r\n        <ui-span *ngIf=\"f.password.errors.pattern\" [text]=\"'Password is invalid'\" [color]=\"'danger'\" [mode]=\"mode\"></ui-span>\r\n      </small>\r\n    </ion-item>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button type=\"submit\" color=\"primary\" expand=\"block\" [mode]=\"mode\">Sign In</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n</ion-content>", styles: [".show-option,.hide-option{font-size:1.2rem;display:block;justify-content:center}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }, { type: i2.AuthService }]; }, propDecorators: { position: [{
                type: Input
            }], mode: [{
                type: Input
            }], loginApiOutput: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBMEIsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztBQVFwRSxNQUFNLE9BQU8sY0FBYztJQVl6QixZQUNVLEVBQWUsRUFDZixJQUFpQjtRQURqQixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsU0FBSSxHQUFKLElBQUksQ0FBYTtRQVRsQixhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDYixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFOUMsb0JBQWUsR0FBRywrS0FBK0ssQ0FBQztRQUNsTSx1QkFBa0IsR0FBRyxrRUFBa0UsQ0FBQztRQU10RixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQUksQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7SUFDakMsQ0FBQztJQUVELFFBQVEsS0FBSyxDQUFDO0lBRWQsY0FBYztRQUNaLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDN0IsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNWLFVBQVUsQ0FBQyxRQUFRO29CQUNuQixVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7aUJBQ3pDLENBQUM7WUFDRixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ2IsVUFBVSxDQUFDLFFBQVE7b0JBQ25CLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO2lCQUM1QyxDQUFDO1NBQ0gsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSTtRQUNwQixRQUFRLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUNyQyxLQUFLLE9BQU87Z0JBQ1YsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM1QixNQUFNO1lBQ1IsS0FBSyxVQUFVO2dCQUNiLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDL0IsTUFBTTtZQUNSO2dCQUNFLE1BQU07U0FDVDtJQUNILENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFekIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTtZQUMxQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3JFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO2dCQUN2QixXQUFXLEVBQUUsSUFBSTtnQkFDakIsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFFBQVEsRUFBRSxHQUFHO2FBQ2QsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZCLFdBQVcsRUFBRSxJQUFJO2dCQUNqQixZQUFZLEVBQUUsS0FBSztnQkFDbkIsUUFBUSxFQUFFLEdBQUc7YUFDZCxDQUFDLENBQUM7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OzJHQTFFVSxjQUFjOytGQUFkLGNBQWMsbUpDVDNCLHF4REE4QmM7MkZEckJELGNBQWM7a0JBTDFCLFNBQVM7K0JBQ0UsY0FBYzs0SEFTZixRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDSSxjQUFjO3NCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2NvcmUvX3NlcnZpY2VzL2F1dGguc2VydmljZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzaGFyZWQtbG9naW4nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgbG9naW5Gb3JtOiBGb3JtR3JvdXA7XHJcbiAgaXNGb3JtU3VibWl0OiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKSBwb3NpdGlvbiA9ICdmbG9hdGluZyc7XHJcbiAgQElucHV0KCkgbW9kZSA9IFwibW9kZVwiO1xyXG4gIEBPdXRwdXQoKSBsb2dpbkFwaU91dHB1dCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgZW1haWxWYWxpZGF0aW9uID0gXCJeKChbXjw+KClcXFxcW1xcXFxdXFxcXFxcXFwuLDs6XFxcXHNAXFxcIl0rKFxcXFwuW148PigpXFxcXFtcXFxcXVxcXFxcXFxcLiw7OlxcXFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxcXFtbMC05XXsxLDN9XFxcXC5bMC05XXsxLDN9XFxcXC5bMC05XXsxLDN9XFxcXC5bMC05XXsxLDN9XFxcXF0pfCgoW2EtekEtWlxcXFwtMC05XStcXFxcLikrW2EtekEtWl17Mix9KSkkXCI7XHJcbiAgcGFzc3dvcmRWYWxpZGF0aW9uID0gXCJeKD89LipbQS1aYS16XSkoPz0uKlxcXFxkKSg/PS4qW0AkISUqIz8mXSlbQS1aYS16XFxcXGRAJCElKiM/Jl17OCx9JFwiO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgRkI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5zZXREZWZhdWx0RGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGYoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2dpbkZvcm0uY29udHJvbHM7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgfVxyXG5cclxuICBzZXREZWZhdWx0RGF0YSgpIHtcclxuICAgIHRoaXMuaXNGb3JtU3VibWl0ID0gZmFsc2U7XHJcbiAgICB0aGlzLmxvZ2luRm9ybSA9IHRoaXMuRkIuZ3JvdXAoe1xyXG4gICAgICBlbWFpbDogWycnLCBbXHJcbiAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICBWYWxpZGF0b3JzLnBhdHRlcm4odGhpcy5lbWFpbFZhbGlkYXRpb24pXHJcbiAgICAgIF1dLFxyXG4gICAgICBwYXNzd29yZDogWycnLCBbXHJcbiAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICBWYWxpZGF0b3JzLnBhdHRlcm4odGhpcy5wYXNzd29yZFZhbGlkYXRpb24pXHJcbiAgICAgIF1dXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEVtaXREYXRhKGRhdGEsIHR5cGUpIHtcclxuICAgIHN3aXRjaCAodHlwZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgIHRoaXMuZi5lbWFpbC5zZXRWYWx1ZShkYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAncGFzc3dvcmQnOlxyXG4gICAgICAgIHRoaXMuZi5wYXNzd29yZC5zZXRWYWx1ZShkYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN1Ym1pdEZvcm0oKSB7XHJcbiAgICB0aGlzLmlzRm9ybVN1Ym1pdCA9IHRydWU7XHJcblxyXG4gICAgaWYgKHRoaXMubG9naW5Gb3JtLmludmFsaWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXV0aC5TaWduSW4odGhpcy5mLmVtYWlsLnZhbHVlLCB0aGlzLmYucGFzc3dvcmQudmFsdWUpLnRoZW4ocmVzID0+IHtcclxuICAgICAgdGhpcy5sb2dpbkFwaU91dHB1dC5uZXh0KHtcclxuICAgICAgICBpc0FwaUNhbGxlZDogdHJ1ZSxcclxuICAgICAgICBpc0FwaVN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgcmVzcG9uc2U6IHJlc1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coJ1lvdVxcJ3JlIGluIScsIHJlcyk7XHJcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICB0aGlzLmxvZ2luQXBpT3V0cHV0Lm5leHQoe1xyXG4gICAgICAgIGlzQXBpQ2FsbGVkOiB0cnVlLFxyXG4gICAgICAgIGlzQXBpU3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgcmVzcG9uc2U6IGVyclxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coJ1NvbWV0aGluZyB3ZW50IHdyb25nOicsIGVyci5tZXNzYWdlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGlvbi1jb250ZW50PlxyXG4gIDxmb3JtIFtmb3JtR3JvdXBdPVwibG9naW5Gb3JtXCIgKG5nU3VibWl0KT1cInN1Ym1pdEZvcm0oKVwiIG5vdmFsaWRhdGU+XHJcbiAgICA8aW9uLWl0ZW0gbGluZXM9XCJmdWxsXCIgW21vZGVdPVwibW9kZVwiPlxyXG4gICAgICA8dWktbGFiZWwgW3RleHRdPVwiJ0VtYWlsJ1wiIFtwb3NpdGlvbl09XCJwb3NpdGlvblwiIFttb2RlXT1cIm1vZGVcIj48L3VpLWxhYmVsPlxyXG4gICAgICA8dWktaW5wdXQgY2xhc3M9XCJ3aWR0aC0xMDBcIiBbbW9kZV09XCJtb2RlXCJcclxuICAgICAgICBbdHlwZV09XCIndGV4dCdcIiBbcmVxdWlyZWRdPVwidHJ1ZVwiIGZvcm1Db250cm9sTmFtZT1cImVtYWlsXCJcclxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ0VudGVyIGVtYWlsJ1wiIChuZXdWYWx1ZSk9XCJzZXRFbWl0RGF0YSgkZXZlbnQsICdlbWFpbCcpXCJcclxuICAgICAgPjwvdWktaW5wdXQ+XHJcbiAgICAgIDxzbWFsbCAqbmdJZj1cImlzRm9ybVN1Ym1pdCAmJiBmLmVtYWlsLmVycm9yc1wiPlxyXG4gICAgICAgIDx1aS1zcGFuICpuZ0lmPVwiZi5lbWFpbC5lcnJvcnMucmVxdWlyZWRcIiBbdGV4dF09XCInRW1haWwgaXMgcmVxdWlyZWQnXCIgW2NvbG9yXT1cIidkYW5nZXInXCIgW21vZGVdPVwibW9kZVwiPjwvdWktc3Bhbj5cclxuICAgICAgICA8dWktc3BhbiAqbmdJZj1cImYuZW1haWwuZXJyb3JzLnBhdHRlcm5cIiBbdGV4dF09XCInRW1haWwgaXMgaW52YWxpZCdcIiBbY29sb3JdPVwiJ2RhbmdlcidcIiBbbW9kZV09XCJtb2RlXCI+PC91aS1zcGFuPlxyXG4gICAgICA8L3NtYWxsPlxyXG4gICAgPC9pb24taXRlbT5cclxuICAgIDxpb24taXRlbSBsaW5lcz1cImZ1bGxcIiBbbW9kZV09XCJtb2RlXCI+XHJcbiAgICAgIDx1aS1sYWJlbCBbdGV4dF09XCInUGFzc3dvcmQnXCIgW3Bvc2l0aW9uXT1cInBvc2l0aW9uXCIgW21vZGVdPVwibW9kZVwiPjwvdWktbGFiZWw+XHJcbiAgICAgIDx1aS1pbnB1dCBjbGFzcz1cIndpZHRoLTEwMFwiIFttb2RlXT1cIm1vZGVcIlxyXG4gICAgICAgIFt0eXBlXT1cIidwYXNzd29yZCdcIiBbcmVxdWlyZWRdPVwidHJ1ZVwiIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ0VudGVyIHBhc3N3b3JkJ1wiIChuZXdWYWx1ZSk9XCJzZXRFbWl0RGF0YSgkZXZlbnQsICdwYXNzd29yZCcpXCJcclxuICAgICAgPjwvdWktaW5wdXQ+XHJcbiAgICAgIDxzbWFsbCAqbmdJZj1cImlzRm9ybVN1Ym1pdCAmJiBmLnBhc3N3b3JkLmVycm9yc1wiPlxyXG4gICAgICAgIDx1aS1zcGFuICpuZ0lmPVwiZi5wYXNzd29yZC5lcnJvcnMucmVxdWlyZWRcIiBbdGV4dF09XCInUGFzc3dvcmQgaXMgcmVxdWlyZWQnXCIgW2NvbG9yXT1cIidkYW5nZXInXCIgW21vZGVdPVwibW9kZVwiPjwvdWktc3Bhbj5cclxuICAgICAgICA8dWktc3BhbiAqbmdJZj1cImYucGFzc3dvcmQuZXJyb3JzLnBhdHRlcm5cIiBbdGV4dF09XCInUGFzc3dvcmQgaXMgaW52YWxpZCdcIiBbY29sb3JdPVwiJ2RhbmdlcidcIiBbbW9kZV09XCJtb2RlXCI+PC91aS1zcGFuPlxyXG4gICAgICA8L3NtYWxsPlxyXG4gICAgPC9pb24taXRlbT5cclxuICAgIDxpb24tcm93PlxyXG4gICAgICA8aW9uLWNvbD5cclxuICAgICAgICA8aW9uLWJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY29sb3I9XCJwcmltYXJ5XCIgZXhwYW5kPVwiYmxvY2tcIiBbbW9kZV09XCJtb2RlXCI+U2lnbiBJbjwvaW9uLWJ1dHRvbj5cclxuICAgICAgPC9pb24tY29sPlxyXG4gICAgPC9pb24tcm93PlxyXG4gIDwvZm9ybT5cclxuPC9pb24tY29udGVudD4iXX0=