import {Component, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatSuffix} from "@angular/material/form-field";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {validatePhoneNumber} from "@app/components/regular/phone-number";
import {CountryCode} from "@app/interfaces/ApiInterface";
import {SmsService} from "@services/sms/sms.service";
import {SnackBarService} from "@services/snack-bar/snack-bar.service";

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

  constructor(
    private smsService: SmsService,
    private snackBarService: SnackBarService,
  ) {
  }

  public send() {
    if(this.countryCode && this.phoneNumber && validatePhoneNumber(this.phoneNumber)) {
      this.smsService.sendVerificationCode(this.countryCode, this.phoneNumber).subscribe(res => {
        if(res.status == 200) {
          console.dir(res.body?.data.body)
        }
      })
    }
  }

  protected readonly validatePhoneNumber = validatePhoneNumber;
}
