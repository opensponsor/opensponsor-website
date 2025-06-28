import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  standalone: true,
  selector: 'os-field-errors',
  imports: [
  ],
  templateUrl: './field-errors.html',
  styleUrl: './field-errors.scss'
})
export class FieldErrors {
  @Input({
    required: true
  }) public field!: FormControl<any>;

}
