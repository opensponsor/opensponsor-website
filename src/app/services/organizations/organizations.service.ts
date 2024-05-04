import {Injectable} from '@angular/core';
import {HttpService} from "@services/http/http.service";
import {Organization} from "@app/interfaces/ApiInterface";

@Injectable({
    providedIn: 'root'
})
export class OrganizationsService {
    private Urls = {
        create: "/organizations",
        list: "/organizations",
    }

    constructor(private httpService: HttpService) {
    }

    public create(organization: Organization) {
        return this.httpService.post<Organization>(this.Urls.create, organization)
    }

    public list() {
        return this.httpService.get<Organization[]>(this.Urls.create)
    }

}
