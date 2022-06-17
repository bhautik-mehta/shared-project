import { EventEmitter, OnInit } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { AuthService } from '../core/_services/auth.services';
import { Observable } from "rxjs";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import * as i0 from "@angular/core";
export declare class CamerahomeComponent implements OnInit {
    private db;
    private Api;
    private storage;
    private camera;
    position: string;
    mode: string;
    cameraHomeApiOutput: EventEmitter<any>;
    private basePath;
    title: string;
    selectedFile: File;
    fb: any;
    downloadURL: Observable<string>;
    loadingController: any;
    avatarService: any;
    alertController: any;
    constructor(db: AngularFirestore, Api: AuthService, storage: AngularFireStorage, camera: Camera);
    ngOnInit(): void;
    changeImage(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CamerahomeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CamerahomeComponent, "shared-camerahome", never, { "position": "position"; "mode": "mode"; }, { "cameraHomeApiOutput": "cameraHomeApiOutput"; }, never, never>;
}
