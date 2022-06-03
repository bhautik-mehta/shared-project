import { EventEmitter, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AuthService } from '../core/_services/auth.services';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as i0 from "@angular/core";
export declare class ShowimgComponent implements OnInit {
    private db;
    private Api;
    private storage;
    private basePath;
    position: string;
    mode: string;
    showImgApiOutput: EventEmitter<any>;
    constructor(db: AngularFirestore, Api: AuthService, storage: AngularFireStorage);
    tutorials: any;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShowimgComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ShowimgComponent, "shared-showimg", never, { "position": "position"; "mode": "mode"; }, { "showImgApiOutput": "showImgApiOutput"; }, never, never>;
}
