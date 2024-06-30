import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {OrganizationsService} from "@services/organizations/organizations.service";
import {Organization} from "@app/interfaces/ApiInterface";
import {Platform} from "@angular/cdk/platform";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit {
    public organizations: Organization[] = [];
    constructor(
        private readonly platform: Platform,
        private readonly organizationsService: OrganizationsService
    ) {

    }

    ngOnInit(): void {
        if(this.platform.isBrowser) {
            this.organizationsService.list().subscribe(res => {
                if(res.status === 200) {
                    this.organizations = res.body?.records || [];
                }
            })
        }
    }

}
