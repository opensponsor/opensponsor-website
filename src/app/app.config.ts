import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from "@angular/material/dialog";
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideClientHydration(),
        provideAnimationsAsync(),
        provideHttpClient(withFetch()),
        // importProvidersFrom([
        //     BrowserModule,
        //     BrowserAnimationsModule,
        //     MatSnackBarModule,
        //     MatDialogModule,
        //     MatNativeDateModule,
        //     // common modules end
        //     MatButtonModule,
        // ]),
    ]
};
