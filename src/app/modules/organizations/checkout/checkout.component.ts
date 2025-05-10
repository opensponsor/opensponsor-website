import {afterNextRender, Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {CheckoutService} from "@services/checkout/checkout.service";
import {OrganizationsService} from "@services/organizations/organizations.service";
import {Organization, Tier} from "@app/interfaces/ApiInterface";
import {MatAnchor, MatButton} from "@angular/material/button";
import {AuthService} from "@services/auth/auth.service";
import {TierService} from "@services/tier/tier.service";
import {MatIcon} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {enumTranslate} from "@app/languages/zh_cn/enumTranslate";
import {PaymentMethod, PaymentMethodOptions} from "@app/constants/payment-method";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {FormsModule} from "@angular/forms";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {MatExpansionModule, MatExpansionPanel} from "@angular/material/expansion";

@Component({
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
    MatExpansionModule
  ],
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  public organization: Organization | undefined;
  public tier: Tier | undefined;

  public paymentMethod: PaymentMethod = 'Alipay';
  public paymentMethodOptions = PaymentMethodOptions;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly checkoutService: CheckoutService,
    private readonly authService: AuthService,
    private readonly tierService: TierService,
    private readonly organizationsService: OrganizationsService,
  ) {
    afterNextRender(() => {
      this.initialize();
      this.authService.authInfo$.subscribe(user => {
        if(user) {
          this.authService.authInfo.set(user)
        } else {
          /*TODO goto login, or open login dialog*/
        }
      });
    })
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
              if (res.status === 200) {
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
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.organization = this.organizationsService.organization();
      }
    })
    this.organizationsService.organization$.subscribe((org) => this.organization = org)
  }

  public openPaymentSection(panel: MatExpansionPanel) {
    panel.open();
  }

  protected readonly enumTranslate = enumTranslate;
}
