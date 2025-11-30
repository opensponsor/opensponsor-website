import {Component} from '@angular/core';
import {MatAnchor, MatButton} from "@angular/material/button";
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
    BlobDirective,
    MatButton
  ],
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
