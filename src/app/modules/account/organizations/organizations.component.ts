import {Component} from '@angular/core';
import {OrganizationsService} from "@services/organizations/organizations.service";
import {Organization} from "@app/interfaces/ApiInterface";
import {MatCardModule} from "@angular/material/card";
import {RouterLink} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'os-organizations',
  templateUrl: './organizations.component.html',
  imports: [
    MatCardModule,
    RouterLink,
    MatIconModule,
    MatButtonModule
  ],
  styleUrl: './organizations.component.scss'
})
export class OrganizationsComponent {
  public organizations: Organization[] = [];

  constructor(
    private readonly organizationsService: OrganizationsService
  ) {
    this.organizationsService.list().subscribe(res => {
      if (res.body?.records) {
        this.organizations = res.body?.records;
      }
    })
  }
}
