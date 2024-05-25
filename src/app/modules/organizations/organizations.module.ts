import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfoComponent} from './info/info.component';
import {RouterModule, Routes} from "@angular/router";
import {MatButtonModule,} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import { IndexComponent } from './index/index.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {path: '', component: IndexComponent, pathMatch: 'full'},
            {path: ':name', component: InfoComponent, pathMatch: 'full'},
        ]
    },
];

@NgModule({
    declarations: [
        InfoComponent,
        IndexComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatCardModule,
    ],
})
export class OrganizationsModule {
}
