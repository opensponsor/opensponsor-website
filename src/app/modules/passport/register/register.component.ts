import {Component} from '@angular/core';
import {AuthService} from "@services/auth/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CountryCodesService} from "@services/countryCodes/country-codes.service";
import {CountryCodes, User} from "@app/interfaces/ApiInterface";
import RequestRegister from "@app/payload/RequestRegister";
import {Router} from "@angular/router";
import {SnackBarService} from "@services/snack-bar/snack-bar.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
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

    public countryCodes: CountryCodes[] = [];

    public formGroup = new FormGroup({
        username: new FormControl<string>("", [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(64),
        ]),
        legalName: new FormControl<string>("", [
            Validators.minLength(4),
            Validators.maxLength(64),
        ]),
        countryCode: new FormControl<CountryCodes | null>(null, [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(64),
        ]),
        phoneNumber: new FormControl<string>("", [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(64),
        ]),
        password: new FormControl<string>("", [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(64),
        ]),
    });

    private getAllCountryCodes() {
        this.countryCodesService.all().then(codes => {
            this.countryCodes = codes;
            if(this.countryCodes.length > 0) {
                this.formGroup.controls.countryCode.setValue(this.countryCodes[0] as any);
            }
        })
    }

    public register() {
        if(this.formGroup.valid) {
            this.authService.register<User>(this.formGroup.value as RequestRegister).subscribe(res => {
                if(res.body) {
                    this.router.navigateByUrl("/passport/login").then(() => {
                        this.snackBarService.message({message: '注册完成, 请登录!'})
                    });
                }
            })
        }
    }
}
