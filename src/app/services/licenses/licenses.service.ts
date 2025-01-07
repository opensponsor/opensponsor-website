import { Injectable } from '@angular/core';
import {HttpService} from "@services/http/http.service";
import {Licenses} from "@app/interfaces/ApiInterface";

@Injectable({
  providedIn: 'root'
})
export class LicensesService {

  constructor(private httpService: HttpService) { }

  public getLicenses() {
    return this.httpService.get<Licenses[]>('/licenses');
  }
}
