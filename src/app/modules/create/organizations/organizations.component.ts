import { Component } from '@angular/core';
import {OrganizationFormComponent} from "@app/forms/organization-form/organization-form.component";
import {E_ORGANIZATION_TYPE} from "@app/interfaces/ApiInterface";

@Component({
  selector: 'os-organizations',
  imports: [
    OrganizationFormComponent
  ],
  templateUrl: './organizations.component.html',
  styleUrl: './organizations.component.scss'
})
export class OrganizationsComponent {

  protected readonly E_ORGANIZATION_TYPE = E_ORGANIZATION_TYPE;
}
