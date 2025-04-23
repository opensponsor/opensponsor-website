import {Component, Input} from '@angular/core';
import {Organization} from "@app/interfaces/ApiInterface";

@Component({
  selector: 'os-team',
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  @Input({
    required: true,
  })
  organization!: Organization;
}
