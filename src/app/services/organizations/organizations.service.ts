import {Injectable, signal} from '@angular/core';
import {HttpService} from "@services/http/http.service";
import {Organization, User} from "@app/interfaces/ApiInterface";
import {toObservable} from "@angular/core/rxjs-interop";

@Injectable({
    providedIn: 'root'
})
export class OrganizationsService {
    public organization =  signal<Organization | undefined>(undefined);
    public organization$ =  toObservable(this.organization);

    private Urls = {
        create: "/organizations",
        update: "/organizations",
        list: "/organizations",
        get: "/organizations",
    }

    constructor(private httpService: HttpService) {
    }

    public create(organization: Partial<Organization>) {
        return this.httpService.post<Organization>(this.Urls.create, organization)
    }

    public update(organization: Partial<Organization>) {
        return this.httpService.put<Organization>(this.Urls.update, organization)
    }

    public list() {
        return this.httpService.get<Organization[]>(this.Urls.create)
    }

    // refresh organization data
    public refresh() {
        if(this.organization?.name) {
            this.getOrganizationByName(this.organization?.name);
        }
    }

    public getOrganizationByName(name: string) {
        return this.httpService.get<Organization>(`${this.Urls.get}/${name}`).pipe(res => {
            res.subscribe(data => {
                this.organization.set(data.body as Organization);
            })
            return res;
        });
    }

}
