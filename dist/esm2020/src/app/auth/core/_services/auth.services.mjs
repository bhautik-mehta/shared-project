import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/compat/auth";
import * as i2 from "@angular/fire/compat/firestore";
import * as i3 from "@angular/fire/compat/storage";
export class AuthService {
    constructor(ngFireAuth, firestore, storage) {
        this.ngFireAuth = ngFireAuth;
        this.firestore = firestore;
        this.storage = storage;
        this.userData = ngFireAuth.authState;
    }
    /* Sign up */
    SignUp(email, password) {
        return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
    }
    /* Sign in */
    SignIn(email, password) {
        return this.ngFireAuth.signInWithEmailAndPassword(email, password);
    }
    logout() {
        return this.ngFireAuth.signOut();
    }
}
AuthService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: AuthService, deps: [{ token: i1.AngularFireAuth }, { token: i2.AngularFirestore }, { token: i3.AngularFireStorage }], target: i0.ɵɵFactoryTarget.Injectable });
AuthService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: AuthService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.AngularFireAuth }, { type: i2.AngularFirestore }, { type: i3.AngularFireStorage }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvYXV0aC9jb3JlL19zZXJ2aWNlcy9hdXRoLnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBUW5ELE1BQU0sT0FBTyxXQUFXO0lBR3RCLFlBQ1UsVUFBMkIsRUFDM0IsU0FBMkIsRUFDM0IsT0FBMkI7UUFGM0IsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7UUFDM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFFbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxhQUFhO0lBQ2IsTUFBTSxDQUFDLEtBQWEsRUFBRSxRQUFnQjtRQUNwQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsOEJBQThCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxhQUFhO0lBQ2IsTUFBTSxDQUFDLEtBQWEsRUFBRSxRQUFnQjtRQUNwQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25DLENBQUM7O3dHQXZCVSxXQUFXOzRHQUFYLFdBQVc7MkZBQVgsV0FBVztrQkFEdkIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlQXV0aCB9IGZyb20gXCJAYW5ndWxhci9maXJlL2NvbXBhdC9hdXRoXCI7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlc3RvcmUgfSBmcm9tIFwiQGFuZ3VsYXIvZmlyZS9jb21wYXQvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlU3RvcmFnZSB9IGZyb20gXCJAYW5ndWxhci9maXJlL2NvbXBhdC9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IFBob3RvIH0gZnJvbSBcIkBjYXBhY2l0b3IvY2FtZXJhXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gIHVzZXJEYXRhOiBhbnk7XHJcbiAgdXNlcklkOiBhbnk7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG5nRmlyZUF1dGg6IEFuZ3VsYXJGaXJlQXV0aCxcclxuICAgIHByaXZhdGUgZmlyZXN0b3JlOiBBbmd1bGFyRmlyZXN0b3JlLFxyXG4gICAgcHJpdmF0ZSBzdG9yYWdlOiBBbmd1bGFyRmlyZVN0b3JhZ2VcclxuICApIHtcclxuICAgIHRoaXMudXNlckRhdGEgPSBuZ0ZpcmVBdXRoLmF1dGhTdGF0ZTtcclxuICB9XHJcblxyXG4gIC8qIFNpZ24gdXAgKi9cclxuICBTaWduVXAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMubmdGaXJlQXV0aC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcclxuICB9XHJcblxyXG4gIC8qIFNpZ24gaW4gKi9cclxuICBTaWduSW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMubmdGaXJlQXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xyXG4gIH1cclxuXHJcbiAgbG9nb3V0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmdGaXJlQXV0aC5zaWduT3V0KCk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==