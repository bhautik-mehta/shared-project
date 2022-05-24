import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { UiSharedModule } from '../ui-shared/ui-shared.module';
import { AuthService } from './core/_services/auth.services';
import { HomeComponent } from './home/home.component';

const firebaseConfig = {
  apiKey: "AIzaSyDNqdAUFs5fU6VGgBmNuQfQKSpO34ICj8g",
  authDomain: "multi-auth-login.firebaseapp.com",
  projectId: "multi-auth-login",
  storageBucket: "multi-auth-login.appspot.com",
  messagingSenderId: "538888425984",
  appId: "1:538888425984:web:cef0cd6ba7b28ff6777ee5"
}

@NgModule({
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
})
export class SharedAuthModule { }
