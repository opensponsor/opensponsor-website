import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DashboardLayoutComponent} from "@modules/dashboard/components/dashboard-layout/dashboard-layout.component";

@Component({
  standalone: true,
  selector: 'os-contributor',
  templateUrl: './contributor.component.html',
  imports: [
    DashboardLayoutComponent,
  ],
  styleUrl: './contributor.component.scss'
})
export class ContributorComponent {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
  ) {

  }

  protected readonly Array = Array;
}
