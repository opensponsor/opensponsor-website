import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-create-layout',
  templateUrl: './create-layout.component.html',
  styleUrl: './create-layout.component.scss',
})
export class CreateLayoutComponent {
    constructor(private readonly location: Location) {
    }

    public back() {
        this.location.back();
    }
}
