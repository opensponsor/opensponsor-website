import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CountryCode, DebitCard} from "@app/interfaces/ApiInterface";
import {CountryCodesService} from "@services/countryCodes/country-codes.service";
import {DebitCardService} from "@services/debit-card/debit-card.service";
import {OrganizationsService} from "@services/organizations/organizations.service";
import {DialogRef} from "@angular/cdk/dialog";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'os-debit-card-dialog',
  templateUrl: './debit-card-dialog.component.html',
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
  ],
  styleUrl: './debit-card-dialog.component.scss'
})
export class DebitCardDialogComponent {
  public formGroup = new FormGroup({
    cardNo: new FormControl<string>('', [
      Validators.required
    ]),
    bankName: new FormControl<string>('', [
      Validators.required
    ]),
    countryCode: new FormControl<CountryCode | null>(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(64),
    ]),
    phoneNumber: new FormControl<string>('', [
      Validators.required
    ]),
    legalName: new FormControl<string>('', [
      Validators.required
    ]),
  });

  public countryCodes: CountryCode[] = [];

  constructor(
    private readonly dialogRef: DialogRef<DebitCardDialogComponent>,
    private readonly countryCodesService: CountryCodesService,
    private readonly debitCardService: DebitCardService,
    private readonly organizationsService: OrganizationsService,
  ) {
    this.getAllCountryCodes();

    this.initializeValue();
  }

  private initializeValue() {
    if (this.dialogRef.config.data.debitCard) {
      for (let controlsKey in this.formGroup.controls) {
        this.formGroup.get(controlsKey)?.setValue(this.dialogRef.config.data.debitCard[controlsKey])
      }
    }
  }


  private getAllCountryCodes() {
    this.countryCodesService.all().then(codes => {
      this.countryCodes = codes;
      if (this.countryCodes.length > 0) {
        this.formGroup.controls.countryCode.setValue(this.countryCodes[0] as any);
      }
    })
  }

  public save() {
    if (this.formGroup.valid) {
      const data = this.formGroup.value as DebitCard;
      data.organization = this.organizationsService.organization();
      if (this.dialogRef.config.data.debitCard.id) {
        data.id = this.dialogRef.config.data.debitCard.id;
        this.debitCardService.update(data).subscribe(res => {
          this.dialogRef.close();
        });
      } else {
        this.debitCardService.create(data).subscribe(res => {
          this.dialogRef.close();
        });
      }
    }


    return false;
  }

  public submit(form: HTMLFormElement) {
    form.requestSubmit();
  }
}
