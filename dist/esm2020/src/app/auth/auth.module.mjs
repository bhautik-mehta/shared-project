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
import { CameraComponent } from './camera/camera.component';
import { CamerahomeComponent } from './camerahome/camerahome.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/compat";
const firebaseConfig = {
    apiKey: "AIzaSyCReG0gdJuamOJeX0yv-Kxn2Pf-08MaBz0",
    authDomain: "ionic-project-7efec.firebaseapp.com",
    projectId: "ionic-project-7efec",
    storageBucket: "ionic-project-7efec.appspot.com",
    messagingSenderId: "939844814718",
    appId: "1:939844814718:web:86ae412c365c873832952f"
};
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
        UiSharedModule, i1.AngularFireModule, AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireDatabaseModule], exports: [SignupComponent,
        LoginComponent,
        HomeComponent,
        CameraComponent] });
SharedAuthModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SharedAuthModule, providers: [
        AuthService
    ], imports: [[
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
                        AngularFireModule.initializeApp(firebaseConfig),
                        AngularFireAuthModule,
                        AngularFirestoreModule,
                        AngularFireStorageModule,
                        AngularFireDatabaseModule
                    ],
                    exports: [
                        SignupComponent,
                        LoginComponent,
                        HomeComponent,
                        CameraComponent
                    ],
                    providers: [
                        AuthService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2F1dGgvYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7O0FBRXhFLE1BQU0sY0FBYyxHQUFHO0lBQ3JCLE1BQU0sRUFBRSx5Q0FBeUM7SUFDakQsVUFBVSxFQUFFLHFDQUFxQztJQUNqRCxTQUFTLEVBQUUscUJBQXFCO0lBQ2hDLGFBQWEsRUFBRSxpQ0FBaUM7SUFDaEQsaUJBQWlCLEVBQUUsY0FBYztJQUNqQyxLQUFLLEVBQUUsMkNBQTJDO0NBQ25ELENBQUE7QUFrQ0QsTUFBTSxPQUFPLGdCQUFnQjs7NkdBQWhCLGdCQUFnQjs4R0FBaEIsZ0JBQWdCLGlCQTlCekIsZUFBZTtRQUNmLGNBQWM7UUFDZCxhQUFhO1FBQ2IsZUFBZTtRQUNmLG1CQUFtQixhQUduQixZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsY0FBYyx3QkFJZCxxQkFBcUI7UUFDckIsc0JBQXNCO1FBQ3RCLHdCQUF3QjtRQUN4Qix5QkFBeUIsYUFHekIsZUFBZTtRQUNmLGNBQWM7UUFDZCxhQUFhO1FBQ2IsZUFBZTs4R0FNTixnQkFBZ0IsYUFKaEI7UUFDVCxXQUFXO0tBQ1osWUF0QlE7WUFDUCxZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtZQUNuQixXQUFXO1lBQ1gsY0FBYztZQUVkLFdBQVc7WUFDWCxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO1lBQy9DLHFCQUFxQjtZQUNyQixzQkFBc0I7WUFDdEIsd0JBQXdCO1lBQ3hCLHlCQUF5QjtTQUMxQjsyRkFXVSxnQkFBZ0I7a0JBaEM1QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixlQUFlO3dCQUNmLG1CQUFtQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLFdBQVc7d0JBQ1gsY0FBYzt3QkFFZCxXQUFXO3dCQUNYLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUM7d0JBQy9DLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0Qix3QkFBd0I7d0JBQ3hCLHlCQUF5QjtxQkFDMUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLGVBQWU7cUJBQ2hCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxXQUFXO3FCQUNaO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZpcmUvY29tcGF0XCI7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlQXV0aE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvY29tcGF0L2F1dGgnO1xyXG5pbXBvcnQgeyBBbmd1bGFyRmlyZVN0b3JhZ2VNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9maXJlL2NvbXBhdC9zdG9yYWdlJztcclxuaW1wb3J0IHsgQW5ndWxhckZpcmVzdG9yZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvY29tcGF0L2ZpcmVzdG9yZSc7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlRGF0YWJhc2VNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9maXJlL2NvbXBhdC9kYXRhYmFzZSc7XHJcbmltcG9ydCB7IFVpU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vdWktc2hhcmVkL3VpLXNoYXJlZC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vY29yZS9fc2VydmljZXMvYXV0aC5zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYW1lcmFDb21wb25lbnQgfSBmcm9tICcuL2NhbWVyYS9jYW1lcmEuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2FtZXJhaG9tZUNvbXBvbmVudCB9IGZyb20gJy4vY2FtZXJhaG9tZS9jYW1lcmFob21lLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5Q1JlRzBnZEp1YW1PSmVYMHl2LUt4bjJQZi0wOE1hQnowXCIsXHJcbiAgYXV0aERvbWFpbjogXCJpb25pYy1wcm9qZWN0LTdlZmVjLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJpb25pYy1wcm9qZWN0LTdlZmVjXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJpb25pYy1wcm9qZWN0LTdlZmVjLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiOTM5ODQ0ODE0NzE4XCIsXHJcbiAgYXBwSWQ6IFwiMTo5Mzk4NDQ4MTQ3MTg6d2ViOjg2YWU0MTJjMzY1Yzg3MzgzMjk1MmZcIlxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgU2lnbnVwQ29tcG9uZW50LFxyXG4gICAgTG9naW5Db21wb25lbnQsXHJcbiAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgQ2FtZXJhQ29tcG9uZW50LFxyXG4gICAgQ2FtZXJhaG9tZUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgSW9uaWNNb2R1bGUsXHJcbiAgICBVaVNoYXJlZE1vZHVsZSxcclxuXHJcbiAgICAvLyBGaXJlYmFzZVxyXG4gICAgQW5ndWxhckZpcmVNb2R1bGUuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyksXHJcbiAgICBBbmd1bGFyRmlyZUF1dGhNb2R1bGUsXHJcbiAgICBBbmd1bGFyRmlyZXN0b3JlTW9kdWxlLFxyXG4gICAgQW5ndWxhckZpcmVTdG9yYWdlTW9kdWxlLFxyXG4gICAgQW5ndWxhckZpcmVEYXRhYmFzZU1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgU2lnbnVwQ29tcG9uZW50LFxyXG4gICAgTG9naW5Db21wb25lbnQsXHJcbiAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgQ2FtZXJhQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEF1dGhTZXJ2aWNlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVkQXV0aE1vZHVsZSB7IH1cclxuIl19