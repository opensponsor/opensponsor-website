import { Injectable } from '@angular/core';
import {HttpService} from "@services/http/http.service";
import {Tags} from "@app/interfaces/ApiInterface";

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  constructor(private readonly httpService: HttpService) {}

  public getOfficialTags() {
    return this.httpService.get<Tags[]>("/tags/official");
  }

  public getPopularTags() {
    return this.httpService.get<Tags[]>("/tags/popular");
  }
}
