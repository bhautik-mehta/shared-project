import { EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../core/_services/auth.services';
import * as i0 from "@angular/core";
export declare class CameraComponent implements OnInit {
    private authService;
    private loadingController;
    private alertController;
    private router;
    position: string;
    mode: string;
    cameraApiOutput: EventEmitter<any>;
    profile: null;
    imageUrl: null;
    constructor(authService: AuthService, loadingController: LoadingController, alertController: AlertController, router: Router);
    ngOnInit(): void;
    changeImage(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CameraComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CameraComponent, "shared-camera", never, { "position": "position"; "mode": "mode"; }, { "cameraApiOutput": "cameraApiOutput"; }, never, never>;
}
