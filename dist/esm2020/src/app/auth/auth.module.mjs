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
        CameraComponent], imports: [CommonModule,
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
                        CameraComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2F1dGgvYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBRTVELE1BQU0sY0FBYyxHQUFHO0lBQ3JCLE1BQU0sRUFBRSx5Q0FBeUM7SUFDakQsVUFBVSxFQUFFLHFDQUFxQztJQUNqRCxTQUFTLEVBQUUscUJBQXFCO0lBQ2hDLGFBQWEsRUFBRSxpQ0FBaUM7SUFDaEQsaUJBQWlCLEVBQUUsY0FBYztJQUNqQyxLQUFLLEVBQUUsMkNBQTJDO0NBQ25ELENBQUE7QUFpQ0QsTUFBTSxPQUFPLGdCQUFnQjs7NkdBQWhCLGdCQUFnQjs4R0FBaEIsZ0JBQWdCLGlCQTdCekIsZUFBZTtRQUNmLGNBQWM7UUFDZCxhQUFhO1FBQ2IsZUFBZSxhQUdmLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxjQUFjLHdCQUlkLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIsd0JBQXdCO1FBQ3hCLHlCQUF5QixhQUd6QixlQUFlO1FBQ2YsY0FBYztRQUNkLGFBQWE7UUFDYixlQUFlOzhHQU1OLGdCQUFnQixhQUpoQjtRQUNULFdBQVc7S0FDWixZQXRCUTtZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCxjQUFjO1lBRWQsV0FBVztZQUNYLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUM7WUFDL0MscUJBQXFCO1lBQ3JCLHNCQUFzQjtZQUN0Qix3QkFBd0I7WUFDeEIseUJBQXlCO1NBQzFCOzJGQVdVLGdCQUFnQjtrQkEvQjVCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLGVBQWU7cUJBQ2hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixXQUFXO3dCQUNYLGNBQWM7d0JBRWQsV0FBVzt3QkFDWCxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO3dCQUMvQyxxQkFBcUI7d0JBQ3JCLHNCQUFzQjt3QkFDdEIsd0JBQXdCO3dCQUN4Qix5QkFBeUI7cUJBQzFCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixlQUFlO3FCQUNoQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsV0FBVztxQkFDWjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFNpZ251cENvbXBvbmVudCB9IGZyb20gJy4vc2lnbnVwL3NpZ251cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBBbmd1bGFyRmlyZU1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9maXJlL2NvbXBhdFwiO1xyXG5pbXBvcnQgeyBBbmd1bGFyRmlyZUF1dGhNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9maXJlL2NvbXBhdC9hdXRoJztcclxuaW1wb3J0IHsgQW5ndWxhckZpcmVTdG9yYWdlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9jb21wYXQvc3RvcmFnZSc7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlc3RvcmVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9maXJlL2NvbXBhdC9maXJlc3RvcmUnO1xyXG5pbXBvcnQgeyBBbmd1bGFyRmlyZURhdGFiYXNlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9jb21wYXQvZGF0YWJhc2UnO1xyXG5pbXBvcnQgeyBVaVNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3VpLXNoYXJlZC91aS1zaGFyZWQubW9kdWxlJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2NvcmUvX3NlcnZpY2VzL2F1dGguc2VydmljZXMnO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2FtZXJhQ29tcG9uZW50IH0gZnJvbSAnLi9jYW1lcmEvY2FtZXJhLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5Q1JlRzBnZEp1YW1PSmVYMHl2LUt4bjJQZi0wOE1hQnowXCIsXHJcbiAgYXV0aERvbWFpbjogXCJpb25pYy1wcm9qZWN0LTdlZmVjLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJpb25pYy1wcm9qZWN0LTdlZmVjXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJpb25pYy1wcm9qZWN0LTdlZmVjLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiOTM5ODQ0ODE0NzE4XCIsXHJcbiAgYXBwSWQ6IFwiMTo5Mzk4NDQ4MTQ3MTg6d2ViOjg2YWU0MTJjMzY1Yzg3MzgzMjk1MmZcIlxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgU2lnbnVwQ29tcG9uZW50LFxyXG4gICAgTG9naW5Db21wb25lbnQsXHJcbiAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgQ2FtZXJhQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBJb25pY01vZHVsZSxcclxuICAgIFVpU2hhcmVkTW9kdWxlLFxyXG5cclxuICAgIC8vIEZpcmViYXNlXHJcbiAgICBBbmd1bGFyRmlyZU1vZHVsZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKSxcclxuICAgIEFuZ3VsYXJGaXJlQXV0aE1vZHVsZSxcclxuICAgIEFuZ3VsYXJGaXJlc3RvcmVNb2R1bGUsXHJcbiAgICBBbmd1bGFyRmlyZVN0b3JhZ2VNb2R1bGUsXHJcbiAgICBBbmd1bGFyRmlyZURhdGFiYXNlTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBTaWdudXBDb21wb25lbnQsXHJcbiAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgIEhvbWVDb21wb25lbnQsXHJcbiAgICBDYW1lcmFDb21wb25lbnRcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQXV0aFNlcnZpY2VcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRBdXRoTW9kdWxlIHsgfVxyXG4iXX0=