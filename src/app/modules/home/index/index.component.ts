import {Component} from '@angular/core';
import {MatAnchor} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  imports: [
    MatAnchor,
    RouterLink
  ],
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
