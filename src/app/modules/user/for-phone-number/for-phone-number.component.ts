import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "@services/auth/auth.service";
import {CountryCode, User} from "@app/interfaces/ApiInterface";
import {Router, RouterLink} from "@angular/router";
import {SnackBarService} from "@services/snack-bar/snack-bar.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {CountryPhoneGroupComponent} from "@app/forms/country-phone-group/country-phone-group.component";

@Component({
  standalone: true,
  selector: 'os-for-phone-number',
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    RouterLink,
    CountryPhoneGroupComponent,
  ],
  templateUrl: './for-phone-number.component.html',
  styleUrl: './for-phone-number.component.scss'
})
export class ForPhoneNumberComponent {
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
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(64),
    ]),
  });

  public login() {
    if (this.formGroup.valid) {
      const data = {
        countryCode: this.formGroup.value.countryCode as CountryCode,
        phoneNumber: String(this.formGroup.value.phoneNumber),
        password: String(this.formGroup.value.password),
      }
      this.authService.login<User>(data).subscribe(res => {
        if (res.body && res.body.data) {
          this.authService.persistAuth(res.body.data);
          this.router.navigateByUrl("/").then(() => {
            this.snackBarService.message({message: 'Login successful!'})
          });
        } else {
          this.snackBarService.message({message: 'Login failed!'})
        }
      })
    }
  }
}
