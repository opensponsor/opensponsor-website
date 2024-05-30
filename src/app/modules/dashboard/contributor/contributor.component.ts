import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-contributor',
  templateUrl: './contributor.component.html',
  styleUrl: './contributor.component.scss'
})
export class ContributorComponent {
    constructor(
        private readonly activatedRoute: ActivatedRoute,
    ) {

    }
}
