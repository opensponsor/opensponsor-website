import {Component, computed} from '@angular/core';
import {AuthService} from "@services/auth/auth.service";
import {Platform} from "@angular/cdk/platform";
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";
import {MatAnchor} from "@angular/material/button";
import {User} from "@app/interfaces/ApiInterface";

@Component({
    selector: 'app-default-header',
    standalone: true,
    imports: [
        RouterLink,
        NgForOf,
        MatAnchor,
    ],
    templateUrl: './default-header.component.html',
    styleUrls: ['./default-header.component.scss']
})
export class DefaultHeaderComponent {
    public menuGroup = {
        left: [
            {label: "首页", link: "/"},
            {label: "发现社区", link: "/organizations"},
        ],
        right: [
            {label: "发起预约", link: "/create"},
        ]
    };

    public authInfo: Partial<User> | null = {};

    constructor(
        public readonly authService: AuthService,
        public readonly platform: Platform,
    ) {
        if (this.platform.isBrowser) {
            this.authInfo = this.authService.authInfo();
            this.authService.authInfo$.subscribe(data => {
                this.authInfo = data;
            });
        }
    }
}
