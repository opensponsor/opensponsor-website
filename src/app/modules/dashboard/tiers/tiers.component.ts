import {AfterViewInit, Component} from '@angular/core';
import {Organization, Tier} from "@app/interfaces/ApiInterface";
import {DialogService} from "@services/dialog/dialog.service";
import {TierDialogComponent} from "@modules/dashboard/dialogs/tier-dialog/tier-dialog.component";
import {OrganizationsService} from "@services/organizations/organizations.service";
import {TierCardComponent} from "@app/components/tier-card/tier-card.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf} from "@angular/common";
import {MatRipple} from "@angular/material/core";

@Component({
  selector: 'os-tiers',
  templateUrl: './tiers.component.html',
  imports: [
    TierCardComponent,
    MatButtonModule,
    MatIconModule,
    NgForOf,
    MatRipple
  ],
  styleUrl: './tiers.component.scss'
})
export class TiersComponent implements AfterViewInit {
  public organization: Organization | undefined;

  constructor(
    private readonly dialogService: DialogService,
    private readonly organizationsService: OrganizationsService,
  ) {
  }

  ngAfterViewInit() {
    this.organizationsService.organization$.subscribe(org => this.organization = org);
  }

  public openDialog(tier?: Tier) {
    const ref = this.dialogService.open(TierDialogComponent, {
      disableClose: true,
      data: {org: this.organization, tier: tier}
    }).afterClosed().subscribe(res => {
      this.organizationsService.refresh();
    })
  }
}
