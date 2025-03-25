import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'os-create-menu',
  imports: [
    RouterLink,
  ],
  templateUrl: './create-menu.component.html',
  styleUrl: './create-menu.component.scss'
})
export class CreateMenuComponent {
  public showCreateMenu = false
}
