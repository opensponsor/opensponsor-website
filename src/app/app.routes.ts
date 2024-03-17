import {Routes} from '@angular/router';
import {FullWidthLayoutComponent} from "@app/layouts/full-width-layout/full-width-layout.component";
import {DefaultLayoutComponent} from "@app/layouts/default-layout/default-layout.component";

export const routes: Routes = [
    {
        path: '',
        component: FullWidthLayoutComponent,
        loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'account',
        component: DefaultLayoutComponent,
        loadChildren: () => import('@modules/account/account.module').then(m => m.AccountModule)
    },
];
