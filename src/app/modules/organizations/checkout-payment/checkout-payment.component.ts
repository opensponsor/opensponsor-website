import {Component} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Tier} from "@app/interfaces/ApiInterface";
import {TierService} from "@services/tier/tier.service";
import {MatExpansionModule, MatExpansionPanel} from "@angular/material/expansion";
import {MatAnchor} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  imports: [
    MatExpansionModule,
    MatAnchor,
    MatIconModule,
  ],
  styleUrl: './checkout-payment.component.scss'
})
export class CheckoutPaymentComponent {
  public tier: Tier | undefined;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly tierService: TierService,
  ) {
    if (this.tierService.tier()) {
      this.tier = this.tierService.tier();
    } else {
      // redirect start
      if (this.activatedRoute.parent?.snapshot?.paramMap) {
        this.tierService.redirectStep(this.activatedRoute.parent?.snapshot.paramMap as ParamMap, 'start').then()
      }
    }
  }

  public expandPanel(e: 'unionPay' | 'aliPay' | 'weChatPay') {
    console.dir(e);
  }

  public toLink(to: 'summary') {
    this.tierService.redirectStep(this.activatedRoute.parent?.snapshot.paramMap as ParamMap, to).then();
  }
}
