import {Component} from '@angular/core';
import {E_ORGANIZATION_TYPE} from "@app/interfaces/ApiInterface";
import {OrganizationFormComponent} from "@app/forms/organization-form/organization-form.component";

@Component({
  standalone: true,
  selector: 'os-community',
  templateUrl: './community.component.html',
  imports: [
    OrganizationFormComponent
  ],
  styleUrl: './community.component.scss'
})
export class CommunityComponent {
  protected readonly E_ORGANIZATION_TYPE = E_ORGANIZATION_TYPE;
}
