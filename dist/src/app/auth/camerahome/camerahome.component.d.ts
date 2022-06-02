import { EventEmitter, OnInit } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AuthService } from '../core/_services/auth.services';
import { Observable } from "rxjs";
import { FileUpload } from '../model/file-upload';
import * as i0 from "@angular/core";
export declare class CamerahomeComponent implements OnInit {
    private db;
    private Api;
    private storage;
    fileUpload: FileUpload;
    private basePath;
    position: string;
    mode: string;
    cameraHomeApiOutput: EventEmitter<any>;
    title: string;
    selectedFile: File;
    fb: any;
    downloadURL: Observable<string>;
    constructor(db: AngularFireDatabase, Api: AuthService, storage: AngularFireStorage, fileUpload: FileUpload);
    ngOnInit(): void;
    onFileSelected(event: any): void;
    private saveFileData;
    getFiles(numberItems: number): AngularFireList<FileUpload>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CamerahomeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CamerahomeComponent, "shared-camerahome", never, { "position": "position"; "mode": "mode"; }, { "cameraHomeApiOutput": "cameraHomeApiOutput"; }, never, never>;
}
