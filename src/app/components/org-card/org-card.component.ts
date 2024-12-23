import {Component, Input} from '@angular/core';
import {Organization} from "@app/interfaces/ApiInterface";
import {RouterLink} from "@angular/router";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-org-card',
  imports: [
    RouterLink,
    MatCardModule,
  ],
  templateUrl: './org-card.component.html',
  styleUrl: './org-card.component.scss'
})
export class OrgCardComponent {
  @Input({
    required: true,
  })
  public org: Organization | undefined;
}
