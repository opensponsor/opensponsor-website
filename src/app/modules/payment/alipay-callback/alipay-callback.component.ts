import { Component } from '@angular/core';
import {Platform} from "@angular/cdk/platform";
import {PaymentService} from "@services/payment/payment.service";
import {Router} from "@angular/router";
import {HttpStatusCode} from "@angular/common/http";

@Component({
  standalone: true,
  selector: 'os-alipay-callback',
  imports: [],
  templateUrl: './alipay-callback.component.html',
  styleUrl: './alipay-callback.component.scss'
})
export class AlipayCallbackComponent {
  constructor(
    private readonly platform: Platform,
    private readonly router: Router,
    private readonly paymentService: PaymentService,
  ) {
    if(this.platform.isBrowser) {
      const data: Record<string, string> = {};
      [...new URLSearchParams(location.href)].forEach(item => data[item[0]] = item[1]);

      this.paymentService.queryAlipayOrderStatus(data).subscribe(res => {
        if(res.body?.code === HttpStatusCode.Ok && res.body.data?.payStatus) {
          this.router.navigateByUrl("/payment/pay-success").then();
        } else {
          this.router.navigateByUrl("/payment/pay-failed").then();
        }
      });
    }
  }
}
