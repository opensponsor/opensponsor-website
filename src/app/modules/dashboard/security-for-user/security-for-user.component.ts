import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {
  DashboardContainerComponent
} from "@modules/dashboard/components/dashboard-container/dashboard-container.component";
import {RequiredHintComponent} from "@app/components/required-hint/required-hint.component";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {resetFormFields} from "@app/utils/reset-form-fields";
import {UserService} from "@services/user/user.service";
import {SnackBarService} from "@services/snack-bar/snack-bar.service";
import {SmsCodeButtonComponent} from "@app/forms/sms-code-button/sms-code-button.component";
import {User} from "@app/interfaces/ApiInterface";
import {AuthService} from "@services/auth/auth.service";

@Component({
  selector: 'os-security-for-user',
  imports: [
    DashboardContainerComponent,
    ReactiveFormsModule,
    RequiredHintComponent,
    MatFormField,
    MatInput,
    MatLabel,
    MatFormFieldModule,
    SmsCodeButtonComponent
  ],
  templateUrl: './security-for-user.component.html',
  styleUrl: './security-for-user.component.scss'
})
export class SecurityForUserComponent {
  public user: User | undefined;
  public formGroup = new FormGroup({
    password: new FormControl<string>("", [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(64),
    ]),
    smsCode: new FormControl<string>("", [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
    ]),
  })

  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
    private readonly snackBarService: SnackBarService,
  ) {
    this.authService.authInfo$.subscribe(user => this.user = user);
  }

  public submit(): void {
    if(this.formGroup.valid) {
      resetFormFields(this.formGroup.controls);
      // this.userService.update(this.formGroup.getRawValue()).subscribe((res) => {
      //   if(res.status === 200 && res.body) {
      //     this.snackBarService.message({ message: res.body.message })
      //   }
      // });
    } else {
      console.dir(this.formGroup.errors);
    }
  }
}
