import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { AngularFireStorage } from "@angular/fire/compat/storage";
import * as i0 from "@angular/core";
export declare class AuthService {
    private ngFireAuth;
    private firestore;
    private storage;
    userData: any;
    userId: any;
    constructor(ngFireAuth: AngularFireAuth, firestore: AngularFirestore, storage: AngularFireStorage);
    SignUp(email: string, password: string): Promise<import("firebase/compat").default.auth.UserCredential>;
    SignIn(email: string, password: string): Promise<import("firebase/compat").default.auth.UserCredential>;
    logout(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthService>;
}
