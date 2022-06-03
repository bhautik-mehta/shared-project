import { EventEmitter, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AuthService } from '../core/_services/auth.services';
import { FileUpload } from '../model/file-upload';
import * as i0 from "@angular/core";
export declare class ShowimgComponent implements OnInit {
    private db;
    private Api;
    private storage;
    private basePath;
    position: string;
    mode: string;
    showImgApiOutput: EventEmitter<any>;
    constructor(db: AngularFireDatabase, Api: AuthService, storage: AngularFireStorage);
    ngOnInit(): void;
    getImages(fileUpload: FileUpload): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShowimgComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ShowimgComponent, "shared-showimg", never, { "position": "position"; "mode": "mode"; }, { "showImgApiOutput": "showImgApiOutput"; }, never, never>;
}
