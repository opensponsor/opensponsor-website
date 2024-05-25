import {afterNextRender, Component} from '@angular/core';
import {Organization, UUID} from "@app/interfaces/ApiInterface";
import {DialogService} from "@services/dialog/dialog.service";
import {TierDialogComponent} from "@modules/dashboard/dialogs/tier-dialog/tier-dialog.component";
import {ActivatedRoute} from "@angular/router";
import {OrganizationsService} from "@services/organizations/organizations.service";
import {Platform} from "@angular/cdk/platform";

@Component({
  selector: 'app-tiers',
  templateUrl: './tiers.component.html',
  styleUrl: './tiers.component.scss'
})
export class TiersComponent {
    public organization: Organization = {};
    constructor(
        private readonly dialogService: DialogService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly organizationsService: OrganizationsService,
        private readonly platform: Platform,
    ) {
        if(platform.isBrowser) {
            this.getOrg();
        }
    }

    private getOrg() {
        this.organizationsService.getOrganizationByName(this.activatedRoute.snapshot.paramMap.get("name") as string).subscribe((res) => {
            if(res.body) {
                this.organization = res.body;
            }
        })
    }

    public openDialog(id?: UUID) {
        const ref = this.dialogService.open(TierDialogComponent, {
            disableClose: true,
            data: this.organization
        }).afterClosed().subscribe(res => {
            this.getOrg();
        })
    }
}
