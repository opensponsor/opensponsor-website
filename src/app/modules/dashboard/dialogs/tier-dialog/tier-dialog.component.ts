import { Component } from '@angular/core';
import {DialogRef} from "@angular/cdk/dialog";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {E_AMOUNT_TYPE, E_IBAN_CURRENCIES, E_INTERVAL, E_TIER_TYPE} from "@app/interfaces/ApiInterface";
import transformType from "@app/utils/transformType";

@Component({
  selector: 'app-tier-dialog',
  templateUrl: './tier-dialog.component.html',
  styleUrl: './tier-dialog.component.scss',
})
export class TierDialogComponent {
    public formGroup = new FormGroup({
        type: new FormControl<E_TIER_TYPE | null>(E_TIER_TYPE.DONATION, [
            Validators.required
        ]),
        name: new FormControl(null, [
            Validators.required,
            Validators.minLength(1),
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
        presets: new FormArray([
            new FormControl<number | null>(null, [
                Validators.min(1),
            ]),
            new FormControl<number | null>(null, [
                Validators.min(1)
            ])
        ]),
        interval: new FormControl<E_INTERVAL>(E_INTERVAL.MONTH, []),
        amountType: new FormControl<E_AMOUNT_TYPE>(E_AMOUNT_TYPE.FIXED, [
            Validators.required,
        ]),
        minimumAmount: new FormControl<number | null>(null, []),
        currency: new FormControl<E_IBAN_CURRENCIES>(E_IBAN_CURRENCIES.CNY, []),
        maxQuantity: new FormControl<number | null>(null, []),
        goal: new FormControl<number | null>(null, []),
        button: new FormControl<string>("贡献", []),
    });

    public save() {
        if (this.formGroup.valid) {
            console.dir(this.formGroup.value);
        }
        for (let controlsKey in this.formGroup.controls) {
            if(this.formGroup.get(controlsKey)?.invalid) {
                console.dir(this.formGroup.get(controlsKey));
            }
        }
    }

    public submit(form: HTMLFormElement) {
        if(this.formGroup.valid) {
            this.save();
        } else {
            form.requestSubmit();
        }
    }

    constructor(
        private readonly dialogRef: DialogRef<TierDialogComponent>
    ) {
        this.valueChangesSubscribe();
    }

    public valueChangesSubscribe() {
        this.formGroup.controls.amountType.valueChanges.subscribe(value => {
            if(value === E_AMOUNT_TYPE.FLEXIBLE) {
                this.formGroup.controls.minimumAmount.addValidators(Validators.required);
            } else {
                this.formGroup.controls.minimumAmount.removeValidators(Validators.required);
            }
        });

        const presetsSubscribe = () => {
            const indexList: number[] = [];
            this.formGroup.controls.presets.controls.forEach((control, index) => {
                if(Number.isInteger(control.value)) {
                    // this.formGroup.controls.presets.controls.splice(index, 1)
                    indexList.push(index)
                }
            });
            this.formGroup.controls.presets.controls
                = this.formGroup.controls.presets.controls.filter((_, index) => indexList.includes(index));
            const newItem = new FormControl<number | null>(null, [
                Validators.min(1)
            ]);
            newItem.valueChanges.subscribe(item => {
                presetsSubscribe();
            })
            this.formGroup.controls.presets.controls.push(newItem);
        }

        this.formGroup.controls.presets.controls.forEach(item => {
            item.valueChanges.subscribe(() => {
                presetsSubscribe();
            })
        })

    }

    protected readonly E_AMOUNT_TYPE = E_AMOUNT_TYPE;
    protected readonly transformType = transformType;
    protected readonly E_INTERVAL = E_INTERVAL;
    protected readonly E_IBAN_CURRENCIES = E_IBAN_CURRENCIES;
    protected readonly E_TIER_TYPE = E_TIER_TYPE;
}
