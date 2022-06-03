import { EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class TextAreaComponent implements OnInit, ControlValueAccessor {
    placeholder: string;
    name: string;
    color: string;
    required: boolean;
    readonly: boolean;
    rows: number;
    cols: number;
    mode: string;
    value: string;
    disabled: boolean;
    newTextInputValue: EventEmitter<any>;
    constructor();
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    onTouched: () => any;
    propagateChange: (_: any) => void;
    ngOnInit(): void;
    onInputChange(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextAreaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextAreaComponent, "ui-text-area", never, { "placeholder": "placeholder"; "name": "name"; "color": "color"; "required": "required"; "readonly": "readonly"; "rows": "rows"; "cols": "cols"; "mode": "mode"; "value": "value"; "disabled": "disabled"; }, { "newTextInputValue": "newTextInputValue"; }, never, never>;
}
