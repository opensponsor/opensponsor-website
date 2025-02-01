import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'os-security',
  templateUrl: './security.component.html',
  styleUrl: './security.component.scss'
})
export class SecurityComponent {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
  ) {

  }
}
