import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DashboardLayoutComponent} from "@modules/dashboard/components/dashboard-layout/dashboard-layout.component";

@Component({
  standalone: true,
  selector: 'os-social',
  templateUrl: './social.component.html',
  imports: [
    DashboardLayoutComponent
  ],
  styleUrl: './social.component.scss'
})
export class SocialComponent {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
  ) {

  }
}
