import {Routes, CanActivateFn, Router, ActivatedRoute} from '@angular/router';
import {FullWidthLayoutComponent} from "@app/layouts/full-width-layout/full-width-layout.component";
import {DefaultLayoutComponent} from "@app/layouts/default-layout/default-layout.component";
import {PureLayoutComponent} from "@app/layouts/pure-layout/pure-layout.component";
import {PageNotFoundComponent} from "@modules/error/page-not-found/page-not-found.component";
import {inject} from "@angular/core";
import {SnackBarService} from "@services/snack-bar/snack-bar.service";
import {AuthService} from "@services/auth/auth.service";
import {NotFoundComponent} from "@app/layouts/not-found/not-found.component";
import {Platform} from "@angular/cdk/platform";

const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const snackBarService = inject(SnackBarService);
  const router = inject(Router);
  const activatedRoute = inject(ActivatedRoute);
  const platform = inject(Platform);

  return new Promise(resolve => {
    if(platform.isBrowser) {
      authService.getAuthUser().subscribe({
        next: () => {
          resolve(true)
        },
        error: err => {
          // ?ref=${state.url}
          router.navigateByUrl("/user/login").then(() => {
            snackBarService.message({message: err.message});
          })
          resolve(false)
        }
      })
    } else {
      resolve(true);
    }
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
    path: 'search',
    component: DefaultLayoutComponent,
    loadChildren: () => import('@modules/search/search.module').then(m => m.SearchModule)
  },
  {
    path: 'user',
    component: DefaultLayoutComponent,
    loadChildren: () => import('@modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    component: PureLayoutComponent,
    loadChildren: () => import('@modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'oauth',
    canActivate: [authGuard],
    component: DefaultLayoutComponent,
    loadChildren: () => import('@modules/oauth/oauth.module').then(m => m.OauthModule)
  },
  {
    path: 'not-found',
    canActivate: [],
    component: NotFoundComponent
  },
  {
    path: ':slug',
    component: FullWidthLayoutComponent,
    loadChildren: () => import('@modules/organizations/organizations.module').then(m => m.OrganizationsModule)
  },
  {
    path: '**',
    component: DefaultLayoutComponent,
    loadChildren: () => import('@modules/error/error.module').then(m => m.ErrorModule)
  },
];


// fetch('https://github.com/login/oauth/access_token', {
//   method: "POST",
//   body: JSON.stringify({
//     client_id: 'Iv23liFPMdEJB2LUyNY6',
//     client_secret: '9ad148e801b20e298496297d8abab51d0c1f2aee',
//     code: '16db57ebbb7762b356c4',
//   })
// }).then()

// https://github.com/settings/connections/applications/Iv23liFPMdEJB2LUyNY6

// https://medium.com/@tony.infisical/guide-to-using-oauth-2-0-to-access-github-api-818383862591
