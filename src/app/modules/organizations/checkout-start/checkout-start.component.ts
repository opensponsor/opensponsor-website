import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TierService} from "@services/tier/tier.service";
import {Tier} from "@app/interfaces/ApiInterface";
import {OrganizationsService} from "@services/organizations/organizations.service";
import {Platform} from "@angular/cdk/platform";

@Component({
  selector: 'app-checkout-start',
  templateUrl: './checkout-start.component.html',
  styleUrl: './checkout-start.component.scss'
})
export class CheckoutStartComponent {
    public tier: Tier | undefined;
    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly tierService: TierService,
        private readonly organizationsService: OrganizationsService,
        private readonly platform: Platform,
    ) {
        if(this.platform.isBrowser) {
            this.activatedRoute.paramMap.subscribe(paramMap => {
                const tier = paramMap.get('tier');
                const organization =  paramMap.get('name');
                if(organization) {
                    this.organizationsService.getOrganizationByName(organization).subscribe(res => {
                        if(res.status === 200 && res.body) {
                            if(tier) {
                                this.tierService.get(res.body?.id, tier).subscribe(res2 => {
                                    if(res2.status === 200) {
                                        this.tier = res2.body as Tier;
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
}
