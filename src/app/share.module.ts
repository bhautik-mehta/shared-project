import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CameraComponent } from './auth/camera/camera.component';
import { HomeComponent } from './auth/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
/* Components */

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CameraComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  exports: [
    CameraComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
