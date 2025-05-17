import {Component} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {TierService} from "@services/tier/tier.service";
import {Organization, Tier} from "@app/interfaces/ApiInterface";
import {OrganizationsService} from "@services/organizations/organizations.service";
import {Platform} from "@angular/cdk/platform";
import {CheckoutService} from "@services/checkout/checkout.service";
import {MatAnchor} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ClipboardTextComponent} from "@app/components/clipboard-text/clipboard-text.component";
import {enumTranslate} from "@app/languages/zh_cn/enumTranslate";

@Component({
  selector: 'os-checkout-start',
  templateUrl: './checkout-start.component.html',
  imports: [
    MatAnchor,
    MatIconModule,
    ClipboardTextComponent
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
        this.organizationsService.organization$.subscribe((org) => {
          this.organization = org;
          if (tier && this.organization) {
            this.tierService.get(this.organization.id, tier).subscribe(res => {
              if (res.status === 200) {
                const tier = this.tier = res.body?.data;
                if(tier) {
                  this.tierService.tier.set(tier);
                  this.checkoutService.stepDesc.set({'checkoutStart': `${tier?.amount}${enumTranslate[tier.currency.currencyAlphabeticCode]}/${enumTranslate[tier.interval]}`});
                }
              }
            });
          } else {
            // redirect to 404
          }
        })
      })
    }
  }

  public toLink(to: 'profile') {
    this.tierService.redirectStep(this.activatedRoute.snapshot.paramMap as ParamMap, to).then();
  }

  protected readonly location = location;
  protected readonly enumTranslate = enumTranslate;
}
