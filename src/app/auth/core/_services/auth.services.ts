import { Injectable, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { Photo } from "@capacitor/camera";
import { Observable } from "rxjs";

@Injectable()
export class AuthService {
  userData: any;
  userId: any;
  constructor(
    private ngFireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.userData = ngFireAuth.authState;
  }

  /* Sign up */
  SignUp(email: string, password: string) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.ngFireAuth.signOut();
  }



}
