import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AlipayCallbackComponent} from "@modules/payment/alipay-callback/alipay-callback.component";
import {PaySuccessComponent} from "@modules/payment/pay-success/pay-success.component";
import {PayFailedComponent} from "@modules/payment/pay-failed/pay-failed.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'alipay-callback', component: AlipayCallbackComponent, pathMatch: 'full'},
      {path: 'pay-failed', component: PayFailedComponent, pathMatch: 'full'},
      {path: 'pay-success', component: PaySuccessComponent, pathMatch: 'full'},
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PaymentModule { }
