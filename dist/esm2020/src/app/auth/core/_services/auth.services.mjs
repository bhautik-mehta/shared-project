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
        console.log(user, 'user-------');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvYXV0aC9jb3JlL19zZXJ2aWNlcy9hdXRoLnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBUW5ELE1BQU0sT0FBTyxXQUFXO0lBR3RCLFlBQ1UsVUFBMkIsRUFDM0IsU0FBMkIsRUFDM0IsT0FBMkI7UUFGM0IsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7UUFDM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFFbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxhQUFhO0lBQ2IsTUFBTSxDQUFDLEtBQWEsRUFBRSxRQUFnQjtRQUNwQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsOEJBQThCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxhQUFhO0lBQ2IsTUFBTSxDQUFDLEtBQWEsRUFBRSxRQUFnQjtRQUNwQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxLQUFLLENBQUMsY0FBYztRQUNsQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQy9DLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV4QixPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFpQjtRQUNqQyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRWpDLE1BQU0sSUFBSSxHQUFHLFdBQVcsSUFBSSxDQUFDLEdBQUcsZUFBZSxDQUFDO1FBQ2hELE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUk7WUFDRixZQUFZLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFFNUQsTUFBTSxRQUFRLEdBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzVDLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFFNUQsTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFDakIsUUFBUTthQUNULENBQUMsQ0FBQztZQUNILE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFFSCxDQUFDOzt3R0FwRFUsV0FBVzs0R0FBWCxXQUFXOzJGQUFYLFdBQVc7a0JBRHZCLFVBQVU7O0FBMERYLFNBQVMsT0FBTyxDQUFDLFVBQWU7SUFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFFRCxTQUFTLEdBQUcsQ0FBQyxPQUEyQixFQUFFLElBQVk7SUFDcEQsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBQyxVQUFlLEVBQUUsWUFBb0IsRUFBRSxJQUFZO0lBQ3ZFLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUMsVUFBZTtJQUNyQyxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUVELFNBQVMsTUFBTSxDQUFDLFVBQWUsRUFBRSxJQUF3QjtJQUN2RCxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUVELFNBQVMsR0FBRyxDQUFDLFNBQTJCLEVBQUUsSUFBWTtJQUNwRCxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDL0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlQXV0aCB9IGZyb20gXCJAYW5ndWxhci9maXJlL2NvbXBhdC9hdXRoXCI7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlc3RvcmUgfSBmcm9tIFwiQGFuZ3VsYXIvZmlyZS9jb21wYXQvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IEFuZ3VsYXJGaXJlU3RvcmFnZSB9IGZyb20gXCJAYW5ndWxhci9maXJlL2NvbXBhdC9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IFBob3RvIH0gZnJvbSBcIkBjYXBhY2l0b3IvY2FtZXJhXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gIHVzZXJEYXRhOiBhbnk7XHJcbiAgdXNlcklkOiBhbnk7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG5nRmlyZUF1dGg6IEFuZ3VsYXJGaXJlQXV0aCxcclxuICAgIHByaXZhdGUgZmlyZXN0b3JlOiBBbmd1bGFyRmlyZXN0b3JlLFxyXG4gICAgcHJpdmF0ZSBzdG9yYWdlOiBBbmd1bGFyRmlyZVN0b3JhZ2VcclxuICApIHtcclxuICAgIHRoaXMudXNlckRhdGEgPSBuZ0ZpcmVBdXRoLmF1dGhTdGF0ZTtcclxuICB9XHJcblxyXG4gIC8qIFNpZ24gdXAgKi9cclxuICBTaWduVXAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMubmdGaXJlQXV0aC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcclxuICB9XHJcblxyXG4gIC8qIFNpZ24gaW4gKi9cclxuICBTaWduSW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMubmdGaXJlQXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xyXG4gIH1cclxuXHJcbiAgbG9nb3V0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmdGaXJlQXV0aC5zaWduT3V0KCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRVc2VyUHJvZmlsZSgpIHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLm5nRmlyZUF1dGguY3VycmVudFVzZXI7XHJcbiAgICBjb25zdCB1c2VyRG9jUmVmID0gZG9jKHRoaXMuZmlyZXN0b3JlLCBgdXNlcnMvJHt1c2VyLnVpZH1gKTtcclxuICAgIGNvbnNvbGUubG9nKHVzZXJEb2NSZWYpO1xyXG5cclxuICAgIHJldHVybiBkb2NEYXRhKHVzZXJEb2NSZWYpO1xyXG4gIH1cclxuICBhc3luYyB1cGxvYWRJbWFnZShjYW1lcmFGaWxlOiBQaG90bykge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMubmdGaXJlQXV0aC5jdXJyZW50VXNlcjtcclxuICAgIGNvbnNvbGUubG9nKHVzZXIsICd1c2VyLS0tLS0tLScpO1xyXG5cclxuICAgIGNvbnN0IHBhdGggPSBgdXBsb2Fkcy8ke3VzZXIudWlkfS9wcm9maWxlLiBwbmdgO1xyXG4gICAgY29uc3Qgc3RvcmFnZVJlZiA9IHJlZih0aGlzLnN0b3JhZ2UsIHBhdGgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdXBsb2FkU3RyaW5nKHN0b3JhZ2VSZWYsIGNhbWVyYUZpbGUuYmFzZTY0U3RyaW5nLCAnYmFzZTY0Jyk7XHJcblxyXG4gICAgICBjb25zdCBpbWFnZVVybCA9IGdldERvd25sb2FkVVJMKHN0b3JhZ2VSZWYpO1xyXG4gICAgICBjb25zdCB1c2VyRG9jUmVmID0gZG9jKHRoaXMuZmlyZXN0b3JlLCBgdXNlcnMvJHt1c2VyLnVpZH1gKTtcclxuXHJcbiAgICAgIHNldERvYyh1c2VyRG9jUmVmLCB7XHJcbiAgICAgICAgaW1hZ2VVcmwsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBkb2NEYXRhKHVzZXJEb2NSZWY6IGFueSkge1xyXG4gIHRocm93IG5ldyBFcnJvcihcIkZ1bmN0aW9uIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZihzdG9yYWdlOiBBbmd1bGFyRmlyZVN0b3JhZ2UsIHBhdGg6IHN0cmluZykge1xyXG4gIHRocm93IG5ldyBFcnJvcihcIkZ1bmN0aW9uIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwbG9hZFN0cmluZyhzdG9yYWdlUmVmOiBhbnksIGJhc2U2NFN0cmluZzogc3RyaW5nLCBhcmcyOiBzdHJpbmcpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXCJGdW5jdGlvbiBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREb3dubG9hZFVSTChzdG9yYWdlUmVmOiBhbnkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXCJGdW5jdGlvbiBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREb2ModXNlckRvY1JlZjogYW55LCBhcmcxOiB7IGltYWdlVXJsOiBhbnk7IH0pIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXCJGdW5jdGlvbiBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkb2MoZmlyZXN0b3JlOiBBbmd1bGFyRmlyZXN0b3JlLCBhcmcxOiBzdHJpbmcpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXCJGdW5jdGlvbiBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG59XHJcblxyXG4iXX0=