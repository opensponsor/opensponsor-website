import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OrganizationsService} from "@services/organizations/organizations.service";
import {Platform} from "@angular/cdk/platform";
import {Organization} from "@app/interfaces/ApiInterface";

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrl: './info.component.scss'
})
export class InfoComponent {
    public organization: Partial<Organization> = {};

    constructor(
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute,
        private readonly organizationsService: OrganizationsService,
        private readonly platform: Platform,
    ) {
        if(this.platform.isBrowser) {
            this.getOrg();
        }
    }

    private getOrg() {
        const name = this.activatedRoute.snapshot.paramMap.get("name") as string;
        this.organizationsService.getOrganizationByName(this.activatedRoute.snapshot.paramMap.get("name") as string).subscribe((res) => {
            if(res.body) {
                this.organization = res.body;
            } else {
                // not found org
            }
        })
    }
}
