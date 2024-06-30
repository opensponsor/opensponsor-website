import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TierService} from "@services/tier/tier.service";
import {Tier} from "@app/interfaces/ApiInterface";

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
    ) {
        if(this.tierService.tier) {
            this.tier = this.tierService.tier;
        } else {
            // redirect start
        }
    }
}
