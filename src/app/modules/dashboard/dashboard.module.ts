import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingComponent} from './setting/setting.component';
import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from './layout/layout.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import { ProfileComponent } from './profile/profile.component';
import { TeamComponent } from './team/team.component';
import { SecurityComponent } from './security/security.component';
import { SocialComponent } from './social/social.component';
import { WebhookComponent } from './webhook/webhook.component';
import { PaymentComponent } from './payment/payment.component';
import { GradeComponent } from './grade/grade.component';
import { DevelopmentComponent } from './development/development.component';
import {MatButton, MatButtonModule} from "@angular/material/button";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: ':name', component: SettingComponent, pathMatch: 'full'},
            {path: ':name/profile', component: ProfileComponent, pathMatch: 'full'},
            {path: ':name/team', component: TeamComponent, pathMatch: 'full'},
            {path: ':name/grade', component: GradeComponent, pathMatch: 'full'},
            {path: ':name/grade', component: GradeComponent, pathMatch: 'full'},

            {path: ':name/profile', component: ProfileComponent, pathMatch: 'full'},
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
        SettingComponent,
        LayoutComponent,
        ProfileComponent,
        TeamComponent,
        SecurityComponent,
        SocialComponent,
        WebhookComponent,
        PaymentComponent,
        GradeComponent,
        DevelopmentComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatExpansionModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
    ]
})
export class DashboardModule {
}
