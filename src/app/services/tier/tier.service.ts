import { Injectable } from '@angular/core';
import {HttpService} from "@services/http/http.service";
import {Tier} from "@app/interfaces/ApiInterface";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TierService {

    private Urls = {
        create: "/tier",
        edit: "/tier",
        delete: "/delete",
    }

    constructor(private readonly httpService: HttpService) {
    }

    public create(tier: Tier) {
        return this.httpService.post<Tier>(this.Urls.create, tier);
    }

    public update(tier: Tier) {
        return this.httpService.put<Tier>(this.Urls.create, tier);
    }

    public delete(tier: Tier) {
        const params = new HttpParams();
        params.set('id', String(tier.id))
        return this.httpService.delete(this.Urls.create, params);
    }


}
