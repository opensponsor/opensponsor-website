import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RouteService} from "@services/route/route.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly routeService: RouteService,
    ) {
        this.routeService.setSnapshot(this.activatedRoute.snapshot);
    }
}
