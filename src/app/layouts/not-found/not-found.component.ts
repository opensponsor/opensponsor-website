import { Component } from '@angular/core';
import {DefaultHeaderComponent} from "@app/layouts/default-header/default-header.component";
import {DefaultFooterComponent} from "@app/layouts/default-footer/default-footer.component";

@Component({
  selector: 'os-not-found',
  imports: [
    DefaultHeaderComponent,
    DefaultFooterComponent
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
