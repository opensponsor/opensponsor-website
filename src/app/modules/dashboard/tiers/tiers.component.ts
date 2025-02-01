import {Component} from '@angular/core';
import {Organization, Tier} from "@app/interfaces/ApiInterface";
import {DialogService} from "@services/dialog/dialog.service";
import {TierDialogComponent} from "@modules/dashboard/dialogs/tier-dialog/tier-dialog.component";
import {ActivatedRoute} from "@angular/router";
import {OrganizationsService} from "@services/organizations/organizations.service";
import {Platform} from "@angular/cdk/platform";
import {TierCardComponent} from "@app/components/tier-card/tier-card.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'os-tiers',
  templateUrl: './tiers.component.html',
  imports: [
    TierCardComponent,
    MatButtonModule,
    MatIconModule,
    NgForOf
  ],
  styleUrl: './tiers.component.scss'
})
export class TiersComponent {
  public organization: Partial<Organization> = {};

  constructor(
    private readonly dialogService: DialogService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly organizationsService: OrganizationsService,
    private readonly platform: Platform,
  ) {

    if (this.platform.isBrowser) {
      this.getOrg();
    }
  }

  private getOrg() {
    this.organizationsService.getOrganizationByName(this.activatedRoute.snapshot.paramMap.get("name") as string).subscribe((res) => {
      if (res.body) {
        this.organization = res.body;
      }
    })
  }

  public openDialog(tier?: Tier) {
    const ref = this.dialogService.open(TierDialogComponent, {
      disableClose: true,
      data: {org: this.organization, tier: tier}
    }).afterClosed().subscribe(res => {
      this.getOrg();
    })
  }
}
