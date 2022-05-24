import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/compat/auth";
export class AuthService {
    constructor(ngFireAuth) {
        this.ngFireAuth = ngFireAuth;
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
}
AuthService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: AuthService, deps: [{ token: i1.AngularFireAuth }], target: i0.ɵɵFactoryTarget.Injectable });
AuthService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: AuthService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.AngularFireAuth }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvYXV0aC9jb3JlL19zZXJ2aWNlcy9hdXRoLnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQUtuRCxNQUFNLE9BQU8sV0FBVztJQUlwQixZQUNZLFVBQTJCO1FBQTNCLGVBQVUsR0FBVixVQUFVLENBQWlCO1FBRW5DLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsYUFBYTtJQUNiLE1BQU0sQ0FBQyxLQUFhLEVBQUUsUUFBZ0I7UUFDbEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLDhCQUE4QixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsYUFBYTtJQUNiLE1BQU0sQ0FBQyxLQUFhLEVBQUUsUUFBZ0I7UUFDbEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN2RSxDQUFDOzt3R0FsQlEsV0FBVzs0R0FBWCxXQUFXOzJGQUFYLFdBQVc7a0JBRHZCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBbmd1bGFyRmlyZUF1dGggfSBmcm9tIFwiQGFuZ3VsYXIvZmlyZS9jb21wYXQvYXV0aFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuXHJcbiAgICB1c2VyRGF0YTogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbmdGaXJlQXV0aDogQW5ndWxhckZpcmVBdXRoXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnVzZXJEYXRhID0gbmdGaXJlQXV0aC5hdXRoU3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyogU2lnbiB1cCAqL1xyXG4gICAgU2lnblVwKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZ0ZpcmVBdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBTaWduIGluICovXHJcbiAgICBTaWduSW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5nRmlyZUF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcclxuICAgIH1cclxuXHJcbn0iXX0=