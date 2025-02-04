import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OrganizationsService} from "@services/organizations/organizations.service";
import {Platform} from "@angular/cdk/platform";
import {Organization} from "@app/interfaces/ApiInterface";
import {MatButtonModule} from "@angular/material/button";
import {TierCardComponent} from "@app/components/tier-card/tier-card.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'os-info',
  templateUrl: './info.component.html',
  imports: [
    MatButtonModule,
    TierCardComponent,
    NgForOf
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
    if (this.platform.isBrowser) {
      this.getOrg();
    }
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
