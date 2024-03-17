import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {IndexComponent} from "@modules/home/index/index.component";
import {MatButton} from "@angular/material/button";

export const routes: Routes = [
    {
        path: '',
        children: [
            {path: '', component: IndexComponent, pathMatch: 'full'},
        ]
    }
];

@NgModule({
    declarations: [
        IndexComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatButton,
    ]
})
export class HomeModule {
}
