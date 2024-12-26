import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatAccordion, MatExpansionModule, MatExpansionPanel} from "@angular/material/expansion";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatList, MatListModule} from "@angular/material/list";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";

type Menu = {
  label: string;
  link: string;
  icon: string;
  children?: Omit<Menu, 'icon'>[]
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  imports: [
    RouterLink,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    NgForOf,
    NgIf,
    RouterOutlet,
    NgOptimizedImage
  ],
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  public menus: Menu[] = [
    {
      label: '组织',
      link: '',
      icon: 'group',
      children: [
        {
          label: '管理组织',
          link: '/account/organizations',
        }
      ]
    },
    {
      label: '捐款',
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
      label: '应用管理',
      link: '',
      icon: 'apps'
    },
    {
      label: '团队',
      link: '',
      icon: 'group'
    },
    {
      label: '贡献等级',
      link: '',
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
          link: ''
        },
      ]
    }
  ];

}
