import {Component} from '@angular/core';
import {OrganizationsService} from "@services/organizations/organizations.service";
import {E_ORGANIZATION_TYPE, Organization} from "@app/interfaces/ApiInterface";
import {OrganizationFormComponent} from "@app/forms/organization-form/organization-form.component";
import {ProfileForUserComponent} from "@modules/dashboard/profile-for-user/profile-for-user.component";
import {
  ProfileForOrganizationComponent
} from "@modules/dashboard/profile-for-organization/profile-for-organization.component";

@Component({
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
    this.organization = this.organizationsService.organization();

    this.organizationsService.organization$.subscribe(() => {
      this.organization = this.organizationsService.organization();
    })
  }

  protected readonly E_ORGANIZATION_TYPE = E_ORGANIZATION_TYPE;
}
