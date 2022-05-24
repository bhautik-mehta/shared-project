import * as i0 from '@angular/core';
import { Injectable, Component, Input, EventEmitter, Output, NgModule } from '@angular/core';
import * as i7 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$2 from '@angular/forms';
import { NG_VALUE_ACCESSOR, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@angular/fire/compat/auth';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import * as i1$1 from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import * as i1$3 from '@angular/fire/compat';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}

class AuthService {
    constructor(ngFireAuth) {
        this.ngFireAuth = ngFireAuth;
        this.userData = ngFireAuth.authState;
    }
    /* Sign up */
    SignUp(email, password) {
        return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
    }
    /* Sign in */
    SignIn(email, password) {
        return this.ngFireAuth.signInWithEmailAndPassword(email, password);
    }
}
AuthService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: AuthService, deps: [{ token: i1.AngularFireAuth }], target: i0.ɵɵFactoryTarget.Injectable });
AuthService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: AuthService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.AngularFireAuth }]; } });

class LabelComponent {
    constructor() {
        this.color = "primary";
        this.position = "fixed";
        this.mode = "md";
    }
    ngOnInit() { }
}
LabelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: LabelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LabelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: LabelComponent, selector: "ui-label", inputs: { text: "text", class: "class", color: "color", position: "position", mode: "mode" }, ngImport: i0, template: "<ion-label [color]=\"color\" [position]=\"position\" [mode]=\"mode\"> \n  {{ text }} \n</ion-label>", styles: [""], components: [{ type: i1$1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }] });
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

class InputComponent {
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
        }], ngImport: i0, template: "<ion-input \n    [color]=\"color\"\n    [placeholder]=\"placeholder\" \n    [type]=\"type\" \n    [name]=\"name\" \n    [readonly]=\"readonly\" \n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    (ionChange)=\"onInputChange()\"\n    [mode]=\"mode\"\n    [(ngModel)]=\"value\"\n>\n</ion-input>\n", styles: [""], components: [{ type: i1$1.IonInput, selector: "ion-input", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"] }], directives: [{ type: i1$1.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }, { type: i1$2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
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

class SpanComponent {
    constructor() {
        this.color = "primary";
        this.mode = "md";
    }
    ngOnInit() { }
}
SpanComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SpanComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SpanComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: SpanComponent, selector: "ui-span", inputs: { text: "text", class: "class", color: "color", mode: "mode" }, ngImport: i0, template: "<ion-text [color]=\"color\" [mode]=\"mode\"> \n  {{ text }} \n</ion-text>\n", styles: [""], components: [{ type: i1$1.IonText, selector: "ion-text", inputs: ["color", "mode"] }] });
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

class SignupComponent {
    constructor(FB, auth) {
        this.FB = FB;
        this.auth = auth;
        this.position = 'floating';
        this.mode = "mode";
        this.signUpApiOutput = new EventEmitter();
        this.emailValidation = "^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$";
        this.passwordValidation = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$";
        this.setDefaultData();
    }
    get f() {
        return this.signupForm.controls;
    }
    ngOnInit() { }
    setDefaultData() {
        this.isFormSubmit = false;
        this.signupForm = this.FB.group({
            email: ['', [
                    Validators.required,
                    Validators.pattern(this.emailValidation)
                ]],
            password: ['', [
                    Validators.required,
                    Validators.pattern(this.passwordValidation)
                ]],
            confirm: ['', [
                    Validators.required
                ]]
        }, {
            validator: MustMatch('password', 'confirm')
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
            case 'confirm':
                this.f.confirm.setValue(data);
                break;
            default:
                break;
        }
    }
    submitForm() {
        this.isFormSubmit = true;
        if (this.signupForm.invalid) {
            return;
        }
        this.auth.SignUp(this.f.email.value, this.f.password.value).then(res => {
            this.signUpApiOutput.next({
                isApiCalled: true,
                isApiSuccess: true,
                response: res
            });
            console.log(res);
        }).catch(err => {
            this.signUpApiOutput.next({
                isApiCalled: true,
                isApiSuccess: false,
                response: err
            });
            console.log('Something went wrong:', err.message);
        });
    }
}
SignupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SignupComponent, deps: [{ token: i1$2.FormBuilder }, { token: AuthService }], target: i0.ɵɵFactoryTarget.Component });
SignupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: SignupComponent, selector: "shared-signup", inputs: { position: "position", mode: "mode" }, outputs: { signUpApiOutput: "signUpApiOutput" }, ngImport: i0, template: "<ion-content>\n  <form [formGroup]=\"signupForm\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-item lines=\"full\" [mode]=\"mode\">\n      <ui-label [text]=\"'Email'\" [position]=\"position\" [mode]=\"mode\"></ui-label>\n      <ui-input class=\"width-100\" [mode]=\"mode\"\n        [type]=\"'text'\" [required]=\"true\" formControlName=\"email\"\n        [placeholder]=\"'Enter email'\" (newValue)=\"setEmitData($event, 'email')\"\n      ></ui-input>\n      <small *ngIf=\"isFormSubmit && f.email.errors\">\n        <ui-span *ngIf=\"f.email.errors.required\" [mode]=\"mode\" [text]=\"'Email is required'\" [color]=\"'danger'\"></ui-span>\n        <ui-span *ngIf=\"f.email.errors.pattern\" [mode]=\"mode\" [text]=\"'Email is invalid'\" [color]=\"'danger'\"></ui-span>\n      </small>\n    </ion-item>\n    <ion-item lines=\"full\" [mode]=\"mode\">\n      <ui-label [text]=\"'Password'\" [mode]=\"mode\" [position]=\"position\"></ui-label>\n      <ui-input class=\"width-100\" [mode]=\"mode\"\n        [type]=\"'text'\" [required]=\"true\" formControlName=\"password\"\n        [placeholder]=\"'Enter password'\" (newValue)=\"setEmitData($event, 'password')\"\n      ></ui-input>\n      <small *ngIf=\"isFormSubmit && f.password.errors\">\n        <ui-span *ngIf=\"f.password.errors.required\" [mode]=\"mode\" [text]=\"'Password is required'\" [color]=\"'danger'\"></ui-span>\n        <ui-span *ngIf=\"f.password.errors.pattern\" [mode]=\"mode\" [text]=\"'Password is invalid'\" [color]=\"'danger'\"></ui-span>\n      </small>\n    </ion-item>\n    <ion-item lines=\"full\" [mode]=\"mode\">\n      <ui-label [text]=\"'Confirm Password'\" [mode]=\"mode\" [position]=\"position\"></ui-label>\n      <ui-input class=\"width-100\" [mode]=\"mode\"\n        [type]=\"'password'\" [required]=\"true\" formControlName=\"confirm\"\n        [placeholder]=\"'Enter confirm password'\" (newValue)=\"setEmitData($event, 'confirm')\"\n      ></ui-input>\n      <small *ngIf=\"isFormSubmit && f.confirm.errors\">\n        <ui-span *ngIf=\"f.confirm.errors.required\" [mode]=\"mode\" [text]=\"'Confirm Password is required'\" [color]=\"'danger'\"></ui-span>\n        <ui-span *ngIf=\"f.confirm.errors.mustMatch\" [mode]=\"mode\" [text]=\"'Confirm Password must match with password'\" [color]=\"'danger'\"></ui-span>\n      </small>\n    </ion-item>\n    <ion-row>\n      <ion-col>\n        <ion-button type=\"submit\" color=\"primary\" expand=\"block\" [mode]=\"mode\">Sign Up</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>", styles: [""], components: [{ type: i1$1.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1$1.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "counterFormatter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: LabelComponent, selector: "ui-label", inputs: ["text", "class", "color", "position", "mode"] }, { type: InputComponent, selector: "ui-input", inputs: ["placeholder", "type", "name", "color", "readonly", "required", "mode", "disabled", "value"], outputs: ["newValue"] }, { type: SpanComponent, selector: "ui-span", inputs: ["text", "class", "color", "mode"] }, { type: i1$1.IonRow, selector: "ion-row" }, { type: i1$1.IonCol, selector: "ion-col", inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] }, { type: i1$1.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }], directives: [{ type: i1$2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1$2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1$2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { type: i1$2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SignupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'shared-signup', template: "<ion-content>\n  <form [formGroup]=\"signupForm\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-item lines=\"full\" [mode]=\"mode\">\n      <ui-label [text]=\"'Email'\" [position]=\"position\" [mode]=\"mode\"></ui-label>\n      <ui-input class=\"width-100\" [mode]=\"mode\"\n        [type]=\"'text'\" [required]=\"true\" formControlName=\"email\"\n        [placeholder]=\"'Enter email'\" (newValue)=\"setEmitData($event, 'email')\"\n      ></ui-input>\n      <small *ngIf=\"isFormSubmit && f.email.errors\">\n        <ui-span *ngIf=\"f.email.errors.required\" [mode]=\"mode\" [text]=\"'Email is required'\" [color]=\"'danger'\"></ui-span>\n        <ui-span *ngIf=\"f.email.errors.pattern\" [mode]=\"mode\" [text]=\"'Email is invalid'\" [color]=\"'danger'\"></ui-span>\n      </small>\n    </ion-item>\n    <ion-item lines=\"full\" [mode]=\"mode\">\n      <ui-label [text]=\"'Password'\" [mode]=\"mode\" [position]=\"position\"></ui-label>\n      <ui-input class=\"width-100\" [mode]=\"mode\"\n        [type]=\"'text'\" [required]=\"true\" formControlName=\"password\"\n        [placeholder]=\"'Enter password'\" (newValue)=\"setEmitData($event, 'password')\"\n      ></ui-input>\n      <small *ngIf=\"isFormSubmit && f.password.errors\">\n        <ui-span *ngIf=\"f.password.errors.required\" [mode]=\"mode\" [text]=\"'Password is required'\" [color]=\"'danger'\"></ui-span>\n        <ui-span *ngIf=\"f.password.errors.pattern\" [mode]=\"mode\" [text]=\"'Password is invalid'\" [color]=\"'danger'\"></ui-span>\n      </small>\n    </ion-item>\n    <ion-item lines=\"full\" [mode]=\"mode\">\n      <ui-label [text]=\"'Confirm Password'\" [mode]=\"mode\" [position]=\"position\"></ui-label>\n      <ui-input class=\"width-100\" [mode]=\"mode\"\n        [type]=\"'password'\" [required]=\"true\" formControlName=\"confirm\"\n        [placeholder]=\"'Enter confirm password'\" (newValue)=\"setEmitData($event, 'confirm')\"\n      ></ui-input>\n      <small *ngIf=\"isFormSubmit && f.confirm.errors\">\n        <ui-span *ngIf=\"f.confirm.errors.required\" [mode]=\"mode\" [text]=\"'Confirm Password is required'\" [color]=\"'danger'\"></ui-span>\n        <ui-span *ngIf=\"f.confirm.errors.mustMatch\" [mode]=\"mode\" [text]=\"'Confirm Password must match with password'\" [color]=\"'danger'\"></ui-span>\n      </small>\n    </ion-item>\n    <ion-row>\n      <ion-col>\n        <ion-button type=\"submit\" color=\"primary\" expand=\"block\" [mode]=\"mode\">Sign Up</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1$2.FormBuilder }, { type: AuthService }]; }, propDecorators: { position: [{
                type: Input
            }], mode: [{
                type: Input
            }], signUpApiOutput: [{
                type: Output
            }] } });

class LoginComponent {
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
LoginComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: LoginComponent, deps: [{ token: i1$2.FormBuilder }, { token: AuthService }], target: i0.ɵɵFactoryTarget.Component });
LoginComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: LoginComponent, selector: "shared-login", inputs: { position: "position", mode: "mode" }, outputs: { loginApiOutput: "loginApiOutput" }, ngImport: i0, template: "<ion-content>\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-item lines=\"full\" [mode]=\"mode\">\n      <ui-label [text]=\"'Email'\" [position]=\"position\" [mode]=\"mode\"></ui-label>\n      <ui-input class=\"width-100\" [mode]=\"mode\"\n        [type]=\"'text'\" [required]=\"true\" formControlName=\"email\"\n        [placeholder]=\"'Enter email'\" (newValue)=\"setEmitData($event, 'email')\"\n      ></ui-input>\n      <small *ngIf=\"isFormSubmit && f.email.errors\">\n        <ui-span *ngIf=\"f.email.errors.required\" [text]=\"'Email is required'\" [color]=\"'danger'\" [mode]=\"mode\"></ui-span>\n        <ui-span *ngIf=\"f.email.errors.pattern\" [text]=\"'Email is invalid'\" [color]=\"'danger'\" [mode]=\"mode\"></ui-span>\n      </small>\n    </ion-item>\n    <ion-item lines=\"full\" [mode]=\"mode\">\n      <ui-label [text]=\"'Password'\" [position]=\"position\" [mode]=\"mode\"></ui-label>\n      <ui-input class=\"width-100\" [mode]=\"mode\"\n        [type]=\"'password'\" [required]=\"true\" formControlName=\"password\"\n        [placeholder]=\"'Enter password'\" (newValue)=\"setEmitData($event, 'password')\"\n      ></ui-input>\n      <small *ngIf=\"isFormSubmit && f.password.errors\">\n        <ui-span *ngIf=\"f.password.errors.required\" [text]=\"'Password is required'\" [color]=\"'danger'\" [mode]=\"mode\"></ui-span>\n        <ui-span *ngIf=\"f.password.errors.pattern\" [text]=\"'Password is invalid'\" [color]=\"'danger'\" [mode]=\"mode\"></ui-span>\n      </small>\n    </ion-item>\n    <ion-row>\n      <ion-col>\n        <ion-button type=\"submit\" color=\"primary\" expand=\"block\" [mode]=\"mode\">Sign In</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>", styles: [".show-option,.hide-option{font-size:1.2rem;display:block;justify-content:center}\n"], components: [{ type: i1$1.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1$1.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "counterFormatter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: LabelComponent, selector: "ui-label", inputs: ["text", "class", "color", "position", "mode"] }, { type: InputComponent, selector: "ui-input", inputs: ["placeholder", "type", "name", "color", "readonly", "required", "mode", "disabled", "value"], outputs: ["newValue"] }, { type: SpanComponent, selector: "ui-span", inputs: ["text", "class", "color", "mode"] }, { type: i1$1.IonRow, selector: "ion-row" }, { type: i1$1.IonCol, selector: "ion-col", inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] }, { type: i1$1.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }], directives: [{ type: i1$2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1$2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1$2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { type: i1$2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: LoginComponent, decorators: [{
            type: Component,
            args: [{ selector: 'shared-login', template: "<ion-content>\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-item lines=\"full\" [mode]=\"mode\">\n      <ui-label [text]=\"'Email'\" [position]=\"position\" [mode]=\"mode\"></ui-label>\n      <ui-input class=\"width-100\" [mode]=\"mode\"\n        [type]=\"'text'\" [required]=\"true\" formControlName=\"email\"\n        [placeholder]=\"'Enter email'\" (newValue)=\"setEmitData($event, 'email')\"\n      ></ui-input>\n      <small *ngIf=\"isFormSubmit && f.email.errors\">\n        <ui-span *ngIf=\"f.email.errors.required\" [text]=\"'Email is required'\" [color]=\"'danger'\" [mode]=\"mode\"></ui-span>\n        <ui-span *ngIf=\"f.email.errors.pattern\" [text]=\"'Email is invalid'\" [color]=\"'danger'\" [mode]=\"mode\"></ui-span>\n      </small>\n    </ion-item>\n    <ion-item lines=\"full\" [mode]=\"mode\">\n      <ui-label [text]=\"'Password'\" [position]=\"position\" [mode]=\"mode\"></ui-label>\n      <ui-input class=\"width-100\" [mode]=\"mode\"\n        [type]=\"'password'\" [required]=\"true\" formControlName=\"password\"\n        [placeholder]=\"'Enter password'\" (newValue)=\"setEmitData($event, 'password')\"\n      ></ui-input>\n      <small *ngIf=\"isFormSubmit && f.password.errors\">\n        <ui-span *ngIf=\"f.password.errors.required\" [text]=\"'Password is required'\" [color]=\"'danger'\" [mode]=\"mode\"></ui-span>\n        <ui-span *ngIf=\"f.password.errors.pattern\" [text]=\"'Password is invalid'\" [color]=\"'danger'\" [mode]=\"mode\"></ui-span>\n      </small>\n    </ion-item>\n    <ion-row>\n      <ion-col>\n        <ion-button type=\"submit\" color=\"primary\" expand=\"block\" [mode]=\"mode\">Sign In</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>", styles: [".show-option,.hide-option{font-size:1.2rem;display:block;justify-content:center}\n"] }]
        }], ctorParameters: function () { return [{ type: i1$2.FormBuilder }, { type: AuthService }]; }, propDecorators: { position: [{
                type: Input
            }], mode: [{
                type: Input
            }], loginApiOutput: [{
                type: Output
            }] } });

class TextAreaComponent {
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
        }], ngImport: i0, template: "<ion-textarea\n  [rows]=\"rows\"\n  [cols]=\"cols\"\n  [color]=\"color\"\n  [placeholder]=\"placeholder\" \n  [name]=\"name\" \n  [readonly]=\"readonly\" \n  [required]=\"required\"\n  [disabled]=\"disabled\"\n  (ionChange)=\"onInputChange()\"\n  [mode]=\"mode\"\n>\n</ion-textarea>\n", styles: [""], components: [{ type: i1$1.IonTextarea, selector: "ion-textarea", inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "spellcheck", "value", "wrap"] }], directives: [{ type: i1$1.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }] });
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

class CheckboxComponent {
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
        }], ngImport: i0, template: "<ion-checkbox \n  [color]=\"color\"\n  [checked]=\"isChecked\"\n  [slot]=\"slot\"\n  [name]=\"name\"\n  [disabled]=\"readonly\"\n  (ionChange)=\"onCheckClick()\"\n  [mode]=\"mode\"\n></ion-checkbox>\n<ui-label [color]=\"color\" [text]=\"label\"></ui-label>", styles: [""], components: [{ type: i1$1.IonCheckbox, selector: "ion-checkbox", inputs: ["checked", "color", "disabled", "indeterminate", "mode", "name", "value"] }, { type: LabelComponent, selector: "ui-label", inputs: ["text", "class", "color", "position", "mode"] }], directives: [{ type: i1$1.BooleanValueAccessor, selector: "ion-checkbox,ion-toggle" }] });
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

class UiSharedModule {
}
UiSharedModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: UiSharedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UiSharedModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: UiSharedModule, declarations: [LabelComponent,
        SpanComponent,
        InputComponent,
        TextAreaComponent,
        CheckboxComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule], exports: [LabelComponent,
        SpanComponent,
        InputComponent,
        TextAreaComponent,
        CheckboxComponent] });
UiSharedModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: UiSharedModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            IonicModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: UiSharedModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LabelComponent,
                        SpanComponent,
                        InputComponent,
                        TextAreaComponent,
                        CheckboxComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        IonicModule
                    ],
                    exports: [
                        LabelComponent,
                        SpanComponent,
                        InputComponent,
                        TextAreaComponent,
                        CheckboxComponent
                    ]
                }]
        }] });

class HomeComponent {
    constructor() {
        this.mode = "mode";
        this.homeSelection = new EventEmitter();
    }
    ngOnInit() { }
    onButtonClick(selected) {
        this.homeSelection.next(selected);
    }
}
HomeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: HomeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HomeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: HomeComponent, selector: "shared-home", inputs: { mode: "mode" }, outputs: { homeSelection: "homeSelection" }, ngImport: i0, template: "<ion-content class=\"auth-form\">\n  <ion-grid>\n    <ion-row>\n      <ion-col align-self-center>\n        <ion-button [mode]=\"mode\" expand=\"block\" color=\"primary\" (click)=\"onButtonClick(0)\">Register</ion-button>\n        <br />\n        <ui-span [mode]=\"mode\" class=\"already\">or Already a user?</ui-span>\n        <br />\n        <ion-button [mode]=\"mode\" expand=\"block\" color=\"danger\" (click)=\"onButtonClick(1)\">Sign In</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>", styles: [""], components: [{ type: i1$1.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1$1.IonGrid, selector: "ion-grid", inputs: ["fixed"] }, { type: i1$1.IonRow, selector: "ion-row" }, { type: i1$1.IonCol, selector: "ion-col", inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] }, { type: i1$1.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: SpanComponent, selector: "ui-span", inputs: ["text", "class", "color", "mode"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: HomeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'shared-home', template: "<ion-content class=\"auth-form\">\n  <ion-grid>\n    <ion-row>\n      <ion-col align-self-center>\n        <ion-button [mode]=\"mode\" expand=\"block\" color=\"primary\" (click)=\"onButtonClick(0)\">Register</ion-button>\n        <br />\n        <ui-span [mode]=\"mode\" class=\"already\">or Already a user?</ui-span>\n        <br />\n        <ion-button [mode]=\"mode\" expand=\"block\" color=\"danger\" (click)=\"onButtonClick(1)\">Sign In</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { mode: [{
                type: Input
            }], homeSelection: [{
                type: Output
            }] } });

const firebaseConfig = {
    apiKey: "AIzaSyDpjjXW9HEm_3R1AIPmd5xwgYDjYpPlrBM",
    authDomain: "ionicfirebaseauth-ea911.firebaseapp.com",
    projectId: "ionicfirebaseauth-ea911",
    storageBucket: "ionicfirebaseauth-ea911.appspot.com",
    messagingSenderId: "959549815952",
    appId: "1:959549815952:web:5ba6f1e4e898bc044bac15"
};
class SharedAuthModule {
}
SharedAuthModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SharedAuthModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SharedAuthModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SharedAuthModule, declarations: [SignupComponent,
        LoginComponent,
        HomeComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        UiSharedModule, i1$3.AngularFireModule, AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireDatabaseModule], exports: [SignupComponent,
        LoginComponent,
        HomeComponent] });
SharedAuthModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SharedAuthModule, providers: [
        AuthService
    ], imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            IonicModule,
            UiSharedModule,
            // Firebase
            AngularFireModule.initializeApp(firebaseConfig),
            AngularFireAuthModule,
            AngularFirestoreModule,
            AngularFireStorageModule,
            AngularFireDatabaseModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SharedAuthModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SignupComponent,
                        LoginComponent,
                        HomeComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        IonicModule,
                        UiSharedModule,
                        // Firebase
                        AngularFireModule.initializeApp(firebaseConfig),
                        AngularFireAuthModule,
                        AngularFirestoreModule,
                        AngularFireStorageModule,
                        AngularFireDatabaseModule
                    ],
                    exports: [
                        SignupComponent,
                        LoginComponent,
                        HomeComponent
                    ],
                    providers: [
                        AuthService
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CheckboxComponent, HomeComponent, InputComponent, LabelComponent, LoginComponent, SharedAuthModule, SignupComponent, SpanComponent, TextAreaComponent, UiSharedModule };
//# sourceMappingURL=Shared.mjs.map
