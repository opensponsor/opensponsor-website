import { Injectable } from '@angular/core';
import {HttpService} from "@services/http/http.service";
import {Tier} from "@app/interfaces/ApiInterface";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private readonly httpService: HttpService,
  ) {}

  getAlipayForm(tire: Tier) {
    return this.httpService.post("/payment-ali", tire);
  }

}
