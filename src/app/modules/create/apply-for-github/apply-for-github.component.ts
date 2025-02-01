import { Component } from '@angular/core';
import {GithubService} from "@services/github/github.service";
import {Platform} from "@angular/cdk/platform";
import {GithubRepo, GithubRepoGroup} from "@app/interfaces/ApiInterface";
import {MatListOption, MatSelectionList} from "@angular/material/list";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {Router} from "@angular/router";

@Component({
  selector: 'os-apply-for-github',
  imports: [
    MatSelectionList,
    MatListOption,
    ReactiveFormsModule,
    MatButton,
    MatCardModule,
    NgIf,
    MatIcon,
  ],
  templateUrl: './apply-for-github.component.html',
  styleUrl: './apply-for-github.component.scss'
})
export class ApplyForGithubComponent {
  public repoControl: FormControl<GithubRepo[]> = new FormControl();
  public repoGroupList: GithubRepoGroup[] = [];

  constructor(
    private githubService: GithubService,
    private platform: Platform,
    private router: Router
  ) {
    const token = this.githubService.getToken();
    if(token) {
      fetch("http://localhost:4200/m.json").then(res => res.json()).then(data => {
        this.repoGroupList = data.data as GithubRepoGroup[];
      })
      // this.githubService.listRepoGroup(token).subscribe(res => {
      //   console.dir(res.body?.records);
      // });

    }
  }

  public next() {
    if(this.repoControl.value && this.repoControl.value.length > 0) {
      this.githubService.setCacheRepo(this.repoControl.value[0]);
      // next action
      this.router.navigate(['/create/open-source-community/apply/form']).then();
    }
  }
}
