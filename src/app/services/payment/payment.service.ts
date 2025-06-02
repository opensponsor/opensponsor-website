import { Injectable } from '@angular/core';
import {HttpService} from "@services/http/http.service";
import {Order, Tier, TradeStateEnum, WechatPayOrderResult} from "@app/interfaces/ApiInterface";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private readonly httpService: HttpService,
  ) {}

  getAlipayForm(tier: Tier) {
    return this.httpService.post<string>("/payment-ali", tier);
  }

  getWechatScheme(tier: Tier) {
    return this.httpService.post<WechatPayOrderResult>("/payment-wechat", tier);
  }

  queryWechatOrderStatus(outTradeNo: string) {
    const params = new HttpParams({fromObject: {outTradeNo: outTradeNo}});
    return this.httpService.get<TradeStateEnum>("/payment-wechat/queryOrder", params);
  }

  queryAlipayOrderStatus(params: Record<string, any>) {
    return this.httpService.post<Order>("/payment-ali/callback", params);
  }

}
