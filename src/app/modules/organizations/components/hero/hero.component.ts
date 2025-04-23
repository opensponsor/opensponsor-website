import {Component, Input} from '@angular/core';
import {Organization} from "@app/interfaces/ApiInterface";

@Component({
  selector: 'os-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Input({
    required: true,
  })
  organization!: Organization;
}
