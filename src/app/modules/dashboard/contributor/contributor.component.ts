import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  standalone: true,
  selector: 'os-contributor',
  templateUrl: './contributor.component.html',
  styleUrl: './contributor.component.scss'
})
export class ContributorComponent {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
  ) {

  }
}
