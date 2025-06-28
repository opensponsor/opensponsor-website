import {Component, Input, OnInit} from '@angular/core';
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {NgForOf} from "@angular/common";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {CountryCodesService} from "@services/countryCodes/country-codes.service";
import {CountryCode} from "@app/interfaces/ApiInterface";
import {enumTranslate} from "@app/languages/zh_cn/enumTranslate";

@Component({
  standalone: true,
  selector: 'os-country-select',
  imports: [
    MatFormField,
    MatOption,
    MatSelect,
    NgForOf,
    ReactiveFormsModule,
    MatLabel,
  ],
  templateUrl: './country-select.component.html',
  styleUrl: './country-select.component.scss'
})
export class CountrySelectComponent implements OnInit {
  @Input({
    required: true,
  })
  countryCodeControl!: FormControl;

  @Input({
    required: false,
  })
  required: boolean = false;

  @Input({
    required: true,
  })
  label!: string;

  @Input({
    required: false,
  })
  labelType: 'officialNameCn' | 'currencyAlphabeticCode' = 'officialNameCn';

  public countryCodes: CountryCode[] = [];

  constructor(
    private readonly countryCodesService: CountryCodesService,
  ) {
  }

  ngOnInit() {
    this.getAllCountryCodes();
  }

  private getAllCountryCodes() {
    this.countryCodesService.all().then(codes => {
      this.countryCodes = codes;
      if (this.countryCodes.length > 0) {
        this.countryCodeControl.setValue(this.countryCodes[0] as any);
      }
    })
  }

  protected readonly enumTranslate = enumTranslate;
}
