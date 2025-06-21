import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSelectModule} from "@angular/material/select";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {provideNativeDateAdapter} from "@angular/material/core";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'os-date-filter',
  imports: [MatSelectModule, MatFormFieldModule, MatDatepickerModule, FormsModule, ReactiveFormsModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './date-filter.component.html',
  styleUrl: './date-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateFilterComponent {
  readonly range = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
}
