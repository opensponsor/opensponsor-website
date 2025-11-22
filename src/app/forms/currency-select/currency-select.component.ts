import {Component, Input} from '@angular/core';
import {E_IBAN_CURRENCIES} from "@app/interfaces/ApiInterface";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {TranslatePipe} from "@app/pipes/translate/translate.pipe";

@Component({
  selector: 'os-currency-select',
  imports: [
    MatFormField,
    MatOption,
    MatSelect,
    ReactiveFormsModule,
    MatLabel,
    MatHint,
    TranslatePipe,
  ],
  templateUrl: './currency-select.component.html',
  styleUrl: './currency-select.component.scss'
})
export class CurrencySelectComponent {
  @Input({
    required: true,
  })
  currencyControl!: FormControl;

  @Input({
    required: false,
  })
  required: boolean = false;

  @Input({
    required: true,
  })
  label!: string;

  protected readonly E_IBAN_CURRENCIES = E_IBAN_CURRENCIES;
  protected readonly Object = Object;
}
