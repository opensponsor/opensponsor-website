import {afterNextRender, Component} from '@angular/core';
import {UUID} from "@app/interfaces/ApiInterface";
import {DialogService} from "@services/dialog/dialog.service";
import {TierDialogComponent} from "@modules/dashboard/dialogs/tier-dialog/tier-dialog.component";

@Component({
  selector: 'app-tiers',
  templateUrl: './tiers.component.html',
  styleUrl: './tiers.component.scss'
})
export class TiersComponent {
    public data = {a: 100};
    constructor(
        private readonly dialogService: DialogService
    ) {
    }

    public openDialog(id?: UUID) {
        const ref = this.dialogService.open(TierDialogComponent, {
            disableClose: true,
            data: this.data
        }).afterClosed().subscribe(res => {
            console.dir(res);
        })
    }
}
