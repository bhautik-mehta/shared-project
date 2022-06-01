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
    async getUserProfile() {
        const user = await this.ngFireAuth.currentUser;
        const userDocRef = doc(this.firestore, `users/${user.uid}`);
        console.log(userDocRef);
        return docData(userDocRef);
    }
    async uploadImage(cameraFile) {
        const user = await this.ngFireAuth.currentUser;
        const path = `uploads/${user.uid}/profile. png`;
        const storageRef = ref(this.storage, path);
        try {
            uploadString(storageRef, cameraFile.base64String, 'base64');
            const imageUrl = getDownloadURL(storageRef);
            const userDocRef = doc(this.firestore, `users/${user.uid}`);
            setDoc(userDocRef, {
                imageUrl,
            });
            return true;
        }
        catch (e) {
            return null;
        }
    }
}
AuthService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: AuthService, deps: [{ token: i1.AngularFireAuth }, { token: i2.AngularFirestore }, { token: i3.AngularFireStorage }], target: i0.ɵɵFactoryTarget.Injectable });
AuthService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: AuthService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.AngularFireAuth }, { type: i2.AngularFirestore }, { type: i3.AngularFireStorage }]; } });
function docData(userDocRef) {
    throw new Error("Function not implemented.");
}
function ref(storage, path) {
    throw new Error("Function not implemented.");
}
function uploadString(storageRef, base64String, arg2) {
    throw new Error("Function not implemented.");
}
function getDownloadURL(storageRef) {
    throw new Error("Function not implemented.");
}
function setDoc(userDocRef, arg1) {
    throw new Error("Function not implemented.");
}
function doc(firestore, arg1) {
    throw new Error("Function not implemented.");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvYXV0aC9jb3JlL19zZXJ2aWNlcy9hdXRoLnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBUW5ELE1BQU0sT0FBTyxXQUFXO0lBSXRCLFlBQ1UsVUFBMkIsRUFDM0IsU0FBMkIsRUFDM0IsT0FBMkI7UUFGM0IsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7UUFDM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFFbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxhQUFhO0lBQ2IsTUFBTSxDQUFDLEtBQWEsRUFBRSxRQUFnQjtRQUNwQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsOEJBQThCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxhQUFhO0lBQ2IsTUFBTSxDQUFDLEtBQWEsRUFBRSxRQUFnQjtRQUNwQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxLQUFLLENBQUMsY0FBYztRQUNsQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQy9DLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV4QixPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFpQjtRQUNqQyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQy9DLE1BQU0sSUFBSSxHQUFHLFdBQVcsSUFBSSxDQUFDLEdBQUcsZUFBZSxDQUFDO1FBQ2hELE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUk7WUFDRixZQUFZLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFFNUQsTUFBTSxRQUFRLEdBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzVDLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFFNUQsTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFDakIsUUFBUTthQUNULENBQUMsQ0FBQztZQUNILE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFFSCxDQUFDOzt3R0FuRFUsV0FBVzs0R0FBWCxXQUFXOzJGQUFYLFdBQVc7a0JBRHZCLFVBQVU7O0FBeURYLFNBQVMsT0FBTyxDQUFDLFVBQWU7SUFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFFRCxTQUFTLEdBQUcsQ0FBQyxPQUEyQixFQUFFLElBQVk7SUFDcEQsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBQyxVQUFlLEVBQUUsWUFBb0IsRUFBRSxJQUFZO0lBQ3ZFLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUMsVUFBZTtJQUNyQyxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUVELFNBQVMsTUFBTSxDQUFDLFVBQWUsRUFBRSxJQUF3QjtJQUN2RCxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUVELFNBQVMsR0FBRyxDQUFDLFNBQTJCLEVBQUUsSUFBWTtJQUNwRCxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDL0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlQXV0aCB9IGZyb20gXCJAYW5ndWxhci9maXJlL2NvbXBhdC9hdXRoXCI7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlc3RvcmUgfSBmcm9tIFwiQGFuZ3VsYXIvZmlyZS9jb21wYXQvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlU3RvcmFnZSB9IGZyb20gXCJAYW5ndWxhci9maXJlL2NvbXBhdC9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IFBob3RvIH0gZnJvbSBcIkBjYXBhY2l0b3IvY2FtZXJhXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG5cclxuICB1c2VyRGF0YTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbmdGaXJlQXV0aDogQW5ndWxhckZpcmVBdXRoLFxyXG4gICAgcHJpdmF0ZSBmaXJlc3RvcmU6IEFuZ3VsYXJGaXJlc3RvcmUsXHJcbiAgICBwcml2YXRlIHN0b3JhZ2U6IEFuZ3VsYXJGaXJlU3RvcmFnZVxyXG4gICkge1xyXG4gICAgdGhpcy51c2VyRGF0YSA9IG5nRmlyZUF1dGguYXV0aFN0YXRlO1xyXG4gIH1cclxuXHJcbiAgLyogU2lnbiB1cCAqL1xyXG4gIFNpZ25VcChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uZ0ZpcmVBdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xyXG4gIH1cclxuXHJcbiAgLyogU2lnbiBpbiAqL1xyXG4gIFNpZ25JbihlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uZ0ZpcmVBdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uZ0ZpcmVBdXRoLnNpZ25PdXQoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldFVzZXJQcm9maWxlKCkge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMubmdGaXJlQXV0aC5jdXJyZW50VXNlcjtcclxuICAgIGNvbnN0IHVzZXJEb2NSZWYgPSBkb2ModGhpcy5maXJlc3RvcmUsIGB1c2Vycy8ke3VzZXIudWlkfWApO1xyXG4gICAgY29uc29sZS5sb2codXNlckRvY1JlZik7XHJcblxyXG4gICAgcmV0dXJuIGRvY0RhdGEodXNlckRvY1JlZik7XHJcbiAgfVxyXG4gIGFzeW5jIHVwbG9hZEltYWdlKGNhbWVyYUZpbGU6IFBob3RvKSB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5uZ0ZpcmVBdXRoLmN1cnJlbnRVc2VyO1xyXG4gICAgY29uc3QgcGF0aCA9IGB1cGxvYWRzLyR7dXNlci51aWR9L3Byb2ZpbGUuIHBuZ2A7XHJcbiAgICBjb25zdCBzdG9yYWdlUmVmID0gcmVmKHRoaXMuc3RvcmFnZSwgcGF0aCk7XHJcbiAgICB0cnkge1xyXG4gICAgICB1cGxvYWRTdHJpbmcoc3RvcmFnZVJlZiwgY2FtZXJhRmlsZS5iYXNlNjRTdHJpbmcsICdiYXNlNjQnKTtcclxuXHJcbiAgICAgIGNvbnN0IGltYWdlVXJsID0gZ2V0RG93bmxvYWRVUkwoc3RvcmFnZVJlZik7XHJcbiAgICAgIGNvbnN0IHVzZXJEb2NSZWYgPSBkb2ModGhpcy5maXJlc3RvcmUsIGB1c2Vycy8ke3VzZXIudWlkfWApO1xyXG5cclxuICAgICAgc2V0RG9jKHVzZXJEb2NSZWYsIHtcclxuICAgICAgICBpbWFnZVVybCxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvY0RhdGEodXNlckRvY1JlZjogYW55KSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFwiRnVuY3Rpb24gbm90IGltcGxlbWVudGVkLlwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVmKHN0b3JhZ2U6IEFuZ3VsYXJGaXJlU3RvcmFnZSwgcGF0aDogc3RyaW5nKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFwiRnVuY3Rpb24gbm90IGltcGxlbWVudGVkLlwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkU3RyaW5nKHN0b3JhZ2VSZWY6IGFueSwgYmFzZTY0U3RyaW5nOiBzdHJpbmcsIGFyZzI6IHN0cmluZykge1xyXG4gIHRocm93IG5ldyBFcnJvcihcIkZ1bmN0aW9uIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERvd25sb2FkVVJMKHN0b3JhZ2VSZWY6IGFueSkge1xyXG4gIHRocm93IG5ldyBFcnJvcihcIkZ1bmN0aW9uIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERvYyh1c2VyRG9jUmVmOiBhbnksIGFyZzE6IHsgaW1hZ2VVcmw6IGFueTsgfSkge1xyXG4gIHRocm93IG5ldyBFcnJvcihcIkZ1bmN0aW9uIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvYyhmaXJlc3RvcmU6IEFuZ3VsYXJGaXJlc3RvcmUsIGFyZzE6IHN0cmluZykge1xyXG4gIHRocm93IG5ldyBFcnJvcihcIkZ1bmN0aW9uIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbn1cclxuXHJcbiJdfQ==