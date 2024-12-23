import {Component} from '@angular/core';
import {DefaultHeaderComponent} from "@app/layouts/default-header/default-header.component";
import {RouterOutlet} from "@angular/router";
import {DefaultFooterComponent} from "@app/layouts/default-footer/default-footer.component";

@Component({
  selector: 'app-default-layout',
  imports: [
    DefaultHeaderComponent,
    RouterOutlet,
    DefaultFooterComponent
  ],
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent {

}
