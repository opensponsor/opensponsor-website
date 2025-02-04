import { Injectable } from '@angular/core';
import {HttpService} from "@services/http/http.service";
import {map} from "rxjs";
import {GithubAccessToken, GithubOwner, GithubRepo, GithubRepoGroup} from "@app/interfaces/ApiInterface";

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private githubTokenName = "_github_access_token";
  private repoCache: GithubRepo | undefined = undefined;

  private Urls = {
    repoGroup: "/github/repo-group",
    accessToken: "/github/access-token",
  }

  constructor(private httpService: HttpService) {
  }

  public listRepoGroup(token: string) {
    return this.httpService.get<GithubRepoGroup[]>(`${this.Urls.repoGroup}?token=${token}`);
  }

  public getAccessToken(code: string) {
    return this.httpService.get<GithubAccessToken>(`${this.Urls.accessToken}?code=${code}`).pipe(map(res => {
      if(res.body?.data) {
        this.setToken(res.body?.data.access_token)
      }
      return res;
    }));
  }

  private setToken(token: string) {
    localStorage.setItem(this.githubTokenName, token);
  }

  public getToken() {
    return localStorage.getItem(this.githubTokenName);
  }

  public setCacheRepo(repo: GithubRepo) {
    this.repoCache = repo;
  }

  public getCacheRepo(repo: GithubRepo) {
    return this.repoCache;
  }
}
