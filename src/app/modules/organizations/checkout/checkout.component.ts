import { Component } from '@angular/core';
import {ActivatedRoute, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
    public steps = [
        {label: '详细信息', key: 'checkoutStart', completed: false},
        {label: '付款信息', key: 'checkoutProfile', completed: false},
        {label: '摘要', key: 'checkoutSummary', completed: false},
        {label: '付款', key: 'checkoutPayment', completed: false},
    ];

    constructor(
        private readonly activatedRoute: ActivatedRoute
    ) {
        this.activatedRoute.firstChild?.data.subscribe(value => {
            for (const key in this.steps) {
                this.steps[key].completed = true;
                if(this.steps[key].key === value['name']) {
                    break;
                }
            }
        })
    }
}
