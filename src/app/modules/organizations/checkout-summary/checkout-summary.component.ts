import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-checkout-summary',
  templateUrl: './checkout-summary.component.html',
  styleUrl: './checkout-summary.component.scss'
})
export class CheckoutSummaryComponent {
    constructor(
        private readonly activatedRoute: ActivatedRoute
    ) {
    }
}
