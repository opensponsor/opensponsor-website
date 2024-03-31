import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import { IndexComponent } from "./index/index.component";
import { LayoutComponent } from './layout/layout.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { OrganizationsComponent } from './organizations/organizations.component';
import { ProfileComponent } from './profile/profile.component';
import { SocialComponent } from './social/social.component';
import { PaymentComponent } from './payment/payment.component';
import { DevelopmentComponent } from './development/development.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import { SecurityComponent } from './security/security.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: '', component: IndexComponent, pathMatch: 'full'},
            {path: 'organizations', component: OrganizationsComponent, pathMatch: 'full'},
            {path: 'profile', component: ProfileComponent, pathMatch: 'full'},
            {path: 'security', component: SecurityComponent, pathMatch: 'full'},
            {path: 'social', component: SocialComponent, pathMatch: 'full'},
            {path: 'payment', component: PaymentComponent, pathMatch: 'full'},
            {path: 'development', component: DevelopmentComponent, pathMatch: 'full'},
        ]
    }
];

@NgModule({
    declarations: [
        IndexComponent,
        LayoutComponent,
        OrganizationsComponent,
        ProfileComponent,
        SocialComponent,
        PaymentComponent,
        DevelopmentComponent,
        SecurityComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatButtonModule,
        MatExpansionModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCardModule
    ]
})
export class AccountModule {
}
