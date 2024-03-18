import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-pure-layout',
  standalone: true,
    imports: [
        RouterOutlet
    ],
  templateUrl: './pure-layout.component.html',
  styleUrl: './pure-layout.component.scss'
})
export class PureLayoutComponent {

}
