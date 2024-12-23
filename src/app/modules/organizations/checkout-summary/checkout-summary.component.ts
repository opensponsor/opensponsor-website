import {Component} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Organization, Tier} from "@app/interfaces/ApiInterface";
import {TierService} from "@services/tier/tier.service";
import {OrganizationsService} from "@services/organizations/organizations.service";
import {MatAnchor} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-checkout-summary',
  templateUrl: './checkout-summary.component.html',
  imports: [
    MatAnchor,
    MatIconModule
  ],
  styleUrl: './checkout-summary.component.scss'
})
export class CheckoutSummaryComponent {
  public tier: Tier | undefined;
  public organization: Organization | undefined;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly tierService: TierService,
    private readonly organizationsService: OrganizationsService,
  ) {
    if (this.tierService.tier()) {
      this.tier = this.tierService.tier();
      this.organization = this.organizationsService.organization();
    } else {
      // redirect start
      if (this.activatedRoute.parent?.snapshot?.paramMap) {
        this.tierService.redirectStep(this.activatedRoute.parent?.snapshot.paramMap as ParamMap, 'start').then()
      }
    }
  }

  public toLink(to: 'profile' | 'payment') {
    this.tierService.redirectStep(this.activatedRoute.parent?.snapshot.paramMap as ParamMap, to).then();
  }
}
