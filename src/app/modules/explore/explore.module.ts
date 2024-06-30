import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './index/index.component';
import {RouterModule, Routes} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {OrgCardComponent} from "@app/components/org-card/org-card.component";

const routes: Routes = [
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
        MatButtonModule,
        OrgCardComponent,
    ]
})
export class ExploreModule {
}
