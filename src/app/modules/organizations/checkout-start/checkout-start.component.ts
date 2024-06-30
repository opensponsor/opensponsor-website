import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TierService} from "@services/tier/tier.service";
import {Tier} from "@app/interfaces/ApiInterface";

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
    ) {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            const tier = paramMap.get('tier');
            const organization =  paramMap.get('name');
            if(tier && organization) {
                this.tierService.get(tier).subscribe(res => {
                    this.tier = res.body as Tier;
                });
            } else {
                // redirect to 404
            }
        })
    }
}
