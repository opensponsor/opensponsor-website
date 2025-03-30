import {Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet} from "@angular/router";
import {OrganizationsService} from "@services/organizations/organizations.service";
import {Platform} from "@angular/cdk/platform";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {E_ORGANIZATION_TYPE, Organization} from "@app/interfaces/ApiInterface";
import {AuthService} from "@services/auth/auth.service";

type Menu = {
  label: string;
  link?: string;
  active?: boolean;
  icon: string;
  roles: E_ORGANIZATION_TYPE[];
  children?: (Pick<Menu, 'label' | 'link'> & Partial<Menu>)[]
}

@Component({
  selector: 'os-layout',
  templateUrl: './layout.component.html',
    imports: [
        MatExpansionModule,
        MatIconModule,
        RouterLink,
        MatListModule,
        NgClass,
        NgForOf,
        NgIf,
        RouterOutlet,
        NgOptimizedImage
    ],
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  public rootPath = "";
  public configPath = ':slug';

  public organization: Organization | undefined;

  public menus: Menu[] = [
    {
      label: '概览',
      link: '',
      icon: 'dashboard',
      roles: []
    },
    {
      label: '支出',
      link: '',
      icon: 'paid',
      roles: [
        E_ORGANIZATION_TYPE.USER,
        E_ORGANIZATION_TYPE.ORGANIZATION,
        E_ORGANIZATION_TYPE.COMMUNITY
      ],
      children: [
        {
          label: '捐给谁',
          link: '',
        },
      ],
    },
    {
      label: '贡献者',
      link: 'contributor',
      icon: 'apps',
      roles: [
        E_ORGANIZATION_TYPE.ORGANIZATION,
        E_ORGANIZATION_TYPE.COMMUNITY
      ]
    },
    {
      label: '捐款',
      link: '',
      icon: 'group',
      roles: [
        E_ORGANIZATION_TYPE.USER,
        E_ORGANIZATION_TYPE.ORGANIZATION,
        E_ORGANIZATION_TYPE.COMMUNITY
      ],
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
      icon: 'group',
      roles: [
        E_ORGANIZATION_TYPE.ORGANIZATION,
        E_ORGANIZATION_TYPE.COMMUNITY
      ]
    },
    {
      label: '贡献等级',
      link: 'tiers',
      icon: 'diamond',
      roles: [
        E_ORGANIZATION_TYPE.ORGANIZATION,
        E_ORGANIZATION_TYPE.COMMUNITY
      ]
    },
    {
      label: '设置',
      icon: 'settings',
      roles: [],
      children: [
        {
          label: '基本信息',
          link: `profile`
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
          label: '收款设置',
          link: 'receiving-money'
        },
        {
          label: '开发',
          link: 'development',
          roles: [
            E_ORGANIZATION_TYPE.ORGANIZATION,
            E_ORGANIZATION_TYPE.COMMUNITY
          ]
        },
        {
          label: 'webhook',
          link: 'webhook',
          roles: [
            E_ORGANIZATION_TYPE.ORGANIZATION,
            E_ORGANIZATION_TYPE.COMMUNITY
          ]
        },
      ]
    }
  ];

  public constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly platform: Platform,
    private readonly organizationsService: OrganizationsService,
    private readonly authService: AuthService,
  ) {

    if (this.platform.isBrowser) {
      if(this.activatedRoute.firstChild) {
        const authUser = authService.authInfo()!;
        this.activatedRoute.firstChild?.params.subscribe(value => {
          const orgName = value['slug'] || authUser.slug;
          this.rootPath = ['/dashboard', orgName].join("/");
          this.organizationsService.getOrganizationByName(orgName).subscribe(res => {
            if(res.status === 200 && res.body) {
              this.organizationsService.organization.set(res.body.data);
              this.organization = res.body.data;
            }
          });
          this.activeMenu();
        })
      }
      this.router.events.subscribe((e) => {
        if (e instanceof NavigationEnd) {
          this.activeMenu();
        }
      })
    }
  }

  public activeMenu() {
    if (this.activatedRoute.snapshot.children && this.activatedRoute.snapshot.children[0].routeConfig?.path) {
      this.configPath = this.activatedRoute.snapshot.children[0].routeConfig?.path;
    }

    this.menus.forEach(menu => {
      if (menu.children && menu.children.length > 0) {
        menu.children.forEach(child => {
          if ([':slug', child.link].join('/') === this.configPath && child.link !== undefined) {
            menu.active = true;
            child.active = true;
          } else {
            child.active = false;
          }
        })
      } else {
        if(menu.link) {
          menu.active = [':slug', menu.link].join('/') === this.configPath && menu.link !== undefined;
        } else {
          menu.active = ":slug" === this.configPath && menu.link !== undefined;
        }
      }
    })
  }

  public trimUrl(commands: (string | undefined)[]) {
    return commands.filter(r => r && r.trim())
  }

}
