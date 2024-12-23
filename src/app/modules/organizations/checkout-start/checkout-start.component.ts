import {Component} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {TierService} from "@services/tier/tier.service";
import {Organization, Tier} from "@app/interfaces/ApiInterface";
import {OrganizationsService} from "@services/organizations/organizations.service";
import {Platform} from "@angular/cdk/platform";
import {CheckoutService} from "@services/checkout/checkout.service";
import {MatAnchor} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-checkout-start',
  templateUrl: './checkout-start.component.html',
  imports: [
    MatAnchor,
    MatIconModule
  ],
  styleUrl: './checkout-start.component.scss'
})
export class CheckoutStartComponent {
  public tier: Tier | undefined;
  public organization: Organization | undefined;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly tierService: TierService,
    private readonly organizationsService: OrganizationsService,
    private readonly platform: Platform,
    private readonly checkoutService: CheckoutService,
  ) {
    if (this.platform.isBrowser) {
      this.activatedRoute.paramMap.subscribe(paramMap => {
        const tier = paramMap.get('tier');
        const organization = paramMap.get('name');
        if (organization) {
          this.organizationsService.getOrganizationByName(organization).subscribe(res => {
            if (res.status === 200 && res.body) {
              this.organization = res.body;
              if (tier) {
                this.tierService.get(res.body?.id, tier).subscribe(res2 => {
                  if (res2.status === 200) {
                    const tier = this.tier = res2.body as Tier;
                    this.checkoutService.stepDesc.set({'checkoutStart': `${tier.amount}${tier.currency}/${tier.interval}`});
                  }
                });
              } else {
                // redirect to 404
              }
            }
          });
        }
      })
    }
  }

  public toLink(to: 'profile') {
    this.tierService.redirectStep(this.activatedRoute.snapshot.paramMap as ParamMap, to).then();
  }
}
