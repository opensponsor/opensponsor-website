import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import { IndexComponent } from "./index/index.component";
import { LayoutComponent } from './layout/layout.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatList, MatListModule} from "@angular/material/list";

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: '', component: IndexComponent, pathMatch: 'full'},
        ]
    }
];

@NgModule({
    declarations: [
        IndexComponent,
        LayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatButtonModule,
        MatExpansionModule,
        MatListModule
    ]
})
export class AccountModule {
}
