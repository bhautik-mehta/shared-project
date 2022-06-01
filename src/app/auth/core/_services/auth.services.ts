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

  async getUserProfile() {
    const user = await this.ngFireAuth.currentUser;
    const userDocRef = doc(this.firestore, `users/${user.uid}`);
    console.log(userDocRef);

    return docData(userDocRef);
  }
  async uploadImage(cameraFile: Photo) {
    const user = await this.ngFireAuth.currentUser;
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
    } catch (e) {
      return null;
    }

  }


}

function docData(userDocRef: any) {
  throw new Error("Function not implemented.");
}

function ref(storage: AngularFireStorage, path: string) {
  throw new Error("Function not implemented.");
}

function uploadString(storageRef: any, base64String: string, arg2: string) {
  throw new Error("Function not implemented.");
}

function getDownloadURL(storageRef: any) {
  throw new Error("Function not implemented.");
}

function setDoc(userDocRef: any, arg1: { imageUrl: any; }) {
  throw new Error("Function not implemented.");
}

function doc(firestore: AngularFirestore, arg1: string) {
  throw new Error("Function not implemented.");
}

