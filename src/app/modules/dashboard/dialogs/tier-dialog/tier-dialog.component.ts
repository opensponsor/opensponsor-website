import {Component, inject} from '@angular/core';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {
  CountryCode,
  E_AMOUNT_TYPE,
  E_INTERVAL,
  E_TIER_TYPE,
  Organization,
  Tier,
} from "@app/interfaces/ApiInterface";
import transformType from "@app/utils/transform-type";
import {TierService} from "@services/tier/tier.service";
import {MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {EnumeratedPipe} from "@app/pipes/enumerated/enumerated.pipe";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {TranslatePipe} from "@app/pipes/translate/translate.pipe";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {TierCardComponent} from "@app/components/tier-card/tier-card.component";
import {MatButtonModule} from "@angular/material/button";
import slugify from "limax";
import {RequiredHintComponent} from "@app/components/required-hint/required-hint.component";
import {CountrySelectComponent} from "@app/forms/country-select/country-select.component";

@Component({
  standalone: true,
  selector: 'os-tier-dialog',
  templateUrl: './tier-dialog.component.html',
  imports: [
    MatLabel,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    EnumeratedPipe,
    TranslatePipe,
    MatSlideToggleModule,
    MatDialogModule,
    TierCardComponent,
    RequiredHintComponent,
    CountrySelectComponent
  ],
  styleUrl: './tier-dialog.component.scss',
})
export class TierDialogComponent {
  readonly data = inject<{org: Organization; tier: Tier}>(MAT_DIALOG_DATA);

  public formGroup = new FormGroup({
    type: new FormControl<E_TIER_TYPE>(E_TIER_TYPE.DONATION, [
      Validators.required
    ]),
    name: new FormControl("", {
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(64),
      ],
      asyncValidators: [
        () => {
          return new Promise((resolve) => {
            const n = this.formGroup.controls.name?.getRawValue();
            if(n) {
              this.formGroup.controls.slug?.setValue(slugify(n))
            }
            resolve({});
          })
        }
      ]
    }),
    description: new FormControl<string>('', [
      Validators.maxLength(500),
    ]),
    longDescription: new FormControl<string>('', [
      Validators.maxLength(1000),
    ]),
    videoUrl: new FormControl<string>("", []),
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
    currency: new FormControl<CountryCode | undefined>(undefined, [
      Validators.required,
    ]),
    maxQuantity: new FormControl<number | null>(null, []),
    goal: new FormControl<number | null>(null, []),
    button: new FormControl<string>("贡献", []),
  });

  private presetsFormArray(): FormControl[] {
    if (this.data.tier?.presets && this.data.tier.presets.length > 0) {
      return this.data.tier.presets.map((p: number) => {
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
      tier.organization = this.data.org;
      if (this.data.tier) {
        tier.id = this.data.tier.id;
        this.tierService.update(tier).subscribe(res => {
          if (res.status === 200) {
            this.dialogRef.close();
          }
        });
      } else {
        this.tierService.create(tier).subscribe(res => {
          if (res.status === 200) {
            this.dialogRef.close();
          }
        });
      }
    } else {
      console.dir("invalid");
      for (const formKey in this.formGroup.controls) {
        if (this.formGroup.get(formKey)?.invalid) {
          console.warn(formKey)
          console.dir(this.formGroup.get(formKey));
        }
      }
    }
  }

  public submit(form: HTMLFormElement) {
    if (this.formGroup.valid) {
      this.save();
    } else {
      console.dir("invalid");
      for (const formKey in this.formGroup.controls) {
        if (this.formGroup.get(formKey)?.invalid) {
          console.warn(formKey)
          console.dir(this.formGroup.get(formKey));
        }
      }
      form.requestSubmit();
    }
  }

  constructor(
    private readonly dialogRef: MatDialogRef<TierDialogComponent>,
    private readonly tierService: TierService,
  ) {
    this.valueChangesSubscribe();
    this.initializeValue();
  }

  private initializeValue() {
    if (this.data.tier) {
      for (let controlsKey in this.formGroup.controls) {
        if (controlsKey !== 'presets') {
          this.formGroup.get(controlsKey)?.setValue((this.data.tier as Record<string, any>)[controlsKey])
        }
      }
    }
  }

  /**
   * 值改变时设置其他相关字段
   */
  public valueChangesSubscribe() {
    this.formGroup.controls.amountType.valueChanges.subscribe(value => {
      if (value === E_AMOUNT_TYPE.FLEXIBLE) {
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
        if (Number.isInteger(control.value)) {
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
        if (this.formGroup.controls.presets.controls.length > 2) {
          presetsSubscribe();
        }
      })
    })

    this.formGroup.controls.type.valueChanges.subscribe(value => {
      if (value === E_TIER_TYPE.PRODUCT) {
        this.formGroup.controls.maxQuantity.addValidators(Validators.required)
      } else {
        this.formGroup.controls.maxQuantity.removeValidators(Validators.required)
      }
    })

  }

  protected readonly E_AMOUNT_TYPE = E_AMOUNT_TYPE;
  protected readonly transformType = transformType;
  protected readonly E_INTERVAL = E_INTERVAL;
  protected readonly E_TIER_TYPE = E_TIER_TYPE;
}
