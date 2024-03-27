import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfoComponent} from './info/info.component';
import {NewComponent} from './new/new.component';
import {RouterModule, Routes} from "@angular/router";

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
    ]
})
export class OrganizationsModule {
}
