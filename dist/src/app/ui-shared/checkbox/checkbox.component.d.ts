import { EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class CheckboxComponent implements OnInit, ControlValueAccessor {
    color: string;
    isChecked: boolean;
    slot: string;
    name: string;
    readonly: boolean;
    label: string;
    mode: string;
    disabled: boolean;
    checkInputValue: EventEmitter<any>;
    constructor();
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    onTouched: () => any;
    propagateChange: (_: any) => void;
    ngOnInit(): void;
    onCheckClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxComponent, "ui-checkbox", never, { "color": "color"; "isChecked": "isChecked"; "slot": "slot"; "name": "name"; "readonly": "readonly"; "label": "label"; "mode": "mode"; "disabled": "disabled"; }, { "checkInputValue": "checkInputValue"; }, never, never>;
}
