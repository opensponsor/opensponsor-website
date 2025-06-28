import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  standalone: true,
  selector: 'os-social',
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss'
})
export class SocialComponent {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
  ) {

  }
}
