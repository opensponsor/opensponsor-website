import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfoComponent} from './info/info.component';
import {RouterModule, Routes} from "@angular/router";
import {CheckoutComponent} from './checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: InfoComponent, pathMatch: 'full'},
      {path: 'contribute/:tier/checkout', component: CheckoutComponent, pathMatch: 'full'},
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
