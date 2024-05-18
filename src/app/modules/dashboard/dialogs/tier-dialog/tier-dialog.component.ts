import { Component } from '@angular/core';
import {DialogRef} from "@angular/cdk/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {E_AMOUNT_TYPE, E_IBAN_CURRENCIES, E_INTERVAL, E_TIER_TYPE} from "@app/interfaces/ApiInterface";
import transformType from "@app/utils/transformType";

@Component({
  selector: 'app-tier-dialog',
  templateUrl: './tier-dialog.component.html',
  styleUrl: './tier-dialog.component.scss',
})
export class TierDialogComponent {
    public formGroup = new FormGroup({
        type: new FormControl<E_TIER_TYPE | null>(null, [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(64),
        ]),
        name: new FormControl(null, [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(64),
        ]),
        description: new FormControl<string>('', [
            Validators.maxLength(500),
        ]),
        useStandalonePage: new FormControl<boolean>(false, [
            Validators.required,
        ]),
        amount: new FormControl<number | null>(null, [
            Validators.required,
        ]),
        presets: new FormControl<number[]>([], []),
        amountType: new FormControl<E_AMOUNT_TYPE>(E_AMOUNT_TYPE.FIXED, [
            Validators.required,
        ]),
        minimumAmount: new FormControl<number | null>(null, []),
        currency: new FormControl<E_IBAN_CURRENCIES>(E_IBAN_CURRENCIES.CNY, []),
        interval: new FormControl<E_INTERVAL>(E_INTERVAL.MONTH, []),
        maxQuantity: new FormControl<number | null>(null, []),
        goal: new FormControl<number | null>(null, []),
        button: new FormControl<string>("贡献", []),
    });

    public save() {
        if (this.formGroup.valid) {
            console.dir(this.formGroup);
        }
    }

    public submit(form: HTMLFormElement) {
        if(this.formGroup.valid) {
            this.save();
        } else {
            console.dir(Object.values(E_INTERVAL));
            console.dir(Object.keys(E_INTERVAL));
            form.requestSubmit();
        }
    }

    constructor(
        private readonly dialogRef: DialogRef<TierDialogComponent>
    ) {
        // console.dir(dialogRef.config.data.a = 1000)
    }

    protected readonly Object = Object;
    protected readonly E_AMOUNT_TYPE = E_AMOUNT_TYPE;
    protected readonly transformType = transformType;
    protected readonly E_INTERVAL = E_INTERVAL;
    protected readonly E_IBAN_CURRENCIES = E_IBAN_CURRENCIES;
}
