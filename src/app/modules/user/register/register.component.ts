import {Component} from '@angular/core';
import {AuthService} from "@services/auth/auth.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CountryCodesService} from "@services/countryCodes/country-codes.service";
import {CountryCode, User} from "@app/interfaces/ApiInterface";
import RequestRegister from "@app/payload/RequestRegister";
import {Router, RouterLink} from "@angular/router";
import {SnackBarService} from "@services/snack-bar/snack-bar.service";
import {MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {NgFor, NgOptimizedImage} from "@angular/common";
import {environment} from "@environments/environment";
import slugify from "limax";
import {SmsCodeButtonComponent} from "@app/components/sms-code-button/sms-code-button.component";
import {validatePhoneNumber} from "@app/components/regular/phone-number";

@Component({
  selector: 'os-register',
  templateUrl: './register.component.html',
  imports: [
    MatLabel,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    RouterLink,
    NgFor,
    NgOptimizedImage,
    SmsCodeButtonComponent,
  ],
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly countryCodesService: CountryCodesService,
    private readonly router: Router,
    private readonly snackBarService: SnackBarService,
  ) {
    this.getAllCountryCodes();
  }

  public countryCodes: CountryCode[] = [];
  public environment = environment;

  public formGroup = new FormGroup({
    username: new FormControl<string>("", {
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(64),
      ],
      asyncValidators: [
        () => {
          return new Promise((resolve) => {
            const n = this.formGroup.controls.username.getRawValue();
            if(n) {
              this.formGroup.controls.slug.setValue(slugify(n))
            }
            resolve({});
          })
        }
      ]
    }),
    slug: new FormControl<string>("", [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(64),
    ]),
    countryCode: new FormControl<CountryCode | null>(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(64),
    ]),
    phoneNumber: new FormControl<string>("", {
      validators: [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(64),
      ],
      asyncValidators: [
        (field)=> {
          return new Promise((resolve) => {
            if(validatePhoneNumber(field.value)) {
              resolve({})
            } else {
              resolve({message: '手机号格式不正确'});
            }
          })
        }
      ]
    }),
    smsCode: new FormControl<string>("", [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
    ]),
    password: new FormControl<string>("", [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(64),
    ]),
  });

  private getAllCountryCodes() {
    this.formGroup.controls.phoneNumber.disable();
    this.countryCodesService.all().then(codes => {
      this.countryCodes = codes;
      if (this.countryCodes.length > 0) {
        this.formGroup.controls.phoneNumber.enable();
        this.formGroup.controls.countryCode.setValue(this.countryCodes[0] as any);
      }
    })
  }

  public register() {
    if (this.formGroup.valid) {
      this.authService.register<User>(this.formGroup.value as RequestRegister).subscribe(res => {
        if (res.body) {
          this.router.navigateByUrl("/user/login").then(() => {
            this.snackBarService.message({message: '注册完成, 请登录!'})
          });
        }
      })
    }
  }

  protected readonly JSON = JSON;
}
