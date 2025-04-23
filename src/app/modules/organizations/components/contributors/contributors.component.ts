import {Component, Input} from '@angular/core';
import {Organization} from "@app/interfaces/ApiInterface";

@Component({
  selector: 'os-contributors',
  imports: [],
  templateUrl: './contributors.component.html',
  styleUrl: './contributors.component.scss'
})
export class ContributorsComponent {
  @Input({
    required: true,
  })
  organization!: Organization;
}
