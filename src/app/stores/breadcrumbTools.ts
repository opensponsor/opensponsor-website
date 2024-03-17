import {Injectable, signal} from "@angular/core";
import {Breadcrumb} from "@app/interfaces";
import {NavigationStart, Router} from "@angular/router";
import {Platform} from "@angular/cdk/platform";

@Injectable({providedIn: 'root'})
export default class BreadcrumbTools {
    public breadcrumbs = signal<Breadcrumb[]>([]);

    constructor(
        private readonly router: Router,
        private readonly platform: Platform,
    ) {
        if (this.platform.isBrowser) {
            this.clear();
            console.dir("this.clear()");
            this.router.events.subscribe((event) => {
                if (event instanceof NavigationStart) {
                    console.dir("clear")
                    this.clear();
                }
            });
        }
    }

    private clear() {
        this.breadcrumbs.set([]);
    }

    private push(breadcrumb: Breadcrumb) {
        this.breadcrumbs.update(value => {
            value.push(breadcrumb)
            return value;
        });
    }

    public register(breadcrumbs: Breadcrumb | Breadcrumb[]) {
        if (Array.isArray(breadcrumbs)) {
            breadcrumbs.forEach(b => this.push(b));
        } else {
            this.push(breadcrumbs);
        }
    }

}
