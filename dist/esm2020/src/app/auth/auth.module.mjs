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
import * as i0 from "@angular/core";
// const firebaseConfig = {
//   apiKey: "AIzaSyCReG0gdJuamOJeX0yv-Kxn2Pf-08MaBz0",
//   authDomain: "ionic-project-7efec.firebaseapp.com",
//   projectId: "ionic-project-7efec",
//   storageBucket: "ionic-project-7efec.appspot.com",
//   messagingSenderId: "939844814718",
//   appId: "1:939844814718:web:86ae412c365c873832952f"
// }
export class SharedAuthModule {
}
SharedAuthModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SharedAuthModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SharedAuthModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SharedAuthModule, declarations: [SignupComponent,
        LoginComponent,
        HomeComponent,
        CameraComponent,
        CamerahomeComponent], imports: [CommonModule,
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
        AngularFireDatabaseModule], exports: [SignupComponent,
        LoginComponent,
        HomeComponent,
        CameraComponent,
        CamerahomeComponent] });
SharedAuthModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SharedAuthModule, providers: [
        AuthService
    ], imports: [[
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
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SharedAuthModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2F1dGgvYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFdEQsMkJBQTJCO0FBQzNCLHVEQUF1RDtBQUN2RCx1REFBdUQ7QUFDdkQsc0NBQXNDO0FBQ3RDLHNEQUFzRDtBQUN0RCx1Q0FBdUM7QUFDdkMsdURBQXVEO0FBQ3ZELElBQUk7QUFtQ0osTUFBTSxPQUFPLGdCQUFnQjs7NkdBQWhCLGdCQUFnQjs4R0FBaEIsZ0JBQWdCLGlCQS9CekIsZUFBZTtRQUNmLGNBQWM7UUFDZCxhQUFhO1FBQ2IsZUFBZTtRQUNmLG1CQUFtQixhQUduQixZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsY0FBYztRQUNkLFdBQVc7UUFDWCxtREFBbUQ7UUFDbkQsaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIsd0JBQXdCO1FBQ3hCLHlCQUF5QixhQUd6QixlQUFlO1FBQ2YsY0FBYztRQUNkLGFBQWE7UUFDYixlQUFlO1FBQ2YsbUJBQW1COzhHQU1WLGdCQUFnQixhQUpoQjtRQUNULFdBQVc7S0FDWixZQXZCUTtZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCxjQUFjO1lBQ2QsV0FBVztZQUNYLG1EQUFtRDtZQUNuRCxpQkFBaUI7WUFDakIscUJBQXFCO1lBQ3JCLHNCQUFzQjtZQUN0Qix3QkFBd0I7WUFDeEIseUJBQXlCO1NBQzFCOzJGQVlVLGdCQUFnQjtrQkFqQzVCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsV0FBVzt3QkFDWCxjQUFjO3dCQUNkLFdBQVc7d0JBQ1gsbURBQW1EO3dCQUNuRCxpQkFBaUI7d0JBQ2pCLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0Qix3QkFBd0I7d0JBQ3hCLHlCQUF5QjtxQkFDMUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsbUJBQW1CO3FCQUNwQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsV0FBVztxQkFDWjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFNpZ251cENvbXBvbmVudCB9IGZyb20gJy4vc2lnbnVwL3NpZ251cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2FtZXJhQ29tcG9uZW50IH0gZnJvbSAnLi9jYW1lcmEvY2FtZXJhLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhbWVyYWhvbWVDb21wb25lbnQgfSBmcm9tICcuL2NhbWVyYWhvbWUvY2FtZXJhaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZpcmUvY29tcGF0XCI7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlQXV0aE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvY29tcGF0L2F1dGgnO1xyXG5pbXBvcnQgeyBBbmd1bGFyRmlyZVN0b3JhZ2VNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9maXJlL2NvbXBhdC9zdG9yYWdlJztcclxuaW1wb3J0IHsgQW5ndWxhckZpcmVzdG9yZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvY29tcGF0L2ZpcmVzdG9yZSc7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlRGF0YWJhc2VNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9maXJlL2NvbXBhdC9kYXRhYmFzZSc7XHJcbmltcG9ydCB7IFVpU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vdWktc2hhcmVkL3VpLXNoYXJlZC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vY29yZS9fc2VydmljZXMvYXV0aC5zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xyXG5cclxuLy8gY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbi8vICAgYXBpS2V5OiBcIkFJemFTeUNSZUcwZ2RKdWFtT0plWDB5di1LeG4yUGYtMDhNYUJ6MFwiLFxyXG4vLyAgIGF1dGhEb21haW46IFwiaW9uaWMtcHJvamVjdC03ZWZlYy5maXJlYmFzZWFwcC5jb21cIixcclxuLy8gICBwcm9qZWN0SWQ6IFwiaW9uaWMtcHJvamVjdC03ZWZlY1wiLFxyXG4vLyAgIHN0b3JhZ2VCdWNrZXQ6IFwiaW9uaWMtcHJvamVjdC03ZWZlYy5hcHBzcG90LmNvbVwiLFxyXG4vLyAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjkzOTg0NDgxNDcxOFwiLFxyXG4vLyAgIGFwcElkOiBcIjE6OTM5ODQ0ODE0NzE4OndlYjo4NmFlNDEyYzM2NWM4NzM4MzI5NTJmXCJcclxuLy8gfVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFNpZ251cENvbXBvbmVudCxcclxuICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgSG9tZUNvbXBvbmVudCxcclxuICAgIENhbWVyYUNvbXBvbmVudCxcclxuICAgIENhbWVyYWhvbWVDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIElvbmljTW9kdWxlLFxyXG4gICAgVWlTaGFyZWRNb2R1bGUsXHJcbiAgICAvLyBGaXJlYmFzZVxyXG4gICAgLy8gQW5ndWxhckZpcmVNb2R1bGUuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyksXHJcbiAgICBBbmd1bGFyRmlyZU1vZHVsZSxcclxuICAgIEFuZ3VsYXJGaXJlQXV0aE1vZHVsZSxcclxuICAgIEFuZ3VsYXJGaXJlc3RvcmVNb2R1bGUsXHJcbiAgICBBbmd1bGFyRmlyZVN0b3JhZ2VNb2R1bGUsXHJcbiAgICBBbmd1bGFyRmlyZURhdGFiYXNlTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBTaWdudXBDb21wb25lbnQsXHJcbiAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgIEhvbWVDb21wb25lbnQsXHJcbiAgICBDYW1lcmFDb21wb25lbnQsXHJcbiAgICBDYW1lcmFob21lQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEF1dGhTZXJ2aWNlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVkQXV0aE1vZHVsZSB7IH1cclxuIl19