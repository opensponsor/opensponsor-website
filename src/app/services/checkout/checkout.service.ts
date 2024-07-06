import {Injectable, signal} from '@angular/core';
import {toObservable} from "@angular/core/rxjs-interop";

@Injectable({
    providedIn: 'root'
})
export class CheckoutService {
    public stepDesc = signal<Record<'checkoutStart' | 'checkoutProfile' | 'checkoutSummary' | 'checkoutPayment' | string, string>>({
        checkoutStart: '',
        checkoutProfile: '',
        checkoutSummary: '',
        checkoutPayment: '',
    });

    public stepDesc$ = toObservable(this.stepDesc);

    constructor() {
    }
}
