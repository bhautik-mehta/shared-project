import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../core/_services/auth.services';
import * as i0 from "@angular/core";
export declare class LoginComponent implements OnInit {
    private FB;
    private auth;
    loginForm: FormGroup;
    isFormSubmit: boolean;
    position: string;
    mode: string;
    loginApiOutput: EventEmitter<any>;
    emailValidation: string;
    passwordValidation: string;
    constructor(FB: FormBuilder, auth: AuthService);
    get f(): {
        [key: string]: import("@angular/forms").AbstractControl;
    };
    ngOnInit(): void;
    setDefaultData(): void;
    setEmitData(data: any, type: any): void;
    submitForm(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoginComponent, "shared-login", never, { "position": "position"; "mode": "mode"; }, { "loginApiOutput": "loginApiOutput"; }, never, never>;
}
