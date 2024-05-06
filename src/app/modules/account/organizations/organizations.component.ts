import { Component } from '@angular/core';
import {OrganizationsService} from "@services/organizations/organizations.service";
import {Organization} from "@app/interfaces/ApiInterface";

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrl: './organizations.component.scss'
})
export class OrganizationsComponent {
    public organizations: Organization[] = [];
    constructor(
        private readonly organizationsService: OrganizationsService
    ) {
        this.organizationsService.list().subscribe(res => {
            if(res.body?.records) {
                this.organizations = res.body?.records;
            }
        })
    }
}
