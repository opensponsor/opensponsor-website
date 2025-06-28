import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  standalone: true,
  selector: 'os-pure-layout',
  imports: [
    RouterOutlet
  ],
  templateUrl: './pure-layout.component.html',
  styleUrl: './pure-layout.component.scss'
})
export class PureLayoutComponent {

}
