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

const routes: Routes = [
    {
        path: '',
        children: [
            {path: 'new', component: NewComponent, pathMatch: 'full'},
            {path: ':id', component: InfoComponent, pathMatch: 'full'},
        ]
    }
];

@NgModule({
    declarations: [
        InfoComponent,
        NewComponent
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
        MatCardModule
    ]
})
export class OrganizationsModule {
}
