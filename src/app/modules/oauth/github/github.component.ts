import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {GithubService} from "@services/github/github.service";

@Component({
  standalone: true,
  selector: 'os-github',
  imports: [],
  templateUrl: './github.component.html',
  styleUrl: './github.component.scss'
})
export class GithubComponent {
  constructor(
    private router: Router,
    private githubService: GithubService,
  ) {
    const {code} = router.parseUrl(router.url).queryParams;
    this.githubService.getAccessToken(code).subscribe(() => {
      this.router.navigate(['/create/opensource-community/apply/github']).then();
    })
  }
}
