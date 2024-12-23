import {Injectable, signal} from '@angular/core';
import {HttpService} from "@services/http/http.service";
import {Tier} from "@app/interfaces/ApiInterface";
import {HttpParams} from "@angular/common/http";
import {ParamMap, Router} from "@angular/router";
import {toObservable} from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root'
})
export class TierService {
  public tier = signal<Tier | undefined>(undefined);
  public tier$ = toObservable(this.tier);

  private Urls = {
    create: "/tier",
    update: "/tier",
    delete: "/tier",
    get: "/tier",
  }

  constructor(
    private readonly router: Router,
    private readonly httpService: HttpService
  ) {
  }

  public get(organizationId: string, slug: string) {
    return this.httpService.get<Tier>(`${this.Urls.create}/${organizationId}/${slug}`).pipe(res => {
      res.subscribe(data => {
        this.tier.set(data.body as Tier);
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

  public redirectStep(paramMap: ParamMap, step: 'start' | 'profile' | 'summary' | 'payment') {
    const tier = paramMap.get('tier');
    const organization = paramMap.get('name');
    const st = step === 'start' ? '' : step;
    return this.router.navigate(['/', organization, 'contribute', tier, 'checkout', st].filter(i => i))
  }


}
