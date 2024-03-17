import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from "@modules/account/index/index.component";
import {RouterModule, Routes} from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        children: [
            {path: '', component: IndexComponent, pathMatch: 'full'},
        ]
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ]
})
export class AccountModule {
}
