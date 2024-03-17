import {Injectable} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ComponentType} from "@angular/cdk/overlay";
import {AlertComponent} from "@app/dialogs/alert/alert.component";
import {AlertOptions} from "@app/interfaces";
import {ConfirmComponent} from "@app/dialogs/confirm/confirm.component";
import {ConfirmOptions} from "@app/interfaces/ConfirmOptions";


@Injectable({
    providedIn: 'root'
})
export class DialogService {

    constructor(private dialog: MatDialog) {
    }

    private defaultConfig: MatDialogConfig = {
        width: "60vw",
    }

    public open<T, R>(component: ComponentType<any>, config?: MatDialogConfig) {
        return this.dialog.open(component, {
            ...this.defaultConfig,
            ...config,
        });
    }

    public openXS<T, R>(component: ComponentType<any>, config: MatDialogConfig) {
        return this.open<T, R>(component, {...{width: "30vw"}, ...config});
    }

    public openMD<T, R>(component: ComponentType<any>, config: MatDialogConfig) {
        return this.open<T, R>(component, {...{width: "60vw"}, ...config});
    }

    public openLG<T, R>(component: ComponentType<any>, config: MatDialogConfig) {
        return this.open<T, R>(component, {...{width: "80vw"}, ...config});
    }

    public alert(alertOptions: AlertOptions) {
        return this.openXS(AlertComponent, {data: alertOptions, disableClose: true});
    }

    public confirm(confirmOptions: ConfirmOptions) {
        return this.openXS(ConfirmComponent, {data: confirmOptions, disableClose: true});
    }

}
