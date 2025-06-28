import {Component, Input} from '@angular/core';
import {Organization} from "@app/interfaces/ApiInterface";

@Component({
  standalone: true,
  selector: 'os-activity-block',
  imports: [],
  templateUrl: './activity-block.component.html',
  styleUrl: './activity-block.component.scss'
})
export class ActivityBlockComponent {
  @Input({
    required: true,
  })
  organization!: Organization;
}
