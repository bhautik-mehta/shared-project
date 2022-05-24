import { AngularFireAuth } from "@angular/fire/compat/auth";
import * as i0 from "@angular/core";
export declare class AuthService {
    private ngFireAuth;
    userData: any;
    constructor(ngFireAuth: AngularFireAuth);
    SignUp(email: string, password: string): Promise<import("firebase/compat").default.auth.UserCredential>;
    SignIn(email: string, password: string): Promise<import("firebase/compat").default.auth.UserCredential>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthService>;
}
