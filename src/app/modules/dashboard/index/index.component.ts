import {afterNextRender, Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OrganizationsService} from "@services/organizations/organizations.service";
import {E_ORGANIZATION_TYPE, Organization} from "@app/interfaces/ApiInterface";
import {ActivityBlockComponent} from "../blocks/activity-block/activity-block.component";
import {FinanceBlockComponent} from "../blocks/finance-block/finance-block.component";

@Component({
  selector: 'os-index',
  templateUrl: './index.component.html',
  imports: [
    FinanceBlockComponent,
    ActivityBlockComponent
  ],
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  public organization: Organization | undefined;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly organizationsService: OrganizationsService,
  ) {
    afterNextRender(() => {
      this.organizationsService.organization$.subscribe(org => {
        this.organization = org;
      })
    })
  }

  protected readonly E_ORGANIZATION_TYPE = E_ORGANIZATION_TYPE;
}
