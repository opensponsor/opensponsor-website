import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfoComponent} from './info/info.component';
import {RouterModule, Routes} from "@angular/router";
import {CheckoutComponent} from './checkout/checkout.component';
import {authGuard} from "@app/utils/auth-guard";
import {SelectTypeComponent} from "./accept-financial-contributions/select-type/select-type.component";
import {HostComponent} from "./accept-financial-contributions/host/host.component";
import {OurselvesComponent} from "./accept-financial-contributions/ourselves/ourselves.component";
import {LayoutComponent} from "./accept-financial-contributions/layout/layout.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: InfoComponent, pathMatch: 'full'},
      {
        path: 'contribute/:tier/checkout',
        component: CheckoutComponent,
        pathMatch: 'full',
        canActivate: [authGuard]
      },
      {
        path: 'accept-financial-contributions',
        component: LayoutComponent,
        canActivate: [authGuard],
        children: [
          {path: '', component: SelectTypeComponent, pathMatch: 'full'},
          {path: 'host', component: HostComponent, pathMatch: 'full'},
          {path: 'ourselves', component: OurselvesComponent, pathMatch: 'full'},
        ]
      },
    ]
  },
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class OrganizationsModule {
}
