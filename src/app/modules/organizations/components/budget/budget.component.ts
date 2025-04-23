import {Component, Input} from '@angular/core';
import {Organization} from "@app/interfaces/ApiInterface";

@Component({
  selector: 'os-budget',
  imports: [],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.scss'
})
export class BudgetComponent {
  @Input({
    required: true,
  })
  organization!: Organization;
}
