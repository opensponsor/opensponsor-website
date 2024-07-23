import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {OrganizationsService} from "@services/organizations/organizations.service";
import {Organization} from "@app/interfaces/ApiInterface";
import {Platform} from "@angular/cdk/platform";
import {HttpResult} from "@services/http/http.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit {
    public httpResult: HttpResult<Organization[]> | null = null;
    constructor(
        private readonly platform: Platform,
        private readonly organizationsService: OrganizationsService,
        private readonly activatedRoute: ActivatedRoute,
    ) {

    }

    ngOnInit(): void {
        if(this.platform.isBrowser) {
            this.subscribeSearch();
        }
    }

    private getList(filter?: Partial<Organization>) {
        this.organizationsService.list(filter).subscribe(res => {
            if(res.status === 200) {
                this.httpResult = res.body;
            }
        });
    }

    private subscribeSearch() {
        this.activatedRoute.queryParamMap.subscribe(params => {
            const w = params.get("w");
            if(w) {
                this.getList({name: w});
            } else {
                this.getList();
            }
        })
    }

}
