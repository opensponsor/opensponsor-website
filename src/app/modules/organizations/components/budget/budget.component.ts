import {Component, Input} from '@angular/core';
import {Organization} from "@app/interfaces/ApiInterface";
import {MatList, MatListItem} from "@angular/material/list";
import {MatTab, MatTabGroup} from "@angular/material/tabs";

@Component({
  standalone: true,
  selector: 'os-budget',
  imports: [
    MatList,
    MatListItem,
    MatTab,
    MatTabGroup
  ],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.scss'
})
export class BudgetComponent {
  @Input({
    required: true,
  })
  organization!: Organization;
}
