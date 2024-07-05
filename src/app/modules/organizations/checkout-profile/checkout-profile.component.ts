import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TierService} from "@services/tier/tier.service";
import {Organization, Tier} from "@app/interfaces/ApiInterface";
import {Platform} from "@angular/cdk/platform";
import {OrganizationsService} from "@services/organizations/organizations.service";

@Component({
  selector: 'app-checkout-profile',
  templateUrl: './checkout-profile.component.html',
  styleUrl: './checkout-profile.component.scss'
})
export class CheckoutProfileComponent {
    public tier: Tier | undefined;

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly tierService: TierService,
        private readonly platform: Platform,
    ) {
        if(this.platform.isBrowser) {
            this.activatedRoute.parent?.paramMap.subscribe(paramMap => {
                const tier = paramMap.get('tier');
                const organization = paramMap.get('name');
                if(this.tierService.tier()) {
                    this.tier = this.tierService.tier();
                } else {
                    // redirect start
                    this.tierService.redirectStart(paramMap).then()
                }
            })
        }
    }
}
