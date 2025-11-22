import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CountryCode, DebitCard, Organization} from '@app/interfaces/ApiInterface';
import {CountryCodesService} from '@services/countryCodes/country-codes.service';
import {DebitCardService} from '@services/debit-card/debit-card.service';
import {OrganizationsService} from '@services/organizations/organizations.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {CountryPhoneGroupComponent} from "@app/forms/country-phone-group/country-phone-group.component";

@Component({
  selector: 'os-bind-debit-card',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    CountryPhoneGroupComponent,
  ],
  templateUrl: './bind-debit-card.component.html',
  styleUrl: './bind-debit-card.component.scss',
})
export class BindDebitCardComponent {
  @Input() organization: Organization | null = null;
  @Input() debitCard: DebitCard | null = null;

  @Output() saved = new EventEmitter<DebitCard>();
  @Output() cancelled = new EventEmitter<void>();

  public formGroup = new FormGroup({
    bankCardNo: new FormControl<string>('', [Validators.required]),
    bankName: new FormControl<string>('', [Validators.required]),
    countryCode: new FormControl<CountryCode | null>(null, [Validators.required]),
    phoneNumber: new FormControl<string>('', [Validators.required]),
    legalName: new FormControl<string>('', [Validators.required]),
  });

  public countryCodes: CountryCode[] = [];
  public loading = false;

  constructor(
    private readonly countryCodesService: CountryCodesService,
    private readonly debitCardService: DebitCardService,
    private readonly organizationsService: OrganizationsService,
  ) {
    this.getAllCountryCodes();
  }

  ngOnInit() {
    this.initializeValue();
  }

  private initializeValue() {
    if (this.debitCard) {
      Object.keys(this.formGroup.controls).forEach(key => {
        const control = this.formGroup.get(key as keyof typeof this.formGroup.controls);
        // @ts-ignore
        if (control && this.debitCard && this.debitCard[key] !== undefined) {
          // @ts-ignore
          control.setValue(this.debitCard[key]);
        }
      });
    }
  }

  private getAllCountryCodes() {
    this.countryCodesService.all().then(codes => {
      this.countryCodes = codes;
      if (this.countryCodes.length > 0 && !this.formGroup.controls.countryCode.value) {
        this.formGroup.controls.countryCode.setValue(this.countryCodes[0] as any);
      }
    });
  }

  public submit() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    const data = this.formGroup.value as DebitCard;
    data.organization = this.organization || this.organizationsService.organization();

    this.loading = true;

    const request$ = this.debitCard && this.debitCard.id
      ? this.debitCardService.update({...data, id: this.debitCard.id})
      : this.debitCardService.create(data);

    request$.subscribe({
      next: (res) => {
        this.loading = false;
        this.saved.emit(res.body?.data);
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  public cancel() {
    this.cancelled.emit();
  }
}

