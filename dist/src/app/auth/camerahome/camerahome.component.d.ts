import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CamerahomeComponent implements OnInit {
    position: string;
    mode: string;
    cameraHomeApiOutput: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CamerahomeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CamerahomeComponent, "shared-camerahome", never, { "position": "position"; "mode": "mode"; }, { "cameraHomeApiOutput": "cameraHomeApiOutput"; }, never, never>;
}
