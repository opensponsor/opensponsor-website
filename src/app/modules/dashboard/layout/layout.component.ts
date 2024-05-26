import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

type Menu = {
    label: string;
    link: string;
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
            link: '',
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
        private readonly router: Router,
    ) {
        this.activatedRoute.firstChild?.url.subscribe(segments => {
            this.rootPath = ['/dashboard', segments[0].path].join("/");
        })
    }

    public trimUrl(commands: string[]) {
        return commands.filter(r => r.trim())
    }

}
