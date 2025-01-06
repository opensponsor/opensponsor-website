import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './index/index.component';
import {OpenSourceCommunityComponent} from './open-source-community/open-source-community.component';
import {ApplyForGithubComponent} from './apply-for-github/apply-for-github.component';
import {FormComponent} from './form/form.component';
import {CommunityComponent} from './community/community.component';
import {LayoutComponent} from './layout/layout.component';
import {MatAnchor, MatButton} from "@angular/material/button";
import {RouterLink, RouterModule, RouterOutlet, Routes} from "@angular/router";
import {OrganizationFormComponent} from "@app/forms/organization-form/organization-form.component";
import {OrganizationsComponent} from "@modules/create/organizations/organizations.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', component: IndexComponent, pathMatch: 'full'},
      {path: 'community', component: CommunityComponent, pathMatch: 'full'},
      {path: "organizations", component: OrganizationsComponent, pathMatch: 'full'},
      {path: 'opensource-community', component: OpenSourceCommunityComponent, pathMatch: 'full'},
      {path: 'opensource-community/apply/github', component: ApplyForGithubComponent, pathMatch: 'full'},
      {path: 'opensource-community/apply/form', component: FormComponent, pathMatch: 'full'},
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButton,
    RouterOutlet,
    MatAnchor,
    RouterLink,
    OrganizationFormComponent
  ]
})
export class CreateModule {
}
