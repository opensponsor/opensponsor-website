import { Injectable } from '@angular/core';
import {HttpService} from "@services/http/http.service";
import {DebitCard} from "@app/interfaces/ApiInterface";

@Injectable({
  providedIn: 'root'
})
export class DebitCardService {

    private Urls = {
        create: "/debit-card",
        update: "/debit-card",
    }

    constructor(private readonly httpService: HttpService) {
    }

    public create(debitCard: DebitCard) {
        return this.httpService.post<DebitCard>(this.Urls.create, debitCard);
    }

    public update(debitCard: DebitCard) {
        return this.httpService.put<DebitCard>(this.Urls.update, debitCard);
    }
}
