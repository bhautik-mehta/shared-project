import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CameraComponent } from './camera/camera.component';
import { CamerahomeComponent } from './camerahome/camerahome.component';
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

// const firebaseConfig = {
//   apiKey: "AIzaSyCReG0gdJuamOJeX0yv-Kxn2Pf-08MaBz0",
//   authDomain: "ionic-project-7efec.firebaseapp.com",
//   projectId: "ionic-project-7efec",
//   storageBucket: "ionic-project-7efec.appspot.com",
//   messagingSenderId: "939844814718",
//   appId: "1:939844814718:web:86ae412c365c873832952f"
// }

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CameraComponent,
    CamerahomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UiSharedModule,
    // Firebase
    // AngularFireModule.initializeApp(firebaseConfig),
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  exports: [
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CameraComponent,
    CamerahomeComponent
  ],
  providers: [
    AuthService
  ]
})
export class SharedAuthModule { }
