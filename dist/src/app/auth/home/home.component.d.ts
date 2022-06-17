import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class HomeComponent implements OnInit {
    mode: string;
    homeSelection: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    onButtonClick(selected: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HomeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HomeComponent, "shared-home", never, { "mode": "mode"; }, { "homeSelection": "homeSelection"; }, never, never>;
}
