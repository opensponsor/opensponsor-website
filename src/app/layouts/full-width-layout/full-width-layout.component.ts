import {Component} from '@angular/core';
import {DefaultHeaderComponent} from "@app/layouts/default-header/default-header.component";
import {RouterOutlet} from "@angular/router";
import {DefaultFooterComponent} from "@app/layouts/default-footer/default-footer.component";

@Component({
  standalone: true,
  selector: 'os-full-width-layout',
  imports: [
    DefaultHeaderComponent,
    RouterOutlet,
    DefaultFooterComponent
  ],
  templateUrl: './full-width-layout.component.html',
  styleUrl: './full-width-layout.component.scss'
})
export class FullWidthLayoutComponent {

}
