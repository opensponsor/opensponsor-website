import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AuthService} from "@services/auth/auth.service";
import {Platform} from "@angular/cdk/platform";


@Component({
    selector: 'app-root',
    standalone: true,
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
            this.authService.getAuthUser().subscribe(res => {
                if(res.body) {
                    this.authService.persistAuth(res.body);
                } else {
                    this.authService.removeAuthInfo();
                }
            })
        }
    }
}
