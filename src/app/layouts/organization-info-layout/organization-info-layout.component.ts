import { Component } from '@angular/core';
import {OrganizationsService} from "@services/organizations/organizations.service";
import {Platform} from "@angular/cdk/platform";
import {ActivatedRoute, RouterOutlet} from "@angular/router";
import {DefaultFooterComponent} from "@app/layouts/default-footer/default-footer.component";
import {DefaultHeaderComponent} from "@app/layouts/default-header/default-header.component";
import {HttpStatusCode} from "@angular/common/http";

@Component({
  selector: 'os-organization-info-layout',
  imports: [
    RouterOutlet,
    DefaultFooterComponent,
    DefaultHeaderComponent
  ],
  templateUrl: './organization-info-layout.component.html',
  styleUrl: './organization-info-layout.component.scss'
})
export class OrganizationInfoLayoutComponent {
  constructor(
    private readonly organizationsService: OrganizationsService,
    private readonly platform: Platform,
    private readonly activatedRoute: ActivatedRoute,
  ) {
    if (this.platform.isBrowser) {
      if(this.activatedRoute.firstChild) {
        this.activatedRoute.firstChild?.params.subscribe(value => {
          const orgName = value['slug'];
          this.loadOrganizations(orgName);
        })
      }
    }
  }

  private loadOrganizations(orgName: string) {
    this.organizationsService.getOrganizationBySlug(orgName).subscribe(res => {
      if(res.status === HttpStatusCode.Ok && res.body) {
        this.organizationsService.organization.set(res.body.data);
      }
    });
  }
}
