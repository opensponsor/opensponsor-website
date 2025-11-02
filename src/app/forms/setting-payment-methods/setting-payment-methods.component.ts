import {Component, Input} from '@angular/core';
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {CountryCode, DebitCard, UpdateUser} from "@app/interfaces/ApiInterface";
import {CountrySelectComponent} from "@app/forms/country-select/country-select.component";
import {MatButton} from "@angular/material/button";
import {NgClass} from "@angular/common";

// 银联获取主体名下对私银行卡信息API
// https://open.unionpay.com/tjweb/api/detail?apiSvcId=21&index=2

type BankCard = Pick<DebitCard, 'bankName' | 'bankCardNo' | 'legalName' | 'identityCardNo' | 'countryCode' | 'phoneNumber'>

@Component({
  selector: 'os-setting-payment-methods',
  imports: [
    MatFormField,
    MatInput,
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
    CountrySelectComponent,
    MatButton,
    NgClass
  ],
  templateUrl: './setting-payment-methods.component.html',
  styleUrl: './setting-payment-methods.component.scss'
})
export class SettingPaymentMethodsComponent {
  @Input({
    required: true,
  })
  public callback!: (data: BankCard) => void;

  public formGroup = new FormGroup< Record<(keyof BankCard), FormControl> >({
    // 身份证姓名
    legalName: new FormControl<string>("", [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(16),
    ]),
    // 银行卡号
    bankCardNo: new FormControl<string>("", [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(64),
    ]),
    // 银行卡号
    bankName: new FormControl<string>("", [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(64),
    ]),
    // 身份证号
    identityCardNo: new FormControl<string>("", [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(32),
    ]),
    // 手机号
    phoneNumber: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(64),
    ]),
    countryCode: new FormControl<CountryCode | null>(null, [
      Validators.required
    ]),
  });

  public save() {
    if (this.formGroup.valid) {
      this.callback(this.formGroup.value)
    }
  }
}
