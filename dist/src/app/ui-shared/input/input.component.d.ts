import { EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class InputComponent implements OnInit, ControlValueAccessor {
    placeholder: string;
    type: string;
    name: string;
    color: string;
    readonly: boolean;
    required: boolean;
    mode: string;
    disabled: boolean;
    value: string;
    newValue: EventEmitter<any>;
    constructor();
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    onTouched: () => any;
    propagateChange: (_: any) => void;
    ngOnInit(): void;
    onInputChange(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputComponent, "ui-input", never, { "placeholder": "placeholder"; "type": "type"; "name": "name"; "color": "color"; "readonly": "readonly"; "required": "required"; "mode": "mode"; "disabled": "disabled"; "value": "value"; }, { "newValue": "newValue"; }, never, never>;
}
