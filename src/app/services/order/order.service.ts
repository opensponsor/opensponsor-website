import { Injectable } from '@angular/core';
import {HttpService} from "@services/http/http.service";
import {Order} from "@app/interfaces/ApiInterface";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private readonly httpService: HttpService
  ) { }

  public getList(params: Pick<Order, "userId" | "organizationId" | "startDate" | "endDate" | "status">) {
    return this.httpService.get<Order[]>("/order", this.httpService.buildHttpParams(params));
  }

  public getDetail(id: string) {
    return this.httpService.get<Order>(`/order/${id}`);
  }
}
