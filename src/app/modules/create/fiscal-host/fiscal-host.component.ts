import {Component} from '@angular/core';
import {E_ORGANIZATION_TYPE} from "@app/interfaces/ApiInterface";
import {OrganizationFormComponent} from "@app/forms/organization-form/organization-form.component";

@Component({
  selector: 'app-fiscal-host',
  templateUrl: './fiscal-host.component.html',
  styleUrl: './fiscal-host.component.scss',
  imports: [
    OrganizationFormComponent
  ]
})
export class FiscalHostComponent {
  protected readonly E_ORGANIZATION_TYPE = E_ORGANIZATION_TYPE;
}
