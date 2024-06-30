import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Tier} from "@app/interfaces/ApiInterface";
import {TierService} from "@services/tier/tier.service";

@Component({
  selector: 'app-checkout-summary',
  templateUrl: './checkout-summary.component.html',
  styleUrl: './checkout-summary.component.scss'
})
export class CheckoutSummaryComponent {
    public tier: Tier | undefined;

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly tierService: TierService,
    ) {
        if(this.tierService.tier) {
            this.tier = this.tierService.tier;
        } else {
            // redirect start
        }
    }
}
