import * as i0 from '@angular/core';
import { Injectable, Component, Input, EventEmitter, Output, NgModule } from '@angular/core';
import * as i7 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$2 from '@angular/forms';
import { NG_VALUE_ACCESSOR, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { __awaiter } from 'tslib';
import * as i1 from '@angular/fire/compat/auth';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import * as i2 from '@angular/fire/compat/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import * as i3 from '@angular/fire/compat/storage';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import * as i1$1 from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import * as i1$3 from '@angular/fire/compat';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import * as i3$1 from '@angular/router';

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
    constructor(ngFireAuth, firestore, storage) {
        this.ngFireAuth = ngFireAuth;
        this.firestore = firestore;
        this.storage = storage;
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
    logout() {
        return this.ngFireAuth.signOut();
    }
    getUserProfile() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.ngFireAuth.currentUser;
            const userDocRef = doc(this.firestore, `users/${user.uid}`);
            console.log(userDocRef);
            return docData(userDocRef);
        });
    }
    uploadImage(cameraFile) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.ngFireAuth.currentUser;
            console.log(user, 'user-------');
            const path = `uploads/${user.uid}/profile. png`;
            const storageRef = ref(this.storage, path);
            try {
                uploadString(storageRef, cameraFile.base64String, 'base64');
                const imageUrl = getDownloadURL(storageRef);
                const userDocRef = doc(this.firestore, `users/${user.uid}`);
                setDoc(userDocRef, {
                    imageUrl,
                });
                return true;
            }
            catch (e) {
                return null;
            }
        });
    }
}
AuthService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: AuthService, deps: [{ token: i1.AngularFireAuth }, { token: i2.AngularFirestore }, { token: i3.AngularFireStorage }], target: i0.ɵɵFactoryTarget.Injectable });
AuthService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: AuthService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.AngularFireAuth }, { type: i2.AngularFirestore }, { type: i3.AngularFireStorage }]; } });
function docData(userDocRef) {
    throw new Error("Function not implemented.");
}
function ref(storage, path) {
    throw new Error("Function not implemented.");
}
function uploadString(storageRef, base64String, arg2) {
    throw new Error("Function not implemented.");
}
function getDownloadURL(storageRef) {
    throw new Error("Function not implemented.");
}
function setDoc(userDocRef, arg1) {
    throw new Error("Function not implemented.");
}
function doc(firestore, arg1) {
    throw new Error("Function not implemented.");
}

class LabelComponent {
    constructor() {
        this.color = "primary";
        this.position = "fixed";
        this.mode = "md";
    }
    ngOnInit() { }
}
LabelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: LabelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LabelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: LabelComponent, selector: "ui-label", inputs: { text: "text", class: "class", color: "color", position: "position", mode: "mode" }, ngImport: i0, template: "<ion-label [color]=\"color\" [position]=\"position\" [mode]=\"mode\"> \r\n  {{ text }} \r\n</ion-label>", styles: [""], components: [{ type: i1$1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }] });
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
        }], ngImport: i0, template: "<ion-input \r\n    [color]=\"color\"\r\n    [placeholder]=\"placeholder\" \r\n    [type]=\"type\" \r\n    [name]=\"name\" \r\n    [readonly]=\"readonly\" \r\n    [required]=\"required\"\r\n    [disabled]=\"disabled\"\r\n    (ionChange)=\"onInputChange()\"\r\n    [mode]=\"mode\"\r\n    [(ngModel)]=\"value\"\r\n>\r\n</ion-input>\r\n", styles: [""], components: [{ type: i1$1.IonInput, selector: "ion-input", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"] }], directives: [{ type: i1$1.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }, { type: i1$2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
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

class SpanComponent {
    constructor() {
        this.color = "primary";
        this.mode = "md";
    }
    ngOnInit() { }
}
SpanComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SpanComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SpanComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: SpanComponent, selector: "ui-span", inputs: { text: "text", class: "class", color: "color", mode: "mode" }, ngImport: i0, template: "<ion-text [color]=\"color\" [mode]=\"mode\"> \r\n  {{ text }} \r\n</ion-text>\r\n", styles: [""], components: [{ type: i1$1.IonText, selector: "ion-text", inputs: ["color", "mode"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SpanComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-span', template: "<ion-text [color]=\"color\" [mode]=\"mode\"> \r\n  {{ text }} \r\n</ion-text>\r\n", styles: [""] }]
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
SignupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: SignupComponent, selector: "shared-signup", inputs: { position: "position", mode: "mode" }, outputs: { signUpApiOutput: "signUpApiOutput" }, ngImport: i0, template: "<ion-content>\r\n  <form [formGroup]=\"signupForm\" (ngSubmit)=\"submitForm()\" novalidate>\r\n    <ion-item lines=\"full\" [mode]=\"mode\">\r\n      <ui-label [text]=\"'Email'\" [position]=\"position\" [mode]=\"mode\"></ui-label>\r\n      <ui-input class=\"width-100\" [mode]=\"mode\"\r\n        [type]=\"'text'\" [required]=\"true\" formControlName=\"email\"\r\n        [placeholder]=\"'Enter email'\" (newValue)=\"setEmitData($event, 'email')\"\r\n      ></ui-input>\r\n      <small *ngIf=\"isFormSubmit && f.email.errors\">\r\n        <ui-span *ngIf=\"f.email.errors.required\" [mode]=\"mode\" [text]=\"'Email is required'\" [color]=\"'danger'\"></ui-span>\r\n        <ui-span *ngIf=\"f.email.errors.pattern\" [mode]=\"mode\" [text]=\"'Email is invalid'\" [color]=\"'danger'\"></ui-span>\r\n      </small>\r\n    </ion-item>\r\n    <ion-item lines=\"full\" [mode]=\"mode\">\r\n      <ui-label [text]=\"'Password'\" [mode]=\"mode\" [position]=\"position\"></ui-label>\r\n      <ui-input class=\"width-100\" [mode]=\"mode\"\r\n        [type]=\"'text'\" [required]=\"true\" formControlName=\"password\"\r\n        [placeholder]=\"'Enter password'\" (newValue)=\"setEmitData($event, 'password')\"\r\n      ></ui-input>\r\n      <small *ngIf=\"isFormSubmit && f.password.errors\">\r\n        <ui-span *ngIf=\"f.password.errors.required\" [mode]=\"mode\" [text]=\"'Password is required'\" [color]=\"'danger'\"></ui-span>\r\n        <ui-span *ngIf=\"f.password.errors.pattern\" [mode]=\"mode\" [text]=\"'Password is invalid'\" [color]=\"'danger'\"></ui-span>\r\n      </small>\r\n    </ion-item>\r\n    <ion-item lines=\"full\" [mode]=\"mode\">\r\n      <ui-label [text]=\"'Confirm Password'\" [mode]=\"mode\" [position]=\"position\"></ui-label>\r\n      <ui-input class=\"width-100\" [mode]=\"mode\"\r\n        [type]=\"'password'\" [required]=\"true\" formControlName=\"confirm\"\r\n        [placeholder]=\"'Enter confirm password'\" (newValue)=\"setEmitData($event, 'confirm')\"\r\n      ></ui-input>\r\n      <small *ngIf=\"isFormSubmit && f.confirm.errors\">\r\n        <ui-span *ngIf=\"f.confirm.errors.required\" [mode]=\"mode\" [text]=\"'Confirm Password is required'\" [color]=\"'danger'\"></ui-span>\r\n        <ui-span *ngIf=\"f.confirm.errors.mustMatch\" [mode]=\"mode\" [text]=\"'Confirm Password must match with password'\" [color]=\"'danger'\"></ui-span>\r\n      </small>\r\n    </ion-item>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button type=\"submit\" color=\"primary\" expand=\"block\" [mode]=\"mode\">Sign Up</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n</ion-content>", styles: [""], components: [{ type: i1$1.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1$1.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "counterFormatter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: LabelComponent, selector: "ui-label", inputs: ["text", "class", "color", "position", "mode"] }, { type: InputComponent, selector: "ui-input", inputs: ["placeholder", "type", "name", "color", "readonly", "required", "mode", "disabled", "value"], outputs: ["newValue"] }, { type: SpanComponent, selector: "ui-span", inputs: ["text", "class", "color", "mode"] }, { type: i1$1.IonRow, selector: "ion-row" }, { type: i1$1.IonCol, selector: "ion-col", inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] }, { type: i1$1.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }], directives: [{ type: i1$2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1$2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1$2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { type: i1$2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SignupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'shared-signup', template: "<ion-content>\r\n  <form [formGroup]=\"signupForm\" (ngSubmit)=\"submitForm()\" novalidate>\r\n    <ion-item lines=\"full\" [mode]=\"mode\">\r\n      <ui-label [text]=\"'Email'\" [position]=\"position\" [mode]=\"mode\"></ui-label>\r\n      <ui-input class=\"width-100\" [mode]=\"mode\"\r\n        [type]=\"'text'\" [required]=\"true\" formControlName=\"email\"\r\n        [placeholder]=\"'Enter email'\" (newValue)=\"setEmitData($event, 'email')\"\r\n      ></ui-input>\r\n      <small *ngIf=\"isFormSubmit && f.email.errors\">\r\n        <ui-span *ngIf=\"f.email.errors.required\" [mode]=\"mode\" [text]=\"'Email is required'\" [color]=\"'danger'\"></ui-span>\r\n        <ui-span *ngIf=\"f.email.errors.pattern\" [mode]=\"mode\" [text]=\"'Email is invalid'\" [color]=\"'danger'\"></ui-span>\r\n      </small>\r\n    </ion-item>\r\n    <ion-item lines=\"full\" [mode]=\"mode\">\r\n      <ui-label [text]=\"'Password'\" [mode]=\"mode\" [position]=\"position\"></ui-label>\r\n      <ui-input class=\"width-100\" [mode]=\"mode\"\r\n        [type]=\"'text'\" [required]=\"true\" formControlName=\"password\"\r\n        [placeholder]=\"'Enter password'\" (newValue)=\"setEmitData($event, 'password')\"\r\n      ></ui-input>\r\n      <small *ngIf=\"isFormSubmit && f.password.errors\">\r\n        <ui-span *ngIf=\"f.password.errors.required\" [mode]=\"mode\" [text]=\"'Password is required'\" [color]=\"'danger'\"></ui-span>\r\n        <ui-span *ngIf=\"f.password.errors.pattern\" [mode]=\"mode\" [text]=\"'Password is invalid'\" [color]=\"'danger'\"></ui-span>\r\n      </small>\r\n    </ion-item>\r\n    <ion-item lines=\"full\" [mode]=\"mode\">\r\n      <ui-label [text]=\"'Confirm Password'\" [mode]=\"mode\" [position]=\"position\"></ui-label>\r\n      <ui-input class=\"width-100\" [mode]=\"mode\"\r\n        [type]=\"'password'\" [required]=\"true\" formControlName=\"confirm\"\r\n        [placeholder]=\"'Enter confirm password'\" (newValue)=\"setEmitData($event, 'confirm')\"\r\n      ></ui-input>\r\n      <small *ngIf=\"isFormSubmit && f.confirm.errors\">\r\n        <ui-span *ngIf=\"f.confirm.errors.required\" [mode]=\"mode\" [text]=\"'Confirm Password is required'\" [color]=\"'danger'\"></ui-span>\r\n        <ui-span *ngIf=\"f.confirm.errors.mustMatch\" [mode]=\"mode\" [text]=\"'Confirm Password must match with password'\" [color]=\"'danger'\"></ui-span>\r\n      </small>\r\n    </ion-item>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button type=\"submit\" color=\"primary\" expand=\"block\" [mode]=\"mode\">Sign Up</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n</ion-content>", styles: [""] }]
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
LoginComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: LoginComponent, selector: "shared-login", inputs: { position: "position", mode: "mode" }, outputs: { loginApiOutput: "loginApiOutput" }, ngImport: i0, template: "<ion-content>\r\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"submitForm()\" novalidate>\r\n    <ion-item lines=\"full\" [mode]=\"mode\">\r\n      <ui-label [text]=\"'Email'\" [position]=\"position\" [mode]=\"mode\"></ui-label>\r\n      <ui-input class=\"width-100\" [mode]=\"mode\"\r\n        [type]=\"'text'\" [required]=\"true\" formControlName=\"email\"\r\n        [placeholder]=\"'Enter email'\" (newValue)=\"setEmitData($event, 'email')\"\r\n      ></ui-input>\r\n      <small *ngIf=\"isFormSubmit && f.email.errors\">\r\n        <ui-span *ngIf=\"f.email.errors.required\" [text]=\"'Email is required'\" [color]=\"'danger'\" [mode]=\"mode\"></ui-span>\r\n        <ui-span *ngIf=\"f.email.errors.pattern\" [text]=\"'Email is invalid'\" [color]=\"'danger'\" [mode]=\"mode\"></ui-span>\r\n      </small>\r\n    </ion-item>\r\n    <ion-item lines=\"full\" [mode]=\"mode\">\r\n      <ui-label [text]=\"'Password'\" [position]=\"position\" [mode]=\"mode\"></ui-label>\r\n      <ui-input class=\"width-100\" [mode]=\"mode\"\r\n        [type]=\"'password'\" [required]=\"true\" formControlName=\"password\"\r\n        [placeholder]=\"'Enter password'\" (newValue)=\"setEmitData($event, 'password')\"\r\n      ></ui-input>\r\n      <small *ngIf=\"isFormSubmit && f.password.errors\">\r\n        <ui-span *ngIf=\"f.password.errors.required\" [text]=\"'Password is required'\" [color]=\"'danger'\" [mode]=\"mode\"></ui-span>\r\n        <ui-span *ngIf=\"f.password.errors.pattern\" [text]=\"'Password is invalid'\" [color]=\"'danger'\" [mode]=\"mode\"></ui-span>\r\n      </small>\r\n    </ion-item>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button type=\"submit\" color=\"primary\" expand=\"block\" [mode]=\"mode\">Sign In</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n</ion-content>", styles: [".show-option,.hide-option{font-size:1.2rem;display:block;justify-content:center}\n"], components: [{ type: i1$1.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1$1.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "counterFormatter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: LabelComponent, selector: "ui-label", inputs: ["text", "class", "color", "position", "mode"] }, { type: InputComponent, selector: "ui-input", inputs: ["placeholder", "type", "name", "color", "readonly", "required", "mode", "disabled", "value"], outputs: ["newValue"] }, { type: SpanComponent, selector: "ui-span", inputs: ["text", "class", "color", "mode"] }, { type: i1$1.IonRow, selector: "ion-row" }, { type: i1$1.IonCol, selector: "ion-col", inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] }, { type: i1$1.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }], directives: [{ type: i1$2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1$2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1$2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { type: i1$2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: LoginComponent, decorators: [{
            type: Component,
            args: [{ selector: 'shared-login', template: "<ion-content>\r\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"submitForm()\" novalidate>\r\n    <ion-item lines=\"full\" [mode]=\"mode\">\r\n      <ui-label [text]=\"'Email'\" [position]=\"position\" [mode]=\"mode\"></ui-label>\r\n      <ui-input class=\"width-100\" [mode]=\"mode\"\r\n        [type]=\"'text'\" [required]=\"true\" formControlName=\"email\"\r\n        [placeholder]=\"'Enter email'\" (newValue)=\"setEmitData($event, 'email')\"\r\n      ></ui-input>\r\n      <small *ngIf=\"isFormSubmit && f.email.errors\">\r\n        <ui-span *ngIf=\"f.email.errors.required\" [text]=\"'Email is required'\" [color]=\"'danger'\" [mode]=\"mode\"></ui-span>\r\n        <ui-span *ngIf=\"f.email.errors.pattern\" [text]=\"'Email is invalid'\" [color]=\"'danger'\" [mode]=\"mode\"></ui-span>\r\n      </small>\r\n    </ion-item>\r\n    <ion-item lines=\"full\" [mode]=\"mode\">\r\n      <ui-label [text]=\"'Password'\" [position]=\"position\" [mode]=\"mode\"></ui-label>\r\n      <ui-input class=\"width-100\" [mode]=\"mode\"\r\n        [type]=\"'password'\" [required]=\"true\" formControlName=\"password\"\r\n        [placeholder]=\"'Enter password'\" (newValue)=\"setEmitData($event, 'password')\"\r\n      ></ui-input>\r\n      <small *ngIf=\"isFormSubmit && f.password.errors\">\r\n        <ui-span *ngIf=\"f.password.errors.required\" [text]=\"'Password is required'\" [color]=\"'danger'\" [mode]=\"mode\"></ui-span>\r\n        <ui-span *ngIf=\"f.password.errors.pattern\" [text]=\"'Password is invalid'\" [color]=\"'danger'\" [mode]=\"mode\"></ui-span>\r\n      </small>\r\n    </ion-item>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button type=\"submit\" color=\"primary\" expand=\"block\" [mode]=\"mode\">Sign In</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n</ion-content>", styles: [".show-option,.hide-option{font-size:1.2rem;display:block;justify-content:center}\n"] }]
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
        }], ngImport: i0, template: "<ion-textarea\r\n  [rows]=\"rows\"\r\n  [cols]=\"cols\"\r\n  [color]=\"color\"\r\n  [placeholder]=\"placeholder\" \r\n  [name]=\"name\" \r\n  [readonly]=\"readonly\" \r\n  [required]=\"required\"\r\n  [disabled]=\"disabled\"\r\n  (ionChange)=\"onInputChange()\"\r\n  [mode]=\"mode\"\r\n>\r\n</ion-textarea>\r\n", styles: [""], components: [{ type: i1$1.IonTextarea, selector: "ion-textarea", inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "spellcheck", "value", "wrap"] }], directives: [{ type: i1$1.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }] });
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
        }], ngImport: i0, template: "<ion-checkbox \r\n  [color]=\"color\"\r\n  [checked]=\"isChecked\"\r\n  [slot]=\"slot\"\r\n  [name]=\"name\"\r\n  [disabled]=\"readonly\"\r\n  (ionChange)=\"onCheckClick()\"\r\n  [mode]=\"mode\"\r\n></ion-checkbox>\r\n<ui-label [color]=\"color\" [text]=\"label\"></ui-label>", styles: [""], components: [{ type: i1$1.IonCheckbox, selector: "ion-checkbox", inputs: ["checked", "color", "disabled", "indeterminate", "mode", "name", "value"] }, { type: LabelComponent, selector: "ui-label", inputs: ["text", "class", "color", "position", "mode"] }], directives: [{ type: i1$1.BooleanValueAccessor, selector: "ion-checkbox,ion-toggle" }] });
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
HomeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: HomeComponent, selector: "shared-home", inputs: { mode: "mode" }, outputs: { homeSelection: "homeSelection" }, ngImport: i0, template: "<ion-content class=\"auth-form\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col align-self-center>\r\n        <ion-button [mode]=\"mode\" expand=\"block\" color=\"primary\" (click)=\"onButtonClick(0)\">Register</ion-button>\r\n        <br />\r\n        <ui-span [mode]=\"mode\" class=\"already\">or Already a user?</ui-span>\r\n        <br />\r\n        <ion-button [mode]=\"mode\" expand=\"block\" color=\"danger\" (click)=\"onButtonClick(1)\">Sign In</ion-button>\r\n        <br />\r\n        <ion-button [mode]=\"mode\" expand=\"block\" color=\"success\" (click)=\"onButtonClick(2)\">Camera</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n", styles: [""], components: [{ type: i1$1.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1$1.IonGrid, selector: "ion-grid", inputs: ["fixed"] }, { type: i1$1.IonRow, selector: "ion-row" }, { type: i1$1.IonCol, selector: "ion-col", inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] }, { type: i1$1.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { type: SpanComponent, selector: "ui-span", inputs: ["text", "class", "color", "mode"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: HomeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'shared-home', template: "<ion-content class=\"auth-form\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col align-self-center>\r\n        <ion-button [mode]=\"mode\" expand=\"block\" color=\"primary\" (click)=\"onButtonClick(0)\">Register</ion-button>\r\n        <br />\r\n        <ui-span [mode]=\"mode\" class=\"already\">or Already a user?</ui-span>\r\n        <br />\r\n        <ion-button [mode]=\"mode\" expand=\"block\" color=\"danger\" (click)=\"onButtonClick(1)\">Sign In</ion-button>\r\n        <br />\r\n        <ion-button [mode]=\"mode\" expand=\"block\" color=\"success\" (click)=\"onButtonClick(2)\">Camera</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { mode: [{
                type: Input
            }], homeSelection: [{
                type: Output
            }] } });

class CameraComponent {
    constructor(authService, loadingController, alertController, router) {
        this.authService = authService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.router = router;
        this.position = 'floating';
        this.mode = "mode";
        this.cameraApiOutput = new EventEmitter();
        this.authService.getUserProfile().then((data) => {
            this.profile = data;
        });
    }
    ngOnInit() {
        this.authService.getUserProfile().then((data) => {
            this.profile = data;
            console.log(data, this.profile, 'imagesssssssss');
        });
    }
    changeImage() {
        return __awaiter(this, void 0, void 0, function* () {
            const image = yield Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: CameraResultType.Uri,
                source: CameraSource.Photos,
            });
            console.log(image);
            if (image) {
                const loading = yield this.loadingController.create();
                yield loading.present();
                const result = yield this.authService.uploadImage(image);
                console.log("image", image);
                loading.dismiss();
                console.log(result);
                if (!result) {
                    const alert = yield this.alertController.create({
                        header: 'Upload failed',
                        message: 'There was aproblem uploading your avatar.',
                        buttons: ['OK'],
                    });
                    yield alert.present();
                }
            }
        });
    }
}
CameraComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: CameraComponent, deps: [{ token: AuthService }, { token: i1$1.LoadingController }, { token: i1$1.AlertController }, { token: i3$1.Router }], target: i0.ɵɵFactoryTarget.Component });
CameraComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: CameraComponent, selector: "shared-camera", inputs: { position: "position", mode: "mode" }, outputs: { cameraApiOutput: "cameraApiOutput" }, ngImport: i0, template: "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      My profile\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-content class=\"ion-padding\">\r\n    <div class=\"preview\">\r\n      <ion-avatar (click)=\"changeImage()\">\r\n        <img *ngIf=\"imageUrl; else placheholder_avatar;\" [src]=\"imageUrl\" />\r\n         <ng-template #placheholder_avatar>\r\n           <div class=\"fallback\">\r\n             <p>Select avatars</p>\r\n           </div>\r\n        </ng-template>\r\n      </ion-avatar>\r\n    </div>\r\n   </ion-content>\r\n</ion-content>\r\n", styles: [""], components: [{ type: i1$1.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { type: i1$1.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { type: i1$1.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { type: i1$1.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { type: i1$1.IonAvatar, selector: "ion-avatar" }], directives: [{ type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: CameraComponent, decorators: [{
            type: Component,
            args: [{ selector: 'shared-camera', template: "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      My profile\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-content class=\"ion-padding\">\r\n    <div class=\"preview\">\r\n      <ion-avatar (click)=\"changeImage()\">\r\n        <img *ngIf=\"imageUrl; else placheholder_avatar;\" [src]=\"imageUrl\" />\r\n         <ng-template #placheholder_avatar>\r\n           <div class=\"fallback\">\r\n             <p>Select avatars</p>\r\n           </div>\r\n        </ng-template>\r\n      </ion-avatar>\r\n    </div>\r\n   </ion-content>\r\n</ion-content>\r\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: AuthService }, { type: i1$1.LoadingController }, { type: i1$1.AlertController }, { type: i3$1.Router }]; }, propDecorators: { position: [{
                type: Input
            }], mode: [{
                type: Input
            }], cameraApiOutput: [{
                type: Output
            }] } });

const firebaseConfig = {
    apiKey: "AIzaSyCReG0gdJuamOJeX0yv-Kxn2Pf-08MaBz0",
    authDomain: "ionic-project-7efec.firebaseapp.com",
    projectId: "ionic-project-7efec",
    storageBucket: "ionic-project-7efec.appspot.com",
    messagingSenderId: "939844814718",
    appId: "1:939844814718:web:86ae412c365c873832952f"
};
class SharedAuthModule {
}
SharedAuthModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SharedAuthModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SharedAuthModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SharedAuthModule, declarations: [SignupComponent,
        LoginComponent,
        HomeComponent,
        CameraComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        UiSharedModule, i1$3.AngularFireModule, AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireDatabaseModule], exports: [SignupComponent,
        LoginComponent,
        HomeComponent,
        CameraComponent] });
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
                        HomeComponent,
                        CameraComponent
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
                        HomeComponent,
                        CameraComponent
                    ],
                    providers: [
                        AuthService
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CameraComponent, CheckboxComponent, HomeComponent, InputComponent, LabelComponent, LoginComponent, SharedAuthModule, SignupComponent, SpanComponent, TextAreaComponent, UiSharedModule };
//# sourceMappingURL=Shared.mjs.map
