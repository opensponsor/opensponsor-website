import {Component} from '@angular/core';
import {OrganizationsService} from "@services/organizations/organizations.service";
import {E_ORGANIZATION_TYPE, Organization} from "@app/interfaces/ApiInterface";
import {ProfileForUserComponent} from "@modules/dashboard/profile/group/profile-for-user/profile-for-user.component";
import {
  ProfileForOrganizationComponent
} from "@modules/dashboard/profile/group/profile-for-organization/profile-for-organization.component";

@Component({
  standalone: true,
  selector: 'os-profile',
  templateUrl: './profile.component.html',
  imports: [
    ProfileForUserComponent,
    ProfileForOrganizationComponent
  ],
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  public organization: Organization | undefined;

  constructor(
    protected readonly organizationsService: OrganizationsService,
  ) {
    this.organizationsService.organization$.subscribe((org) => this.organization = org)
  }

  protected readonly E_ORGANIZATION_TYPE = E_ORGANIZATION_TYPE;
}
