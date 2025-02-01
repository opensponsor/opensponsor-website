import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AuthService} from "@services/auth/auth.service";
import {Platform} from "@angular/cdk/platform";


@Component({
  selector: 'os-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'opensponsor-website';

  constructor(
    private readonly authService: AuthService,
    public readonly platform: Platform,
  ) {
    if (this.platform.isBrowser) {
      if(localStorage.getItem("accessToken")) {
        this.authService.getAuthUser().subscribe(res => {
          if (res.body) {
            this.authService.persistAuth(res.body);
          } else {
            this.authService.removeAuthInfo();
          }
        })
      }
    }
  }
}
