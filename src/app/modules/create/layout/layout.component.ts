import {Component} from '@angular/core';
import {Location} from "@angular/common";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  imports: [
    MatButtonModule,
    RouterOutlet
  ],
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  constructor(private readonly location: Location) {
  }

  public back() {
    this.location.back();
  }
}
