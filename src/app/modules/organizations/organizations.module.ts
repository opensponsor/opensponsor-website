import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfoComponent} from './info/info.component';
import {NewComponent} from './new/new.component';
import {RouterModule, Routes} from "@angular/router";
import {MatButtonModule,} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import { CommunityComponent } from './community/community.component';
import { OpenSourceCommunityComponent } from './open-source-community/open-source-community.component';
import { FiscalHostComponent } from './fiscal-host/fiscal-host.component';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { CreateLayoutComponent } from './create-layout/create-layout.component';
import {FormComponent} from "@modules/organizations/form/form.component";
import {MatAutocompleteModule} from "@angular/material/autocomplete";

const routes: Routes = [
    {
        path: '',
        children: [
            {path: '', component: IndexComponent, pathMatch: 'full'},
            {path: 'new', component: NewComponent, pathMatch: 'full'},
            {path: 'create', component: CreateComponent, pathMatch: 'full'},
            // {path: 'create/open-source', component: OpenSourceCommunityComponent, pathMatch: 'full'},
            // {path: 'create/community', component: CommunityComponent, pathMatch: 'full'},
            // {path: 'create/fiscal-host', component: FiscalHostComponent, pathMatch: 'full'},
            {path: ':id', component: InfoComponent, pathMatch: 'full'},
        ]
    },
    {
        path: '',
        component: CreateLayoutComponent,
        children: [
            {path: 'create/open-source', component: OpenSourceCommunityComponent, pathMatch: 'full'},
            {path: 'create/community', component: CommunityComponent, pathMatch: 'full'},
            {path: 'create/fiscal-host', component: FiscalHostComponent, pathMatch: 'full'},
        ]
    },
];

@NgModule({
    declarations: [
        InfoComponent,
        NewComponent,
        CommunityComponent,
        OpenSourceCommunityComponent,
        FiscalHostComponent,
        CreateComponent,
        IndexComponent,
        CreateLayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCardModule,
        FormComponent,
    ],
})
export class OrganizationsModule {
}
