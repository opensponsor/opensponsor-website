import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {getWebFlowAuthorizationUrl} from "@octokit/oauth-methods";
import {environment} from "@environments/environment";
import {MatIcon} from "@angular/material/icon";

@Component({
  standalone: true,
  selector: 'os-open-source-community',
  templateUrl: './open-source-community.component.html',
  imports: [
    MatButtonModule,
    MatIcon
  ],
  styleUrl: './open-source-community.component.scss'
})
export class OpenSourceCommunityComponent {
  verifyForGithub = "#";
  // verifyForGitee = "#";
  constructor() {
    this.verifyForGithub = getWebFlowAuthorizationUrl({
      clientType: "oauth-app",
      clientId: environment.githubClientId,
      scopes: ["public_repo", "read:org"],
    }).url
  }
}
