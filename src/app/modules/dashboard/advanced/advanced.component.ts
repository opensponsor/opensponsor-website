import {AfterViewInit, Component} from '@angular/core';
import {E_ORGANIZATION_TYPE, Organization} from "@app/interfaces/ApiInterface";
import {OrganizationsService} from "@services/organizations/organizations.service";

@Component({
  selector: 'os-advanced',
  imports: [
  ],
  templateUrl: './advanced.component.html',
  styleUrl: './advanced.component.scss'
})
export class AdvancedComponent implements AfterViewInit {
  public organization: Organization | undefined;

  constructor(
    private readonly organizationsService: OrganizationsService,
  ) {
  }

  ngAfterViewInit() {
    this.organizationsService.organization$.subscribe(org => {
      this.organization = org;
    })
  }

  protected readonly E_ORGANIZATION_TYPE = E_ORGANIZATION_TYPE;
}
