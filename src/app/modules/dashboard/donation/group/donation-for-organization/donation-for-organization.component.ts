import { Component } from '@angular/core';
import {DateFilterComponent} from "@app/components/date-filter/date-filter.component";

@Component({
  selector: 'os-donation-for-organization',
  imports: [
    DateFilterComponent
  ],
  templateUrl: './donation-for-organization.component.html',
  styleUrl: './donation-for-organization.component.scss'
})
export class DonationForOrganizationComponent {

}
