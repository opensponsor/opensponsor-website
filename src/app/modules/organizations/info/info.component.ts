import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OrganizationsService} from "@services/organizations/organizations.service";
import {Platform} from "@angular/cdk/platform";
import {E_ORGANIZATION_TYPE, Organization} from "@app/interfaces/ApiInterface";
import {MatButtonModule} from "@angular/material/button";
import {TierCardComponent} from "@app/components/tier-card/tier-card.component";
import Swiper from "swiper";
import {Scrollbar, FreeMode, Mousewheel} from "swiper/modules";
import {MatTabsModule} from "@angular/material/tabs";
import {MatListModule} from "@angular/material/list";
import {BudgetComponent} from "../components/budget/budget.component";
import {ContributorsComponent} from "../components/contributors/contributors.component";
import {ContributorsListComponent} from "../components/contributors-list/contributors-list.component";
import {NewsComponent} from "../components/news/news.component";
import {TeamComponent} from "../components/team/team.component";
import {HeroComponent} from "../components/hero/hero.component";

@Component({
  standalone: true,
  selector: 'os-info',
  templateUrl: './info.component.html',
  imports: [
    MatButtonModule,
    TierCardComponent,
    MatTabsModule,
    MatListModule,
    BudgetComponent,
    ContributorsComponent,
    ContributorsListComponent,
    NewsComponent,
    TeamComponent,
    HeroComponent,
  ],
  styleUrl: './info.component.scss'
})
export class InfoComponent {
  public organization: Organization | undefined;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly organizationsService: OrganizationsService,
    private readonly platform: Platform,
  ) {
    if(this.platform.isBrowser) {
      this.getOrg();
    }
  }

  private initialSwiper() {
    new Swiper("#tier-list", {
      mousewheel: {
        enabled: true,
        forceToAxis: true,
      },
      spaceBetween: 10,
      freeMode: true,
      modules: [Scrollbar, FreeMode, Mousewheel],
      slidesPerView: 'auto',
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
    });
  }

  private getOrg() {
    const slug = this.activatedRoute.snapshot.paramMap.get("slug") as string;
    this.organizationsService.getOrganizationBySlug(slug).subscribe({
      next: (res) => {
        if (res.body) {
          this.organization = res.body.data;
          this.initialSwiper();
        }
      },
      error: err => {
        this.router.navigateByUrl("/not-found").then();
      }
    })
  }

  protected readonly E_ORGANIZATION_TYPE = E_ORGANIZATION_TYPE;
}
