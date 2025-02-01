import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'os-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
  ) {

  }
}
