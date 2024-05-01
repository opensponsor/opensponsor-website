import {Injectable} from '@angular/core';
import {HttpService} from "@services/http/http.service";
import {CountryCodes} from "@app/interfaces/ApiInterface";

@Injectable({
    providedIn: 'root'
})
export class CountryCodesService {
    private Urls = {
        all: "/country-codes",
    }

    constructor(private httpService: HttpService) {
    }

    public all() {
        return new Promise<CountryCodes[]>(resolve => {
            this.httpService.get<CountryCodes[]>(this.Urls.all).subscribe(res => {
                if(res.body?.records) {
                    resolve(res.body?.records);
                } else {
                    resolve([]);
                }
            });
        })
    }
}
