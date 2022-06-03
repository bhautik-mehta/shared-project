import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CameraComponent implements OnInit {
    position: string;
    mode: string;
    cameraApiOutput: EventEmitter<any>;
    profile: null;
    imageUrl: null;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CameraComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CameraComponent, "shared-camera", never, { "position": "position"; "mode": "mode"; }, { "cameraApiOutput": "cameraApiOutput"; }, never, never>;
}
