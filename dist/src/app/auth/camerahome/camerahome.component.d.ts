import { EventEmitter, OnInit } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { AuthService } from '../core/_services/auth.services';
import { Observable } from "rxjs";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import * as i0 from "@angular/core";
export declare class CamerahomeComponent implements OnInit {
    private db;
    private Api;
    private storage;
    position: string;
    mode: string;
    cameraHomeApiOutput: EventEmitter<any>;
    private basePath;
    title: string;
    selectedFile: File;
    fb: any;
    downloadURL: Observable<string>;
    constructor(db: AngularFireDatabase, Api: AuthService, storage: AngularFireStorage);
    ngOnInit(): void;
    onFileSelected(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CamerahomeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CamerahomeComponent, "shared-camerahome", never, { "position": "position"; "mode": "mode"; }, { "cameraHomeApiOutput": "cameraHomeApiOutput"; }, never, never>;
}
