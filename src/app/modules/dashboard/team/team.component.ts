import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'os-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
  ) {

  }
}
