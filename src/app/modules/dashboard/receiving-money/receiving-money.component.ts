import { Component } from '@angular/core';
import {DialogService} from "@services/dialog/dialog.service";
import {DebitCardDialogComponent} from "@modules/dashboard/dialogs/debit-card-dialog/debit-card-dialog.component";
import {OrganizationsService} from "@services/organizations/organizations.service";
import {Organization} from "@app/interfaces/ApiInterface";
import {SnackBarService} from "@services/snack-bar/snack-bar.service";

@Component({
  selector: 'app-receiving-money',
  templateUrl: './receiving-money.component.html',
  styleUrl: './receiving-money.component.scss'
})
export class ReceivingMoneyComponent {
    constructor(
        private readonly dialogService: DialogService,
        public readonly organizationsService: OrganizationsService,
        public readonly snackBarService: SnackBarService,
    ) {
    }

    public openDialog() {
        this.dialogService.openXS(DebitCardDialogComponent, {
            disableClose: true,
            data: {debitCard: this.organizationsService?.organization?.debitCard},
        }).afterClosed().subscribe((res) => {
            if(res) {
                this.organizationsService.refresh();
                this.snackBarService.message({message: '已经保存'})
            }
        });
    }
}
