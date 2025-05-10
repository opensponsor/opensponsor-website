import {afterNextRender, Component} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Tier} from "@app/interfaces/ApiInterface";
import {TierService} from "@services/tier/tier.service";
import {MatExpansionModule, MatExpansionPanel} from "@angular/material/expansion";
import {MatAnchor} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {CheckoutService} from "@services/checkout/checkout.service";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {FormsModule} from "@angular/forms";
import {PaymentMethod, PaymentMethodOptions} from "@app/constants/payment-method";

@Component({
  selector: 'os-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  imports: [
    MatExpansionModule,
    MatAnchor,
    MatIconModule,
    MatButtonToggleModule,
    FormsModule,
  ],
  styleUrl: './checkout-payment.component.scss'
})
export class CheckoutPaymentComponent {
  public tier: Tier | undefined;
  public paymentMethod: PaymentMethod = 'Alipay';
  public paymentMethodOptions = PaymentMethodOptions;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly tierService: TierService,
    public readonly checkoutService: CheckoutService,
  ) {
    afterNextRender(() => {
      if (this.tierService.tier()) {
        this.tier = this.tierService.tier();
      } else {
        // redirect start
        if (this.activatedRoute.parent?.snapshot?.paramMap) {
          this.tierService.redirectStep(this.activatedRoute.parent?.snapshot.paramMap as ParamMap, 'start').then()
        }
      }
    })
  }

  public toLink(to: 'summary') {
    this.tierService.redirectStep(this.activatedRoute.parent?.snapshot.paramMap as ParamMap, to).then();
  }

}
