import { Injectable } from '@angular/core';
import {HttpService} from "@services/http/http.service";
import {CountryCode, SendSmsResponseAliyun} from "@app/interfaces/ApiInterface";

@Injectable({
  providedIn: 'root'
})
export class SmsService {
  constructor(private httpService: HttpService) { }

  sendVerificationCode(countryCode: CountryCode, phoneNumber: string) {
    return this.httpService.post<SendSmsResponseAliyun>("/sms/verifyCode", {countryCode: countryCode, phoneNumber: phoneNumber})
  }

  /**
   * 给当前登录用户发短信
   */
  sendVerificationCodeToSelf() {
    return this.httpService.post<SendSmsResponseAliyun>("/sms/verifyCodeToSelf")
  }
}
