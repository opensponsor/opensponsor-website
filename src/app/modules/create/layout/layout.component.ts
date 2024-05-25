import { Component } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
    constructor(private readonly location: Location) {
    }

    public back() {
        this.location.back();
    }
}
