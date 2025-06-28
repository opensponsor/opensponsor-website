import {Component} from '@angular/core';
import {LogoComponent} from "@app/components/logo/logo.component";

@Component({
  standalone: true,
  selector: 'os-default-footer',
  imports: [
    LogoComponent
  ],
  templateUrl: './default-footer.component.html',
  styleUrl: './default-footer.component.scss'
})
export class DefaultFooterComponent {

}
