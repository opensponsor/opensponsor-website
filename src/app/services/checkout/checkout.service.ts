import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CheckoutService {
    public stepDesc: Record<'checkoutStart' | 'checkoutProfile' | 'checkoutSummary' | 'checkoutPayment' | string, string> = {
        checkoutStart: '',
        checkoutProfile: '',
        checkoutSummary: '',
        checkoutPayment: '',
    };

    constructor() {
    }
}
