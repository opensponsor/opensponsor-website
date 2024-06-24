import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TierService} from "@services/tier/tier.service";

@Component({
  selector: 'app-checkout-start',
  templateUrl: './checkout-start.component.html',
  styleUrl: './checkout-start.component.scss'
})
export class CheckoutStartComponent {
    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly tierService: TierService,
    ) {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            const tier = paramMap.get('tier');
            const organization =  paramMap.get('name');
            if(tier && organization) {
                this.tierService.create;
            } else {
                // redirect to 404
            }
        })
    }
}
