import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './index/index.component';
import {RouterModule, Routes} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {OrgCardComponent} from "@app/components/org-card/org-card.component";
import {MatPaginator} from "@angular/material/paginator";
import {PaginatorComponent} from "@app/components/paginator/paginator.component";
import {OrganizationSearchComponent} from "@app/components/organization-search/organization-search.component";

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
    OrgCardComponent,
    MatPaginator,
    PaginatorComponent,
    OrganizationSearchComponent,
  ]
})
export class ExploreModule {
}
