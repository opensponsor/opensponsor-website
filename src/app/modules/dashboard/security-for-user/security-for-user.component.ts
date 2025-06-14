import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'os-security-for-user',
  imports: [],
  templateUrl: './security-for-user.component.html',
  styleUrl: './security-for-user.component.scss'
})
export class SecurityForUserComponent {
  public formGroup = new FormGroup({
    newPassword: new FormControl([
      Validators.required
    ]),
  })
}
