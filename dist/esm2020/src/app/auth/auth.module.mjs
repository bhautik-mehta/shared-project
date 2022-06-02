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
import { ShowimgComponent } from './showimg/showimg.component';
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
        CamerahomeComponent,
        ShowimgComponent], imports: [CommonModule,
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
        CamerahomeComponent,
        ShowimgComponent] });
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
                        CamerahomeComponent,
                        ShowimgComponent
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
                        CamerahomeComponent,
                        ShowimgComponent
                    ],
                    providers: [
                        AuthService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2F1dGgvYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFFL0QsMkJBQTJCO0FBQzNCLHVEQUF1RDtBQUN2RCx1REFBdUQ7QUFDdkQsc0NBQXNDO0FBQ3RDLHNEQUFzRDtBQUN0RCx1Q0FBdUM7QUFDdkMsdURBQXVEO0FBQ3ZELElBQUk7QUFxQ0osTUFBTSxPQUFPLGdCQUFnQjs7NkdBQWhCLGdCQUFnQjs4R0FBaEIsZ0JBQWdCLGlCQWpDekIsZUFBZTtRQUNmLGNBQWM7UUFDZCxhQUFhO1FBQ2IsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixnQkFBZ0IsYUFHaEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsV0FBVztRQUNYLGNBQWM7UUFDZCxXQUFXO1FBQ1gsbURBQW1EO1FBQ25ELGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsc0JBQXNCO1FBQ3RCLHdCQUF3QjtRQUN4Qix5QkFBeUIsYUFHekIsZUFBZTtRQUNmLGNBQWM7UUFDZCxhQUFhO1FBQ2IsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixnQkFBZ0I7OEdBTVAsZ0JBQWdCLGFBSmhCO1FBQ1QsV0FBVztLQUNaLFlBeEJRO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsV0FBVztZQUNYLGNBQWM7WUFDZCxXQUFXO1lBQ1gsbURBQW1EO1lBQ25ELGlCQUFpQjtZQUNqQixxQkFBcUI7WUFDckIsc0JBQXNCO1lBQ3RCLHdCQUF3QjtZQUN4Qix5QkFBeUI7U0FDMUI7MkZBYVUsZ0JBQWdCO2tCQW5DNUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osZUFBZTt3QkFDZixjQUFjO3dCQUNkLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixtQkFBbUI7d0JBQ25CLGdCQUFnQjtxQkFDakI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLFdBQVc7d0JBQ1gsY0FBYzt3QkFDZCxXQUFXO3dCQUNYLG1EQUFtRDt3QkFDbkQsaUJBQWlCO3dCQUNqQixxQkFBcUI7d0JBQ3JCLHNCQUFzQjt3QkFDdEIsd0JBQXdCO3dCQUN4Qix5QkFBeUI7cUJBQzFCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixlQUFlO3dCQUNmLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3FCQUNqQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsV0FBVztxQkFDWjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFNpZ251cENvbXBvbmVudCB9IGZyb20gJy4vc2lnbnVwL3NpZ251cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2FtZXJhQ29tcG9uZW50IH0gZnJvbSAnLi9jYW1lcmEvY2FtZXJhLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhbWVyYWhvbWVDb21wb25lbnQgfSBmcm9tICcuL2NhbWVyYWhvbWUvY2FtZXJhaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZpcmUvY29tcGF0XCI7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlQXV0aE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvY29tcGF0L2F1dGgnO1xyXG5pbXBvcnQgeyBBbmd1bGFyRmlyZVN0b3JhZ2VNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9maXJlL2NvbXBhdC9zdG9yYWdlJztcclxuaW1wb3J0IHsgQW5ndWxhckZpcmVzdG9yZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvY29tcGF0L2ZpcmVzdG9yZSc7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlRGF0YWJhc2VNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9maXJlL2NvbXBhdC9kYXRhYmFzZSc7XHJcbmltcG9ydCB7IFVpU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vdWktc2hhcmVkL3VpLXNoYXJlZC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vY29yZS9fc2VydmljZXMvYXV0aC5zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaG93aW1nQ29tcG9uZW50IH0gZnJvbSAnLi9zaG93aW1nL3Nob3dpbWcuY29tcG9uZW50JztcclxuXHJcbi8vIGNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4vLyAgIGFwaUtleTogXCJBSXphU3lDUmVHMGdkSnVhbU9KZVgweXYtS3huMlBmLTA4TWFCejBcIixcclxuLy8gICBhdXRoRG9tYWluOiBcImlvbmljLXByb2plY3QtN2VmZWMuZmlyZWJhc2VhcHAuY29tXCIsXHJcbi8vICAgcHJvamVjdElkOiBcImlvbmljLXByb2plY3QtN2VmZWNcIixcclxuLy8gICBzdG9yYWdlQnVja2V0OiBcImlvbmljLXByb2plY3QtN2VmZWMuYXBwc3BvdC5jb21cIixcclxuLy8gICBtZXNzYWdpbmdTZW5kZXJJZDogXCI5Mzk4NDQ4MTQ3MThcIixcclxuLy8gICBhcHBJZDogXCIxOjkzOTg0NDgxNDcxODp3ZWI6ODZhZTQxMmMzNjVjODczODMyOTUyZlwiXHJcbi8vIH1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBTaWdudXBDb21wb25lbnQsXHJcbiAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgIEhvbWVDb21wb25lbnQsXHJcbiAgICBDYW1lcmFDb21wb25lbnQsXHJcbiAgICBDYW1lcmFob21lQ29tcG9uZW50LFxyXG4gICAgU2hvd2ltZ0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgSW9uaWNNb2R1bGUsXHJcbiAgICBVaVNoYXJlZE1vZHVsZSxcclxuICAgIC8vIEZpcmViYXNlXHJcbiAgICAvLyBBbmd1bGFyRmlyZU1vZHVsZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKSxcclxuICAgIEFuZ3VsYXJGaXJlTW9kdWxlLFxyXG4gICAgQW5ndWxhckZpcmVBdXRoTW9kdWxlLFxyXG4gICAgQW5ndWxhckZpcmVzdG9yZU1vZHVsZSxcclxuICAgIEFuZ3VsYXJGaXJlU3RvcmFnZU1vZHVsZSxcclxuICAgIEFuZ3VsYXJGaXJlRGF0YWJhc2VNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFNpZ251cENvbXBvbmVudCxcclxuICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgSG9tZUNvbXBvbmVudCxcclxuICAgIENhbWVyYUNvbXBvbmVudCxcclxuICAgIENhbWVyYWhvbWVDb21wb25lbnQsXHJcbiAgICBTaG93aW1nQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEF1dGhTZXJ2aWNlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVkQXV0aE1vZHVsZSB7IH1cclxuIl19