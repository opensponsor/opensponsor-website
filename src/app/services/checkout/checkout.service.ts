import {Injectable, signal} from '@angular/core';
import {toObservable} from "@angular/core/rxjs-interop";
import {Organization, Tier, User} from "@app/interfaces/ApiInterface";

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

  public tierCache = signal<{
    start?: Tier,
    profile?: { type: 'user' | 'org'; profile: User | Organization },
    payment?: string,
  }>({});

  constructor() {
  }
}
