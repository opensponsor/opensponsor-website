import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfoComponent} from './info/info.component';
import {RouterModule, Routes} from "@angular/router";
import {MatButtonModule,} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {TierCardComponent} from "@app/components/tier-card/tier-card.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {path: '', component: InfoComponent, pathMatch: 'full'},
        ]
    },
];

@NgModule({
    declarations: [
        InfoComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatCardModule,
        TierCardComponent,
    ],
})
export class OrganizationsModule {
}
