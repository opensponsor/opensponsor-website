import {Injectable, signal} from '@angular/core';
import {HttpService} from "@services/http/http.service";
import {Organization, User} from "@app/interfaces/ApiInterface";
import {toObservable} from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root'
})
export class OrganizationsService {
  public organization = signal<Organization | undefined>(undefined);
  public organization$ = toObservable(this.organization);

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

  public list(filter?: Partial<Organization>) {
    return this.httpService.get<Organization[]>(this.Urls.list, this.httpService.buildHttpParams(filter || {}))
  }

  // refresh organization data
  public refresh() {
    const org = this.organization();
    if (org?.slug) {
      this.getOrganizationBySlug(org.slug);
    }
  }

  public getOrganizationBySlug(slug: string) {
    return this.httpService.get<Organization>(`${this.Urls.get}/${slug}`);
  }

  // 成为独立集体
  public enableIndependent(slug: string) {
    return this.httpService.put<Organization>(`${this.Urls.get}/${slug}/enableIndependent`);
  }

  // 重置组织财务
  public resetFinancial(slug: string) {
    return this.httpService.put<Organization>(`${this.Urls.get}/${slug}/resetFinancial`);
  }

}
