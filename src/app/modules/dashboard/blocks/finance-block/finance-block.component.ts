import {Component, Input} from '@angular/core';
import {Organization} from "@app/interfaces/ApiInterface";
import {
  MatDatepickerModule,
} from "@angular/material/datepicker";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {DateFilterComponent} from "@app/components/date-filter/date-filter.component";

@Component({
  standalone: true,
  selector: 'os-finance-block',
  imports: [
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCardModule,
    DateFilterComponent,
  ],
  templateUrl: './finance-block.component.html',
  styleUrl: './finance-block.component.scss'
})
export class FinanceBlockComponent {
  @Input({
    required: true,
  })
  organization!: Organization;
}
