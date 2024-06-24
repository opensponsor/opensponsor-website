import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-checkout-profile',
  templateUrl: './checkout-profile.component.html',
  styleUrl: './checkout-profile.component.scss'
})
export class CheckoutProfileComponent {
    constructor(
        private readonly activatedRoute: ActivatedRoute
    ) {
    }
}
