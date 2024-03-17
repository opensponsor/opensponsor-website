import {Component, Injectable, Optional} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";

@Injectable({
    providedIn: 'root'
})
export class SnackBarService {

    constructor(
        private matSnackBar: MatSnackBar
    ) {
    }

    public message(data: {
        message: string, action?: string, config?: MatSnackBarConfig
    }) {
        return this.matSnackBar.open(data.message, data.action || "ok", {
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'end',
            ...data.config
        })
    }
}
