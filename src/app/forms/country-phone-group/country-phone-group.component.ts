import {Component, Input, OnInit} from '@angular/core';
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {CountryCodesService} from "@services/countryCodes/country-codes.service";
import {CountryCode} from "@app/interfaces/ApiInterface";

@Component({
  standalone: true,
  selector: 'os-country-phone-group',
  imports: [
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    ReactiveFormsModule
  ],
  templateUrl: './country-phone-group.component.html',
  styleUrl: './country-phone-group.component.scss'
})
export class CountryPhoneGroupComponent implements OnInit {
  @Input({
    required: true,
  })
  phoneNumberControl!: FormControl;

  @Input({
    required: true,
  })
  countryCodeControl!: FormControl;

  @Input({
    required: false,
  })
  label: string = '手机号';

  @Input({
    required: false,
  })
  placeholder: string = '手机号';

  public countryCodes: CountryCode[] = [];

  constructor(
    private readonly countryCodesService: CountryCodesService,
  ) {
  }

  ngOnInit() {
    this.getAllCountryCodes();
  }

  private getAllCountryCodes() {
    this.phoneNumberControl.disable();
    this.countryCodesService.all().then(codes => {
      this.countryCodes = codes;
      if (this.countryCodes.length > 0) {
        this.phoneNumberControl.enable();
        this.countryCodeControl.setValue(this.countryCodes[0] as any);
      }
    })
  }

}
