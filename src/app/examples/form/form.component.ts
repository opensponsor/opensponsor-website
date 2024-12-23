import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  public formGroup = new FormGroup({
    title: new FormControl(null, [
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
