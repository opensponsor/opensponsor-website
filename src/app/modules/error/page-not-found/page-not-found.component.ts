import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,
  selector: 'os-page-not-found',
  imports: [
    RouterLink
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {

}
