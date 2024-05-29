import {Injectable, signal} from '@angular/core';
import {User} from "@app/interfaces/ApiInterface";
import {toObservable} from "@angular/core/rxjs-interop";
import {ActivatedRouteSnapshot} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class RouteService {
    private currentRoute = signal<ActivatedRouteSnapshot | null>(null);

    public readonly currentRoute$ = toObservable(this.currentRoute);

    constructor() {
    }

    public setSnapshot(snapshot: ActivatedRouteSnapshot) {
        this.currentRoute.set(snapshot);
    }

    public getSnapshot() {
        return this.currentRoute();
    }
}
