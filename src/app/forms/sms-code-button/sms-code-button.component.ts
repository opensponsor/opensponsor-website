import {Component, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatSuffix} from "@angular/material/form-field";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {validatePhoneNumber} from "@app/components/regular/phone-number";
import {CountryCode} from "@app/interfaces/ApiInterface";
import {SmsService} from "@services/sms/sms.service";
import {SnackBarService} from "@services/snack-bar/snack-bar.service";
import { isDevMode } from '@angular/core';

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
  smsCodeFormControl!: FormControl;

  @Input({
    required: true,
  })
  phoneNumber: string | undefined | null;

  @Input({
    required: false,
  })
  toSelf: boolean = false;

  @Input({
    required: true,
  })
  countryCode: CountryCode | undefined | null;

  private initialText = '获取验证码';
  private pendingTimes = isDevMode() ? 5 : 80; // seconds
  public text = this.initialText;
  public disabled = false;

  constructor(
    private smsService: SmsService,
    private snackBarService: SnackBarService,
  ) {
  }

  private countDown(seconds: number) {
    this.text = `${seconds}s`;

    if (seconds === 0) {
      this.disabled = false;
      this.text = this.initialText;
    } else {
      setTimeout(() => {
        const remaining = seconds - 1;
        this.text = `${remaining}s`;
        this.countDown(remaining);
      }, 1000)
    }
  }

  public send() {
    this.disabled = true;
    if(this.countryCode && this.phoneNumber && validatePhoneNumber(this.phoneNumber)) {
      this.smsService.sendVerificationCode(this.countryCode, this.phoneNumber).subscribe({
        next: res => {
          if(res.body?.code == 200) {
            this.countDown(this.pendingTimes);
          } else {
            this.snackBarService.message({message: res.body?.message as string});
          }
        },
        error: err => {
          this.disabled = false;
          this.snackBarService.message({message: err.body.message})
        }
      })
    } else if(this.toSelf) {
      this.smsService.sendVerificationCodeToSelf().subscribe({
        next: res => {
          if(res.body?.code == 200) {
            this.countDown(this.pendingTimes);
          } else {
            this.snackBarService.message({message: res.body?.message as string});
          }
        },
        error: err => {
          this.disabled = false;
          this.snackBarService.message({message: err.body.message})
        }
      })
    }
  }

  protected readonly validatePhoneNumber = validatePhoneNumber;
}
