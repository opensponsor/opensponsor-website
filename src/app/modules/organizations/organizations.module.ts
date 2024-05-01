import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfoComponent} from './info/info.component';
import {NewComponent} from './new/new.component';
import {RouterModule, Routes} from "@angular/router";
import {
    MatAnchor,
    MatButton,
    MatButtonModule,
    MatFabButton,
    MatIconButton,
    MatMiniFabButton
} from "@angular/material/button";
import {MatDivider, MatDividerModule} from "@angular/material/divider";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatCard, MatCardContent, MatCardModule} from "@angular/material/card";
import { CommunityComponent } from './community/community.component';
import { OpenSourceCommunityComponent } from './open-source-community/open-source-community.component';
import { FiscalHostComponent } from './fiscal-host/fiscal-host.component';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import {FormComponent} from "@modules/organizations/form/form.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {path: '', component: IndexComponent, pathMatch: 'full'},
            {path: 'new', component: NewComponent, pathMatch: 'full'},
            {path: 'create', component: CreateComponent, pathMatch: 'full'},
            {path: 'create/open-source', component: OpenSourceCommunityComponent, pathMatch: 'full'},
            {path: 'create/community', component: CommunityComponent, pathMatch: 'full'},
            {path: 'create/fiscal-host', component: FiscalHostComponent, pathMatch: 'full'},
            {path: ':id', component: InfoComponent, pathMatch: 'full'},
        ]
    }
];

@NgModule({
    declarations: [
        InfoComponent,
        NewComponent,
        CommunityComponent,
        OpenSourceCommunityComponent,
        FiscalHostComponent,
        CreateComponent,
        IndexComponent
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
        FormComponent
    ]
})
export class OrganizationsModule {
}
