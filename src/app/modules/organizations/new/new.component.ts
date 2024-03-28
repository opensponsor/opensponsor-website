import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrl: './new.component.scss'
})
export class NewComponent {
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
