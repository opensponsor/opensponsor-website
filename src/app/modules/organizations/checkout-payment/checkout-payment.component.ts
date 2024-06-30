import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Tier} from "@app/interfaces/ApiInterface";
import {TierService} from "@services/tier/tier.service";

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrl: './checkout-payment.component.scss'
})
export class CheckoutPaymentComponent {
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
