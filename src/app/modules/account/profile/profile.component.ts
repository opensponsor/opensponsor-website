import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
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
