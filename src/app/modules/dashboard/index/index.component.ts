import {AfterViewInit, Component} from '@angular/core';
import {OrganizationsService} from "@services/organizations/organizations.service";
import {E_ORGANIZATION_TYPE, Organization} from "@app/interfaces/ApiInterface";
import {ActivityBlockComponent} from "../blocks/activity-block/activity-block.component";
import {FinanceBlockComponent} from "../blocks/finance-block/finance-block.component";
import {DevelopStatusComponent} from "@app/components/develop-status/develop-status.component";

@Component({
  standalone: true,
  selector: 'os-index',
  templateUrl: './index.component.html',
  imports: [
    FinanceBlockComponent,
    ActivityBlockComponent,
    DevelopStatusComponent
  ],
  styleUrl: './index.component.scss'
})
export class IndexComponent implements AfterViewInit {
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
