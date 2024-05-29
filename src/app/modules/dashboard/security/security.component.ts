import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RouteService} from "@services/route/route.service";

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrl: './security.component.scss'
})
export class SecurityComponent {
    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly routeService: RouteService,
    ) {
        this.routeService.setSnapshot(this.activatedRoute.snapshot);
    }
}
