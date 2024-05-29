import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RouteService} from "@services/route/route.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly routeService: RouteService,
    ) {
        this.routeService.setSnapshot(this.activatedRoute.snapshot);
    }
}
