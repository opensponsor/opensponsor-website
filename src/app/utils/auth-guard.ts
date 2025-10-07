import {CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";
import {AuthService} from "@services/auth/auth.service";
import {SnackBarService} from "@services/snack-bar/snack-bar.service";
import {Platform} from "@angular/cdk/platform";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const snackBarService = inject(SnackBarService);
  const router = inject(Router);
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
