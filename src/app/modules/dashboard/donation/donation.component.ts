import { Component } from '@angular/core';
import {
  DonationForUserComponent
} from "@modules/dashboard/donation/group/donation-for-user/donation-for-user.component";
import {
  DonationForOrganizationComponent
} from "@modules/dashboard/donation/group/donation-for-organization/donation-for-organization.component";
import {E_ORGANIZATION_TYPE, Organization} from "@app/interfaces/ApiInterface";
import {OrganizationsService} from "@services/organizations/organizations.service";

@Component({
  standalone: true,
  selector: 'os-donation',
  imports: [
    DonationForUserComponent,
    DonationForOrganizationComponent
  ],
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.scss'
})
export class DonationComponent {
  public organization: Organization | undefined;

  constructor(
    protected readonly organizationsService: OrganizationsService,
  ) {
    this.organizationsService.organization$.subscribe((org) => this.organization = org)
  }

  protected readonly E_ORGANIZATION_TYPE = E_ORGANIZATION_TYPE;
}
