import {AfterViewInit, Component} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {OrganizationsService} from "@services/organizations/organizations.service";
import {Organization, Tier, TradeStateEnum} from "@app/interfaces/ApiInterface";
import {MatAnchor, MatButton} from "@angular/material/button";
import {TierService} from "@services/tier/tier.service";
import {MatIcon} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {enumTranslate} from "@app/languages/zh_cn/enumTranslate";
import {PaymentMethod, PaymentMethodOptions} from "@app/constants/payment-method";
import {MatButtonToggleChange, MatButtonToggleModule} from "@angular/material/button-toggle";
import {FormsModule} from "@angular/forms";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {MatExpansionModule, MatExpansionPanel} from "@angular/material/expansion";
import {PaymentService} from "@services/payment/payment.service";
import {DialogService} from "@services/dialog/dialog.service";
import {QrcodeComponent} from "@app/components/qrcode/qrcode.component";
import {AuthService} from "@services/auth/auth.service";
import {HttpStatusCode} from "@angular/common/http";
import {SkeletonComponent} from "@app/components/skeleton/skeleton.component";

@Component({
  standalone: true,
  selector: 'os-checkout',
  templateUrl: './checkout.component.html',
  imports: [
    RouterLink,
    MatAnchor,
    MatIcon,
    MatCardModule,
    MatButtonToggleModule,
    FormsModule,
    NgOptimizedImage,
    NgClass,
    MatButton,
    MatExpansionModule,
    QrcodeComponent,
    SkeletonComponent,
  ],
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements AfterViewInit {
  public organization: Organization | undefined;
  public tier: Tier | undefined;
  public wechatPayUrl: string | undefined;


  public paymentMethod: PaymentMethod = 'Alipay';
  public paymentMethodOptions = PaymentMethodOptions;

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly tierService: TierService,
    private readonly organizationsService: OrganizationsService,
    private readonly paymentService: PaymentService,
    private readonly dialogService: DialogService,
  ) {
  }

  ngAfterViewInit() {
    this.initialize();
    this.authService.authInfo$.subscribe(user => {
      if(user) {
        this.authService.authInfo.set(user)
      } else {
        /*TODO goto login, or open login dialog*/
      }
    });
  }

  private initialize(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const slug = paramMap.get('slug');
      const tier = paramMap.get('tier');
      if(slug && tier) {
        this.organizationsService.getOrganizationBySlug(slug).subscribe(res => {
          const org = res.body?.data;
          if(org) {
            this.organizationsService.organization.set(org);

            this.tierService.get(org.id, tier).subscribe(res => {
              if (res.status === HttpStatusCode.Ok) {
                this.tier = res.body?.data;
                this.tierService.tier.set(this.tier);
              }
            });
          } else {
            this.router.navigateByUrl('/not-found').then();
          }
        });
      } else {
        // error
        this.router.navigateByUrl('/not-found').then();
      }
    })
    this.organizationsService.organization$.subscribe((org) => this.organization = org)
  }

  private checkWechatPayStatus(outTradeNo: string) {
    this.paymentService.queryWechatOrderStatus(outTradeNo).subscribe((res) => {
      if(res.body?.data === TradeStateEnum.SUCCESS) {
        alert(res.body?.data)
      } else {
        setTimeout(() => {
          this.checkWechatPayStatus(outTradeNo);
        }, 3000);
      }
    });
  }

  public openPaymentSection(panel: MatExpansionPanel) {
    panel.open();
  }

  public paymentChange(e: MatButtonToggleChange) {
    console.dir(e.value === 'WechatPay' && this.tier && !this.wechatPayUrl)
    if(e.value === 'WechatPay' && this.tier && !this.wechatPayUrl) {
      this.paymentService.getWechatScheme(this.tier).subscribe(res => {
        if(res.body?.data) {
          this.wechatPayUrl = res.body.data.codeUrl;
          this.checkWechatPayStatus(res.body.data.outTradeNo);
        } else {
          // TODO Has Error
        }
      });
    }
  }

  // http://localhost:4200/payment/alipay-callback?charset=UTF-8&out_trade_no=2025629716550009329527039907489&method=alipay.trade.page.pay.return&total_amount=100.00&sign=Eyu7fPnH73klIngxXuineAPprhq5GEGrIzg9D41Ahjm%2B09QNvCJQn%2BlMA5TvSQpL%2FQ7EkPhY34VVD3YFaSWbO34ErZHhh0mnQqISbrolRj3jMtM5W4BNIunZrEVh%2FCLQwOGx6bYu19Q6xpWLKVCtFOye7bceRQPBnjtsSWWiirj%2BWW0nD9QLwxXPjCCM3%2BW%2Fft%2FKMNWoIGafwukORHLuJjSA196x%2B9q48a645z%2FUm6XdM6H1daHRPd5yK55yRb0BDxnpcJYOBB%2B1UpAsW4acft%2FT0V57v1fEHu3HvOuPKPoDJSV%2FwnO7UkC8n%2F%2BwW0JoYj9OniGUjkStd5TeWlTf2w%3D%3D&trade_no=2025060222001429231418105298&auth_app_id=2021004192686216&version=1.0&app_id=2021004192686216&sign_type=RSA2&seller_id=2088941653694599&timestamp=2025-06-02+12%3A09%3A10
  public useAlipay() {
    this.paymentService.getAlipayForm(this.tier!).subscribe(res => {
      if(res.status === HttpStatusCode.Ok) {
        const div = document.createElement('div')
        document.body.append(div);
        div.innerHTML = res.body?.data as string;
        div.querySelector('form')?.setAttribute('target', '_blank');
        div.querySelector('form')?.submit();
        this.dialogService.confirm({title: '是否已经支付完成?', confirmText: '支付完成', cancelText: '支付遇到问题？'}).afterClosed().subscribe(result => {
          alert(result);
        })
      }
    });
  }

  protected readonly enumTranslate = enumTranslate;
}
