import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RouteService} from "@services/route/route.service";

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
            link: '',
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
            link: '',
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
                    label: '支付方式',
                    link: 'payment'
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
        private readonly routeService: RouteService,
    ) {
        this.activatedRoute.firstChild?.url.subscribe(segments => {
            this.rootPath = ['/dashboard', segments[0].path].join("/");
        });

        this.routeService.currentRoute$.subscribe((snapshot) => {
            if(snapshot?.routeConfig?.path) {
                this.configPath = snapshot?.routeConfig?.path;
                this.activeMenu();
            }
        })
    }

    public activeMenu() {
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
