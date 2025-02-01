import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'os-contribute',
  templateUrl: './contribute.component.html',
  styleUrl: './contribute.component.scss'
})
export class ContributeComponent {
  constructor(
    private readonly activatedRoute: ActivatedRoute
  ) {
  }
}
