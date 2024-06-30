import { Injectable } from '@angular/core';
import {HttpService} from "@services/http/http.service";
import {Tier} from "@app/interfaces/ApiInterface";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TierService {
    public tier: Tier | undefined;

    private Urls = {
        create: "/tier",
        update: "/tier",
        delete: "/tier",
        get: "/tier",
    }

    constructor(private readonly httpService: HttpService) {
    }

    public get(slug: string) {
        return this.httpService.get<Tier>(`${this.Urls.create}/${slug}`).pipe(res => {
            res.subscribe(data => {
                this.tier = data.body as Tier;
            })
            return res;
        });
    }

    public create(tier: Tier) {
        return this.httpService.post<Tier>(this.Urls.create, tier);
    }

    public update(tier: Tier) {
        return this.httpService.put<Tier>(this.Urls.update, tier);
    }

    public delete(tier: Tier) {
        const params = new HttpParams();
        params.set('id', String(tier.id))
        return this.httpService.delete(this.Urls.delete, params);
    }


}
