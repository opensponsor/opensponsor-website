import { Injectable } from '@angular/core';
import {HttpService} from "@services/http/http.service";
import {UpdateUser} from "@app/interfaces/ApiInterface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private readonly httpService: HttpService
  ) {}

  public update(user: UpdateUser) {
    return this.httpService.put('/user', user);
  }
}
