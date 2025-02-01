import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {NgIf} from "@angular/common";

@Component({
  selector: 'os-profile',
  templateUrl: './profile.component.html',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgIf
  ],
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  public formGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(64),
    ]),
    legalName: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(64),
    ]),
    url: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(64),
    ]),
    introduce: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(64),
    ]),
    tags: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(64),
    ]),
    location: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(64),
    ]),
    address: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(64),
    ]),
  });

  public save() {
    if (this.formGroup.valid) {
      console.dir(this.formGroup);
    }
  }
}
