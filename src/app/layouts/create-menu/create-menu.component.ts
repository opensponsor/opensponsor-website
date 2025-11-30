import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {CdkConnectedOverlay, CdkOverlayOrigin} from "@angular/cdk/overlay";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  standalone: true,
  selector: 'os-create-menu',
  imports: [
    RouterLink,
    CdkConnectedOverlay,
    CdkOverlayOrigin,
    MatButton,
    MatIcon,
  ],
  templateUrl: './create-menu.component.html',
  styleUrl: './create-menu.component.scss'
})
export class CreateMenuComponent {
  public showCreateMenu = false
}
