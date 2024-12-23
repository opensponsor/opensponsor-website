import {Component} from '@angular/core';
import {OrganizationsService} from "@services/organizations/organizations.service";
import {E_ORGANIZATION_TYPE, Organization} from "@app/interfaces/ApiInterface";
import {OrganizationFormComponent} from "@app/forms/organization-form/organization-form.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  imports: [
    OrganizationFormComponent
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
