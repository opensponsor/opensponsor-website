import {Component, Input} from '@angular/core';
import {Organization} from "@app/interfaces/ApiInterface";

@Component({
  standalone: true,
  selector: 'os-contributors-list',
  imports: [],
  templateUrl: './contributors-list.component.html',
  styleUrl: './contributors-list.component.scss'
})
export class ContributorsListComponent {
  @Input({
    required: true,
  })
  organization!: Organization;
}
