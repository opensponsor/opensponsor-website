import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RouteService} from "@services/route/route.service";

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss'
})
export class SocialComponent {
    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly routeService: RouteService,
    ) {
        this.routeService.setSnapshot(this.activatedRoute.snapshot);
    }
}
