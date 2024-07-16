import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfoComponent} from './info/info.component';
import {RouterModule, Routes} from "@angular/router";
import {MatButtonModule,} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {TierCardComponent} from "@app/components/tier-card/tier-card.component";
import { ContributeComponent } from './contribute/contribute.component';

import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutStartComponent } from './checkout-start/checkout-start.component';
import { CheckoutProfileComponent } from './checkout-profile/checkout-profile.component';
import { CheckoutSummaryComponent } from './checkout-summary/checkout-summary.component';
import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';
import {MatSelectModule} from "@angular/material/select";
import {MatExpansionModule, MatExpansionPanel, MatExpansionPanelTitle} from "@angular/material/expansion";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInput, MatInputModule} from "@angular/material/input";

const routes: Routes = [
    {
        path: '',
        children: [
            {path: '', component: InfoComponent, pathMatch: 'full'},
            {path: 'contribute', component: ContributeComponent, pathMatch: 'full'},
            {
                path: 'contribute/:tier/checkout', component: CheckoutComponent,
                children: [
                    {path: '', component: CheckoutStartComponent, pathMatch: 'full', data: {name: 'checkoutStart'}},
                    {path: 'profile', component: CheckoutProfileComponent, pathMatch: 'full', data: {name: 'checkoutProfile'}},
                    {path: 'summary', component: CheckoutSummaryComponent, pathMatch: 'full', data: {name: 'checkoutSummary'}},
                    {path: 'payment', component: CheckoutPaymentComponent, pathMatch: 'full', data: {name: 'checkoutPayment'}},
                ]
            },
        ]
    },
];

@NgModule({
    declarations: [
        InfoComponent,
        ContributeComponent,
        CheckoutComponent,
        CheckoutStartComponent,
        CheckoutProfileComponent,
        CheckoutSummaryComponent,
        CheckoutPaymentComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatSelectModule,
        MatCardModule,
        TierCardComponent,
        ReactiveFormsModule,
        MatInputModule,
    ],
})
export class OrganizationsModule {
}
