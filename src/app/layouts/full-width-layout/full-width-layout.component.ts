import {Component} from '@angular/core';
import {DefaultHeaderComponent} from "@app/layouts/default-header/default-header.component";
import {RouterOutlet} from "@angular/router";
import {DefaultFooterComponent} from "@app/layouts/default-footer/default-footer.component";

@Component({
    selector: 'app-full-width-layout',
    standalone: true,
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
