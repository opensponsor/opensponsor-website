import {afterNextRender, Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OrganizationsService} from "@services/organizations/organizations.service";
import {Platform} from "@angular/cdk/platform";
import {Organization} from "@app/interfaces/ApiInterface";
import {MatButtonModule} from "@angular/material/button";
import {TierCardComponent} from "@app/components/tier-card/tier-card.component";
import {NgForOf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatChip, MatChipGrid} from "@angular/material/chips";
import Swiper from "swiper";
import {Scrollbar, FreeMode, Mousewheel} from "swiper/modules";

@Component({
  selector: 'os-info',
  templateUrl: './info.component.html',
  imports: [
    MatButtonModule,
    TierCardComponent,
    NgForOf,
    MatIcon,
    MatChipGrid,
    MatChip,
  ],
  styleUrl: './info.component.scss'
})
export class InfoComponent {
  public organization: Partial<Organization> = {};

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly organizationsService: OrganizationsService,
    private readonly platform: Platform,
  ) {
    afterNextRender({
      read: () => {
        this.getOrg();
        this.initialSwiper()
      }
    });
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
    this.organizationsService.getOrganizationByName(slug).subscribe({
      next: (res) => {
        if (res.body) {
          this.organization = res.body.data;
        }
      },
      error: err => {
        this.router.navigateByUrl("/not-found").then();
      }
    })
  }
}
