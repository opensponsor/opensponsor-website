import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrl: './new.component.scss'
})
export class NewComponent {
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
