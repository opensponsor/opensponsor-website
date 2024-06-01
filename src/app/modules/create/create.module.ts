import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './index/index.component';
import {OpenSourceCommunityComponent} from './open-source-community/open-source-community.component';
import {CommunityComponent} from './community/community.component';
import {FiscalHostComponent} from './fiscal-host/fiscal-host.component';
import {LayoutComponent} from './layout/layout.component';
import {MatAnchor, MatButton} from "@angular/material/button";
import {RouterLink, RouterModule, RouterOutlet, Routes} from "@angular/router";
import {OrganizationFormComponent} from "@app/forms/organization-form/organization-form.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: '', component: IndexComponent, pathMatch: 'full'},
            {path: 'community', component: CommunityComponent, pathMatch: 'full'},
            {path: 'fiscal-host', component: FiscalHostComponent, pathMatch: 'full'},
            {path: 'open-source-community', component: OpenSourceCommunityComponent, pathMatch: 'full'},
        ]
    },
];

@NgModule({
    declarations: [
        IndexComponent,
        OpenSourceCommunityComponent,
        CommunityComponent,
        FiscalHostComponent,
        LayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatButton,
        RouterOutlet,
        MatAnchor,
        RouterLink,
        OrganizationFormComponent
    ]
})
export class CreateModule {
}
