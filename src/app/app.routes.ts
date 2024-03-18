import {Routes} from '@angular/router';
import {FullWidthLayoutComponent} from "@app/layouts/full-width-layout/full-width-layout.component";
import {DefaultLayoutComponent} from "@app/layouts/default-layout/default-layout.component";
import {PureLayoutComponent} from "@app/layouts/pure-layout/pure-layout.component";

export const routes: Routes = [
    {
        path: '',
        component: DefaultLayoutComponent,
        loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'account',
        component: PureLayoutComponent,
        loadChildren: () => import('@modules/account/account.module').then(m => m.AccountModule)
    },
];
