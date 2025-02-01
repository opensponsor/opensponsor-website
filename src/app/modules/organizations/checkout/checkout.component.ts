import {afterNextRender, Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {CheckoutService} from "@services/checkout/checkout.service";
import {OrganizationsService} from "@services/organizations/organizations.service";
import {Organization} from "@app/interfaces/ApiInterface";
import {Platform} from "@angular/cdk/platform";
import {NgClass} from "@angular/common";
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'os-checkout',
  templateUrl: './checkout.component.html',
  imports: [
    NgClass,
    RouterOutlet,
    RouterLink,
    MatAnchor
  ],
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  public organization: Organization | undefined;

  public steps = [
    {label: '详细信息', desc: '', key: 'checkoutStart', completed: false},
    {label: '付款信息', desc: '', key: 'checkoutProfile', completed: false},
    {label: '摘要', desc: '', key: 'checkoutSummary', completed: false},
    {label: '付款', desc: '', key: 'checkoutPayment', completed: false},
  ];

  constructor(
    private readonly router: Router,
    private readonly platform: Platform,
    private readonly activatedRoute: ActivatedRoute,
    private readonly checkoutService: CheckoutService,
    private readonly organizationsService: OrganizationsService,
  ) {
    if (platform.isBrowser) {
      this.checkoutService.stepDesc$.subscribe(() => {
        this.setSteps();
      })
      this.router.events.subscribe((e) => {
        if (e instanceof NavigationEnd) {
          this.setSteps()
          this.organization = this.organizationsService.organization();
        }
      })
      this.organizationsService.organization$.subscribe(() => {
        this.organization = this.organizationsService.organization();
      })
    }
  }


  private setSteps() {
    for (const index in this.steps) {
      this.steps[index].completed = false;
      this.steps[index].desc = this.checkoutService.stepDesc()[this.steps[index].key];
    }

    this.activatedRoute.firstChild?.data.subscribe(value => {
      for (const key in this.steps) {
        this.steps[key].completed = true;
        if (this.steps[key].key === value['name']) {
          break;
        }
      }
    })
  }
}
