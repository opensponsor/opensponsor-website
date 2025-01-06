import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {getWebFlowAuthorizationUrl} from "@octokit/oauth-methods";
import {environment} from "@environments/environment";

@Component({
  selector: 'app-open-source-community',
  templateUrl: './open-source-community.component.html',
  imports: [
    MatButtonModule
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
