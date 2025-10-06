import { Component } from '@angular/core';
import {AuthService} from "@services/auth/auth.service";
import {Router, RouterLink} from "@angular/router";
import {SnackBarService} from "@services/snack-bar/snack-bar.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CountryCode, User} from "@app/interfaces/ApiInterface";
import {CountryPhoneGroupComponent} from "@app/forms/country-phone-group/country-phone-group.component";
import {SmsCodeButtonComponent} from "@app/forms/sms-code-button/sms-code-button.component";
import {MatButton} from "@angular/material/button";

@Component({
  standalone: true,
  selector: 'os-for-sms-code',
  imports: [
    CountryPhoneGroupComponent,
    ReactiveFormsModule,
    RouterLink,
    SmsCodeButtonComponent,
    MatButton
  ],
  templateUrl: './for-sms-code.component.html',
  styleUrl: './for-sms-code.component.scss'
})
export class ForSmsCodeComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly snackBarService: SnackBarService,
  ) {
  }

  public formGroup = new FormGroup({
    phoneNumber: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(64),
    ]),
    countryCode: new FormControl<CountryCode | null>(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(64),
    ]),
    code: new FormControl<string>("", [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
    ]),
  });

  public login() {
    if (this.formGroup.valid) {
      const data = {
        countryCode: this.formGroup.value.countryCode as CountryCode,
        phoneNumber: String(this.formGroup.value.phoneNumber),
        code: String(this.formGroup.value.code),
      }
      this.authService.loginForCode<User>(data).subscribe(res => {
        if (res.body) {
          this.authService.persistAuth(res.body.data);
          this.router.navigateByUrl("/").then(() => {
            this.snackBarService.message({message: 'Login successful!'})
          });
        }
      })
    }
  }
}
