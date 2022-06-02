import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ShowimgComponent implements OnInit {
    position: string;
    mode: string;
    showImgApiOutput: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShowimgComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ShowimgComponent, "shared-showimg", never, { "position": "position"; "mode": "mode"; }, { "showImgApiOutput": "showImgApiOutput"; }, never, never>;
}
