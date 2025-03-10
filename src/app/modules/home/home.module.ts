import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {IndexComponent} from "@modules/home/index/index.component";
import {MatButtonModule} from "@angular/material/button";

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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
  ]
})
export class HomeModule {
}
