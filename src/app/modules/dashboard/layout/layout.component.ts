import {Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet} from "@angular/router";
import {OrganizationsService} from "@services/organizations/organizations.service";
import {Platform} from "@angular/cdk/platform";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {Organization} from "@app/interfaces/ApiInterface";
import {AuthService} from "@services/auth/auth.service";
import {MatFormField} from "@angular/material/form-field";
import {MatSelectChange, MatSelectModule} from "@angular/material/select";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {menus} from "@modules/dashboard/layout/menus";

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
    NgOptimizedImage,
    MatFormField,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  public rootPath = "";
  public configPath = ':slug';

  public organization: Organization | undefined;
  public myOrganizations: Organization[] = [];
  public organizationSlugControl = new FormControl();

  public menus = menus;

  public constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly platform: Platform,
    private readonly organizationsService: OrganizationsService,
    public readonly authService: AuthService,
  ) {
    if (this.platform.isBrowser) {
      if(this.activatedRoute.firstChild) {
        const authUser = authService.authInfo()!;
        this.activatedRoute.firstChild?.params.subscribe(value => {
          const orgName = value['slug'] || authUser.slug;
          this.rootPath = ['/dashboard', orgName].join("/");
          this.loadOrganizations(orgName);
          this.activeMenu();
        })
      }
      this.router.events.subscribe((e) => {
        if (e instanceof NavigationEnd) {
          this.activeMenu();
        }
      })

      this.getMyOrganizations();
    }
  }

  private loadOrganizations(orgName: string) {
    this.organizationsService.getOrganizationBySlug(orgName).subscribe(res => {
      if(res.status === 200 && res.body) {
        this.organizationsService.organization.set(res.body.data);
        this.organization = res.body.data;
        this.organizationSlugControl.setValue(this.organization.slug);
      }
    });
  }

  private getMyOrganizations() {
    this.organizationsService.list({userId: this.authService.authInfo()?.id}).subscribe(res => {
      if(res.status === 200 && res.body) {
        this.myOrganizations = res.body?.records;
      }
    })
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

  public changeOrganization(e: MatSelectChange<string>) {
    this.router.navigate(['/dashboard', e.value]).then(() => {
      this.rootPath = ['/dashboard', e.value].join("/");
      this.loadOrganizations(e.value);
    });
  }
}
