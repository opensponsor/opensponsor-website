import {Component, Input} from '@angular/core';
import {Organization} from "@app/interfaces/ApiInterface";
import {
  MatDatepickerModule,
  MatDateRangeInput,
} from "@angular/material/datepicker";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'os-finance-block',
  imports: [
    MatDateRangeInput,
    ReactiveFormsModule,
    MatHint,
    MatDatepickerModule,
    MatLabel,
    MatFormField,
    MatSelectModule,
    MatCardModule,
  ],
  templateUrl: './finance-block.component.html',
  styleUrl: './finance-block.component.scss'
})
export class FinanceBlockComponent {
  @Input({
    required: true,
  })
  organization!: Organization;

  readonly campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
}
