import { Component } from '@angular/core';
import {OrganizationsService} from "@services/organizations/organizations.service";
import {E_ORGANIZATION_TYPE} from "@app/interfaces/ApiInterface";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
    constructor(
        protected readonly organizationsService: OrganizationsService,
    ) {
    }

    protected readonly E_ORGANIZATION_TYPE = E_ORGANIZATION_TYPE;
}
