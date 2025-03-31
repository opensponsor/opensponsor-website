import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from './layout/layout.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {ProfileComponent} from './profile/profile.component';
import {TeamComponent} from './team/team.component';
import {SecurityComponent} from './security/security.component';
import {SocialComponent} from './social/social.component';
import {WebhookComponent} from './webhook/webhook.component';
import {DevelopmentComponent} from './development/development.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TiersComponent} from './tiers/tiers.component';
import {MatRippleModule} from "@angular/material/core";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSelectModule} from "@angular/material/select";
import {TierCardComponent} from "@app/components/tier-card/tier-card.component";
import {TranslatePipe} from "@app/pipes/translate/translate.pipe";
import {EnumeratedPipe} from "@app/pipes/enumerated/enumerated.pipe";
import {IndexComponent} from './index/index.component';
import {ContributorComponent} from './contributor/contributor.component';
import {OrganizationFormComponent} from "@app/forms/organization-form/organization-form.component";
import {SendingMoneyComponent} from './sending-money/sending-money.component';
import {ReceivingMoneyComponent} from './receiving-money/receiving-money.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', component: IndexComponent, pathMatch: 'full'},
      {path: ':slug', component: IndexComponent, pathMatch: 'full'},
      {path: ':slug/profile', component: ProfileComponent, pathMatch: 'full'},
      {path: ':slug/team', component: TeamComponent, pathMatch: 'full'},
      {path: ':slug/tiers', component: TiersComponent, pathMatch: 'full'},
      {path: ':slug/contributor', component: ContributorComponent, pathMatch: 'full'},
      {path: ':slug/security', component: SecurityComponent, pathMatch: 'full'},
      {path: ':slug/social', component: SocialComponent, pathMatch: 'full'},
      {path: ':slug/sending-money', component: SendingMoneyComponent, pathMatch: 'full'},
      {path: ':slug/receiving-money', component: ReceivingMoneyComponent, pathMatch: 'full'},
      {path: ':slug/development', component: DevelopmentComponent, pathMatch: 'full'},
      {path: ':slug/webhook', component: WebhookComponent, pathMatch: 'full'},
    ]
  },
]

@NgModule({
  declarations: [
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
    OrganizationFormComponent,
  ]
})
export class DashboardModule {
}
