import {Component, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatSuffix} from "@angular/material/form-field";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {validatePhoneNumber} from "@app/components/regular/phone-number";
import {CountryCode} from "@app/interfaces/ApiInterface";

@Component({
  selector: 'os-sms-code-button',
  imports: [
    MatButton,
    MatSuffix,
    FormsModule,
    MatFormField,
    MatInput,
    ReactiveFormsModule
  ],
  templateUrl: './sms-code-button.component.html',
  styleUrl: './sms-code-button.component.scss'
})
export class SmsCodeButtonComponent {
  @Input({
    required: true,
  })
  formControl!: FormControl;

  @Input({
    required: true,
  })
  phoneNumber: string | null = null;

  @Input({
    required: true,
  })
  countryCode: CountryCode | null = null;

  public send() {
    if(this.phoneNumber && validatePhoneNumber(this.phoneNumber)) {
      alert("send code" + this.countryCode);
    }
  }

  protected readonly validatePhoneNumber = validatePhoneNumber;
}
