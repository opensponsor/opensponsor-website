import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OrganizationsService} from "@services/organizations/organizations.service";
import {E_ORGANIZATION_TYPE, Organization} from "@app/interfaces/ApiInterface";
import {SecurityForUserComponent} from "@modules/dashboard/security/group/security-for-user/security-for-user.component";
import {
  SecurityForOrganizationComponent
} from "@modules/dashboard/security/group/security-for-organization/security-for-organization.component";

@Component({
  standalone: true,
  selector: 'os-security',
  templateUrl: './security.component.html',
  imports: [
    SecurityForUserComponent,
    SecurityForOrganizationComponent
  ],
  styleUrl: './security.component.scss'
})
export class SecurityComponent {
  public organization: Organization | undefined;
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly organizationsService: OrganizationsService,
  ) {
    this.organizationsService.organization$.subscribe(org => this.organization = org);
  }

  protected readonly E_ORGANIZATION_TYPE = E_ORGANIZATION_TYPE;
}
