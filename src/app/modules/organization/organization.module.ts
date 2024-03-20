import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfoComponent} from './info/info.component';
import {NewComponent} from './new/new.component';


@NgModule({
    declarations: [
        InfoComponent,
        NewComponent
    ],
    imports: [
        CommonModule
    ]
})
export class OrganizationModule {
}
