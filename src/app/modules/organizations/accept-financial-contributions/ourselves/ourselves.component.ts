import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'os-ourselves',
  imports: [
    MatButton,
    RouterLink
  ],
  templateUrl: './ourselves.component.html',
  styleUrl: './ourselves.component.scss'
})
export class OurselvesComponent {

}
