import {Component} from '@angular/core';
import {DialogRef} from "@angular/cdk/dialog";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {
    E_AMOUNT_TYPE,
    E_IBAN_CURRENCIES,
    E_INTERVAL,
    E_TIER_TYPE,
    Tier,
    UUID
} from "@app/interfaces/ApiInterface";
import transformType from "@app/utils/transformType";
import {TierService} from "@services/tier/tier.service";

@Component({
  selector: 'app-tier-dialog',
  templateUrl: './tier-dialog.component.html',
  styleUrl: './tier-dialog.component.scss',
})
export class TierDialogComponent {
    public formGroup = new FormGroup({
        type: new FormControl<E_TIER_TYPE>(E_TIER_TYPE.DONATION, [
            Validators.required
        ]),
        name: new FormControl("", [
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
        slug: new FormControl<string>("", [
            Validators.minLength(2),
            Validators.maxLength(32),
        ]),
        amount: new FormControl<number | null>(null, [
            Validators.required,
        ]),
        presets: new FormArray(this.presetsFormArray()),
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

    private presetsFormArray() {
        if(this.dialogRef.config.data.tier && this.dialogRef.config.data.tier.presets.length > 0) {
            return this.dialogRef.config.data.tier.presets.map((p: number) => {
                return new FormControl<number | null>(p, [
                    Validators.min(1),
                ])
            }) as FormControl[];
        } else {
            return [
                new FormControl<number | null>(null, [
                    Validators.min(1),
                ]),
                new FormControl<number | null>(null, [
                    Validators.min(1)
                ])
            ]
        }
    }

    public save() {
        if (this.formGroup.valid) {
            const tier = this.formGroup.value as Tier
            tier.organization = this.dialogRef.config.data.org;
            if(this.dialogRef.config.data.tier) {
                tier.id = this.dialogRef.config.data.tier.id;
                this.tierService.update(tier).subscribe(res => {
                    if(res.status === 200) {
                        this.dialogRef.close();
                    }
                });
            } else {
                this.tierService.create(tier).subscribe(res => {
                    if(res.status === 200) {
                        this.dialogRef.close();
                    }
                });
            }
        } else {
            console.dir("invalid");
            for (const formKey in this.formGroup.controls) {
                if(this.formGroup.get(formKey)?.invalid) {
                    console.warn(formKey)
                    console.dir(this.formGroup.get(formKey));
                }
            }
        }
    }

    public submit(form: HTMLFormElement) {
        if(this.formGroup.valid) {
            this.save();
        } else {
            console.dir("invalid");
            for (const formKey in this.formGroup.controls) {
                if(this.formGroup.get(formKey)?.invalid) {
                    console.warn(formKey)
                    console.dir(this.formGroup.get(formKey));
                }
            }
            form.requestSubmit();
        }
    }

    constructor(
        private readonly dialogRef: DialogRef<TierDialogComponent>,
        private readonly tierService: TierService,
    ) {
        this.valueChangesSubscribe();

        this.initializeValue();
    }

    private initializeValue() {
        if(this.dialogRef.config.data.tier) {
            for (let controlsKey in this.formGroup.controls) {
                if(controlsKey !== 'presets') {
                    this.formGroup.get(controlsKey)?.setValue(this.dialogRef.config.data.tier[controlsKey])
                }
            }
        }
    }

    /**
     * 值改变时设置其他相关字段
     */
    public valueChangesSubscribe() {
        this.formGroup.controls.amountType.valueChanges.subscribe(value => {
            if(value === E_AMOUNT_TYPE.FLEXIBLE) {
                this.formGroup.controls.minimumAmount.addValidators(Validators.required);
                this.formGroup.controls.presets.controls.forEach(c => c.addValidators(Validators.required))
            } else {
                this.formGroup.controls.minimumAmount.removeValidators(Validators.required);
                this.formGroup.controls.presets.controls.forEach(c => c.removeValidators(Validators.required))
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
                if(this.formGroup.controls.presets.controls.length > 2) {
                    presetsSubscribe();
                }
            })
        })

        this.formGroup.controls.type.valueChanges.subscribe(value => {
            if(value === E_TIER_TYPE.PRODUCT) {
                this.formGroup.controls.maxQuantity.addValidators(Validators.required)
            } else {
                this.formGroup.controls.maxQuantity.removeValidators(Validators.required)
            }
        })

    }

    protected readonly E_AMOUNT_TYPE = E_AMOUNT_TYPE;
    protected readonly transformType = transformType;
    protected readonly E_INTERVAL = E_INTERVAL;
    protected readonly E_IBAN_CURRENCIES = E_IBAN_CURRENCIES;
    protected readonly E_TIER_TYPE = E_TIER_TYPE;
}
