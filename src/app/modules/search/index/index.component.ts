import {Component, OnInit} from '@angular/core';
import {OrganizationsService} from "@services/organizations/organizations.service";
import {Organization} from "@app/interfaces/ApiInterface";
import {Platform} from "@angular/cdk/platform";
import {HttpResultOfArray} from "@services/http/http.service";
import {ActivatedRoute} from "@angular/router";
import {OrgCardComponent} from "@app/components/org-card/org-card.component";
import {OrganizationSearchComponent} from "@app/components/organization-search/organization-search.component";
import {PaginatorComponent} from "@app/components/paginator/paginator.component";
import {EmptyStatesComponent} from "@app/components/empty-states/empty-states.component";
import {HttpStatusCode} from "@angular/common/http";

@Component({
  standalone: true,
  selector: 'os-index',
  templateUrl: './index.component.html',
  imports: [
    OrgCardComponent,
    OrganizationSearchComponent,
    PaginatorComponent,
    EmptyStatesComponent,
  ],
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit {
  public httpResult: HttpResultOfArray<Organization[]> | null = null;
  public loading = false;


  constructor(
    private readonly platform: Platform,
    private readonly organizationsService: OrganizationsService,
    private readonly activatedRoute: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    if (this.platform.isBrowser) {
      this.subscribeSearch();
    }
  }

  private getList(filter?: Partial<Organization>) {
    this.loading = true;
    this.organizationsService.list(filter).subscribe({
      next: res => {
        this.loading = false;
        if (res.status === HttpStatusCode.Ok) {
          this.httpResult = res.body;
        }
      },
      error: err => {}
    });
  }

  private subscribeSearch() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      const w = params.get("w");
      if (w) {
        this.getList({name: w});
      } else {
        this.getList();
      }
    })
  }

}
