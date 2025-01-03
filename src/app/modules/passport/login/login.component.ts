import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "@services/auth/auth.service";
import {User} from "@app/interfaces/ApiInterface";
import {Router, RouterLink} from "@angular/router";
import {SnackBarService} from "@services/snack-bar/snack-bar.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
    imports: [
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        RouterLink,
        NgOptimizedImage
    ],
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly snackBarService: SnackBarService,
  ) {
  }

  public formGroup = new FormGroup({
    account: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(64),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(64),
    ]),
  });

  public login() {
    if (this.formGroup.valid) {
      const data = {
        account: String(this.formGroup.value.account),
        password: String(this.formGroup.value.password),
      }
      this.authService.login<User>(data).subscribe(res => {
        if (res.body) {
          this.authService.persistAuth(res.body);
          this.router.navigateByUrl("/").then(() => {
            this.snackBarService.message({message: 'Login successful!'})
          });
        }
      })
    }
  }
}
