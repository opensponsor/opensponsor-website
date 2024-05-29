import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RouteService} from "@services/route/route.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly routeService: RouteService,
    ) {
        this.routeService.setSnapshot(this.activatedRoute.snapshot);
    }
}
