import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {MatButton, MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-form',
  standalone: true,
    imports: [
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        NgIf,
        MatButtonModule
    ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
    public formGroup = new FormGroup({
        name: new FormControl(null, [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(64),
        ]),
        legalName: new FormControl(null, [
            Validators.minLength(4),
            Validators.maxLength(64),
        ]),
        company: new FormControl(null, [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(64),
        ]),
        url: new FormControl(null, [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(64),
        ]),
        website: new FormControl(null, [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(64),
        ]),
        introduce: new FormControl(null, [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(64),
        ]),
        currency: new FormControl(null, [
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
