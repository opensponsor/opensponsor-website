import {Component, Input} from '@angular/core';
import {Organization} from "@app/interfaces/ApiInterface";
import {MatTab, MatTabGroup} from "@angular/material/tabs";

@Component({
  selector: 'os-contributors',
  imports: [
    MatTab,
    MatTabGroup
  ],
  templateUrl: './contributors.component.html',
  styleUrl: './contributors.component.scss'
})
export class ContributorsComponent {
  @Input({
    required: true,
  })
  organization!: Organization;
}
