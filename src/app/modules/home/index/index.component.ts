import {Component} from '@angular/core';
import {MatAnchor} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {BlobDirective} from "@app/directive/blob/blob.directive";

@Component({
  standalone: true,
  selector: 'os-index',
  templateUrl: './index.component.html',
  imports: [
    MatAnchor,
    RouterLink,
    MatCardModule,
    BlobDirective
  ],
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
