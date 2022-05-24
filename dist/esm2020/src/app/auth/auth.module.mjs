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
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/compat";
const firebaseConfig = {
    apiKey: "AIzaSyDpjjXW9HEm_3R1AIPmd5xwgYDjYpPlrBM",
    authDomain: "ionicfirebaseauth-ea911.firebaseapp.com",
    projectId: "ionicfirebaseauth-ea911",
    storageBucket: "ionicfirebaseauth-ea911.appspot.com",
    messagingSenderId: "959549815952",
    appId: "1:959549815952:web:5ba6f1e4e898bc044bac15"
};
export class SharedAuthModule {
}
SharedAuthModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SharedAuthModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SharedAuthModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SharedAuthModule, declarations: [SignupComponent,
        LoginComponent,
        HomeComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        UiSharedModule, i1.AngularFireModule, AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireDatabaseModule], exports: [SignupComponent,
        LoginComponent,
        HomeComponent] });
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2F1dGgvYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFFdEQsTUFBTSxjQUFjLEdBQUc7SUFDckIsTUFBTSxFQUFFLHlDQUF5QztJQUNqRCxVQUFVLEVBQUUseUNBQXlDO0lBQ3JELFNBQVMsRUFBRSx5QkFBeUI7SUFDcEMsYUFBYSxFQUFFLHFDQUFxQztJQUNwRCxpQkFBaUIsRUFBRSxjQUFjO0lBQ2pDLEtBQUssRUFBRSwyQ0FBMkM7Q0FDbkQsQ0FBQTtBQStCRCxNQUFNLE9BQU8sZ0JBQWdCOzs2R0FBaEIsZ0JBQWdCOzhHQUFoQixnQkFBZ0IsaUJBM0J6QixlQUFlO1FBQ2YsY0FBYztRQUNkLGFBQWEsYUFHYixZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsY0FBYyx3QkFJZCxxQkFBcUI7UUFDckIsc0JBQXNCO1FBQ3RCLHdCQUF3QjtRQUN4Qix5QkFBeUIsYUFHekIsZUFBZTtRQUNmLGNBQWM7UUFDZCxhQUFhOzhHQU1KLGdCQUFnQixhQUpoQjtRQUNULFdBQVc7S0FDWixZQXJCUTtZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCxjQUFjO1lBRWQsV0FBVztZQUNYLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUM7WUFDL0MscUJBQXFCO1lBQ3JCLHNCQUFzQjtZQUN0Qix3QkFBd0I7WUFDeEIseUJBQXlCO1NBQzFCOzJGQVVVLGdCQUFnQjtrQkE3QjVCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxhQUFhO3FCQUNkO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixXQUFXO3dCQUNYLGNBQWM7d0JBRWQsV0FBVzt3QkFDWCxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO3dCQUMvQyxxQkFBcUI7d0JBQ3JCLHNCQUFzQjt3QkFDdEIsd0JBQXdCO3dCQUN4Qix5QkFBeUI7cUJBQzFCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsYUFBYTtxQkFDZDtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsV0FBVztxQkFDWjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZU1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9maXJlL2NvbXBhdFwiO1xuaW1wb3J0IHsgQW5ndWxhckZpcmVBdXRoTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9jb21wYXQvYXV0aCc7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZVN0b3JhZ2VNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9maXJlL2NvbXBhdC9zdG9yYWdlJztcbmltcG9ydCB7IEFuZ3VsYXJGaXJlc3RvcmVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9maXJlL2NvbXBhdC9maXJlc3RvcmUnO1xuaW1wb3J0IHsgQW5ndWxhckZpcmVEYXRhYmFzZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvY29tcGF0L2RhdGFiYXNlJztcbmltcG9ydCB7IFVpU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vdWktc2hhcmVkL3VpLXNoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2NvcmUvX3NlcnZpY2VzL2F1dGguc2VydmljZXMnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5RHBqalhXOUhFbV8zUjFBSVBtZDV4d2dZRGpZcFBsckJNXCIsXG4gIGF1dGhEb21haW46IFwiaW9uaWNmaXJlYmFzZWF1dGgtZWE5MTEuZmlyZWJhc2VhcHAuY29tXCIsXG4gIHByb2plY3RJZDogXCJpb25pY2ZpcmViYXNlYXV0aC1lYTkxMVwiLFxuICBzdG9yYWdlQnVja2V0OiBcImlvbmljZmlyZWJhc2VhdXRoLWVhOTExLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjk1OTU0OTgxNTk1MlwiLFxuICBhcHBJZDogXCIxOjk1OTU0OTgxNTk1Mjp3ZWI6NWJhNmYxZTRlODk4YmMwNDRiYWMxNVwiXG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNpZ251cENvbXBvbmVudCxcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgICBIb21lQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBJb25pY01vZHVsZSxcbiAgICBVaVNoYXJlZE1vZHVsZSxcblxuICAgIC8vIEZpcmViYXNlXG4gICAgQW5ndWxhckZpcmVNb2R1bGUuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyksXG4gICAgQW5ndWxhckZpcmVBdXRoTW9kdWxlLFxuICAgIEFuZ3VsYXJGaXJlc3RvcmVNb2R1bGUsXG4gICAgQW5ndWxhckZpcmVTdG9yYWdlTW9kdWxlLFxuICAgIEFuZ3VsYXJGaXJlRGF0YWJhc2VNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFNpZ251cENvbXBvbmVudCxcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgICBIb21lQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEF1dGhTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkQXV0aE1vZHVsZSB7IH1cbiJdfQ==