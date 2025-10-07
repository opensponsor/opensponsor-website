import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'os-select-type',
  imports: [
    MatButton,
    RouterLink
  ],
  templateUrl: './select-type.component.html',
  styleUrl: './select-type.component.scss'
})
export class SelectTypeComponent {

}
