import { Component } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {OrganizationsService} from "@services/organizations/organizations.service";
import {Platform} from "@angular/cdk/platform";

type Menu = {
    label: string;
    link?: string;
    active?: boolean;
    icon: string;
    children?: Omit<Menu, 'icon'>[]
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
    public rootPath = "";
    public configPath = ':name';

    public menus: Menu[] = [
        {
            label: '概览',
            link: '',
            icon: 'dashboard',
        },
        {
            label: '支出',
            link: '',
            icon: 'paid',
            children: [
                {
                    label: '捐给谁',
                    link: '',
                },
            ]
        },
        {
            label: '贡献者',
            link: 'contributor',
            icon: 'apps'
        },
        {
            label: '捐款',
            link: '',
            icon: 'group',
            children: [
                {
                    label: '捐给谁',
                    link: '',
                },
            ]
        },
        {
            label: 'Team',
            link: 'team',
            icon: 'group'
        },
        {
            label: '贡献等级',
            link: 'tiers',
            icon: 'diamond'
        },
        {
            label: '设置',
            icon: 'settings',
            children: [
                {
                    label: '基本信息',
                    link: 'profile'
                },
                {
                    label: '安全',
                    link: 'security'
                },
                {
                    label: '社交账户',
                    link: 'social'
                },
                {
                    label: '规则',
                    link: ''
                },
                {
                    label: '财务证明',
                    link: ''
                },
                {
                    label: '付款设置',
                    link: 'sending-money'
                },
                {
                    label: '首款设置',
                    link: 'receiving-money'
                },
                {
                    label: '开发',
                    link: 'development'
                },
                {
                    label: 'webhook',
                    link: 'webhook'
                },
            ]
        }
    ];

    public constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly router: Router,
        private readonly platform: Platform,
        private readonly organizationsService: OrganizationsService,
    ) {
        if(platform.isBrowser) {
            this.activatedRoute.firstChild?.params.subscribe(value => {
                this.rootPath = ['/dashboard', value['name']].join("/");
                this.organizationsService.getOrganizationByName(value['name']).subscribe();
                this.activeMenu();
            })
            this.router.events.subscribe((e) => {
                if(e instanceof NavigationEnd) {
                    this.activeMenu();
                }
            })
        }
    }

    public activeMenu() {
        if(this.activatedRoute.snapshot.children && this.activatedRoute.snapshot.children[0].routeConfig?.path) {
            this.configPath = this.activatedRoute.snapshot.children[0].routeConfig?.path;
        }

        this.menus.forEach(menu => {
            if(menu.children && menu.children.length > 0) {
                menu.children.forEach(child => {
                    if([':name', child.link].join('/') === this.configPath && child.link !== undefined) {
                        menu.active = true;
                        child.active = true;
                    } else {
                        child.active = false;
                    }
                })
            }
            menu.active = [':name', menu.link].join('/') === this.configPath && menu.link !== undefined;
        })
    }

    public trimUrl(commands: (string | undefined)[]) {
        return commands.filter(r => r && r.trim())
    }

}
