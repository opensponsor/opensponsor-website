import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting/setting.component';
import {Routes} from "@angular/router";
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: ':name', component: SettingComponent, pathMatch: 'full'},
        ]
    }
]

@NgModule({
  declarations: [
    SettingComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
