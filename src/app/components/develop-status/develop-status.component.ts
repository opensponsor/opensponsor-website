import {Component, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'os-develop-status',
  imports: [
    MatButton
  ],
  templateUrl: './develop-status.component.html',
  styleUrl: './develop-status.component.scss'
})
export class DevelopStatusComponent {
  @Input({
    required: false,
  })
  public tag: 'develop' | 'stable' = 'develop';
}
