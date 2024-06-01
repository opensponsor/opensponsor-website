import { Component } from '@angular/core';
import {OrganizationsService} from "@services/organizations/organizations.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
    constructor(
        protected readonly organizationsService: OrganizationsService,
    ) {
        console.dir(this.organizationsService.organization);
    }
}
