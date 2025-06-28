import {Component, Input} from '@angular/core';
import {Organization} from "@app/interfaces/ApiInterface";
import {MatChip, MatChipSet} from "@angular/material/chips";
import {MatIcon} from "@angular/material/icon";

@Component({
  standalone: true,
  selector: 'os-hero',
  imports: [
    MatChip,
    MatChipSet,
    MatIcon
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Input({
    required: true,
  })
  organization!: Organization;
}
