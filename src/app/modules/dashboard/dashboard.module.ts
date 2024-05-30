import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from './layout/layout.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import { ProfileComponent } from './profile/profile.component';
import { TeamComponent } from './team/team.component';
import { SecurityComponent } from './security/security.component';
import { SocialComponent } from './social/social.component';
import { WebhookComponent } from './webhook/webhook.component';
import { PaymentComponent } from './payment/payment.component';
import { DevelopmentComponent } from './development/development.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TiersComponent } from './tiers/tiers.component';
import { TierDialogComponent } from './dialogs/tier-dialog/tier-dialog.component';
import {MatRipple, MatRippleModule} from "@angular/material/core";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSelectModule} from "@angular/material/select";
import {TierCardComponent} from "@app/components/tier-card/tier-card.component";
import {TranslatePipe} from "@app/pipes/translate/translate.pipe";
import {EnumeratedPipe} from "@app/pipes/enumerated/enumerated.pipe";
import { IndexComponent } from './index/index.component';
import { ContributorComponent } from './contributor/contributor.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: ':name', component: IndexComponent, pathMatch: 'full'},
            {path: ':name/profile', component: ProfileComponent, pathMatch: 'full'},
            {path: ':name/team', component: TeamComponent, pathMatch: 'full'},
            {path: ':name/tiers', component: TiersComponent, pathMatch: 'full'},

            {path: ':name/profile', component: ProfileComponent, pathMatch: 'full'},
            {path: ':name/contributor', component: ContributorComponent, pathMatch: 'full'},
            {path: ':name/security', component: SecurityComponent, pathMatch: 'full'},
            {path: ':name/social', component: SocialComponent, pathMatch: 'full'},
            {path: ':name/payment', component: PaymentComponent, pathMatch: 'full'},
            {path: ':name/development', component: DevelopmentComponent, pathMatch: 'full'},
            {path: ':name/webhook', component: WebhookComponent, pathMatch: 'full'},
        ]
    }
]

@NgModule({
    declarations: [
        LayoutComponent,
        ProfileComponent,
        TeamComponent,
        SecurityComponent,
        SocialComponent,
        WebhookComponent,
        PaymentComponent,
        DevelopmentComponent,
        TiersComponent,
        TierDialogComponent,
        IndexComponent,
        ContributorComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatExpansionModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        MatFormField,
        MatInput,
        MatLabel,
        ReactiveFormsModule,
        MatRippleModule,
        MatDialogModule,
        MatSlideToggleModule,
        FormsModule,
        MatSelectModule,
        TierCardComponent,
        TranslatePipe,
        EnumeratedPipe,
    ]
})
export class DashboardModule {
}
