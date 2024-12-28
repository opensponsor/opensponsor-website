import {Routes, CanActivateFn, Router} from '@angular/router';
import {FullWidthLayoutComponent} from "@app/layouts/full-width-layout/full-width-layout.component";
import {DefaultLayoutComponent} from "@app/layouts/default-layout/default-layout.component";
import {PureLayoutComponent} from "@app/layouts/pure-layout/pure-layout.component";
import {PageNotFoundComponent} from "@modules/error/page-not-found/page-not-found.component";
import {inject} from "@angular/core";
import {SnackBarService} from "@services/snack-bar/snack-bar.service";
import {AuthService} from "@services/auth/auth.service";

const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const snackBarService = inject(SnackBarService);
  const router = inject(Router);

  return new Promise(resolve => {
    authService.getAuthUser().subscribe({
      next: () => {
        resolve(true)
      },
      error: err => {
        router.navigate(["/passport/login"]).then(() => {
          snackBarService.message({message: err.message});
        })
        resolve(false)
      }
    })
  })
};

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'account',
    canActivate: [authGuard],
    component: PureLayoutComponent,
    loadChildren: () => import('@modules/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'create',
    canActivate: [authGuard],
    component: DefaultLayoutComponent,
    loadChildren: () => import('@modules/create/create.module').then(m => m.CreateModule)
  },
  {
    path: 'explore',
    component: DefaultLayoutComponent,
    loadChildren: () => import('@modules/explore/explore.module').then(m => m.ExploreModule)
  },
  {
    path: 'passport',
    component: DefaultLayoutComponent,
    loadChildren: () => import('@modules/passport/passport.module').then(m => m.PassportModule)
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    component: PureLayoutComponent,
    loadChildren: () => import('@modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: ':name',
    component: FullWidthLayoutComponent,
    loadChildren: () => import('@modules/organizations/organizations.module').then(m => m.OrganizationsModule)
  },
  {
    path: '**',
    component: DefaultLayoutComponent,
    loadChildren: () => import('@modules/error/error.module').then(m => m.ErrorModule)
  },
];
