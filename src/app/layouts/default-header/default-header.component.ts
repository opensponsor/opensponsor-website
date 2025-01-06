import {Component, computed, HostListener} from '@angular/core';
import {AuthService} from "@services/auth/auth.service";
import {Platform} from "@angular/cdk/platform";
import {RouterLink} from "@angular/router";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {MatAnchor, MatButton, MatButtonModule} from "@angular/material/button";
import {User} from "@app/interfaces/ApiInterface";
import {MatCardModule} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-default-header',
  imports: [
    RouterLink,
    NgForOf,
    MatAnchor,
    NgClass,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss']
})
export class DefaultHeaderComponent {
  public hideHeader = false;
  private scrollY = 0;
  public menuGroup = {
    left: [
      {label: "发现社区", link: "/explore"},
    ],
    right: [
      {label: "创建社区", link: "/create"},
    ]
  };

  public authInfo: Partial<User> | undefined = {};

  public showCreateMenu = false

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: Event) {
    if (window.scrollY < this.scrollY) {
      this.hideHeader = false;
    } else if (this.scrollY > 100) {
      this.hideHeader = true
    }

    this.scrollY = window.scrollY;
  }

  constructor(
    public readonly authService: AuthService,
    public readonly platform: Platform,
  ) {
    if (this.platform.isBrowser) {
      this.authInfo = this.authService.authInfo();
      this.authService.authInfo$.subscribe(data => {
        this.authInfo = data;
      });
    }
  }
}
