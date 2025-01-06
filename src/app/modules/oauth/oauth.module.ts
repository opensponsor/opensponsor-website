import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GithubComponent} from "@modules/oauth/github/github.component";
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'github', component: GithubComponent, pathMatch: 'full'},
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
export class OauthModule { }
