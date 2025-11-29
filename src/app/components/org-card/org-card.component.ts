import {Component, Input} from '@angular/core';
import {Organization} from "@app/interfaces/ApiInterface";
import {RouterLink} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {TranslatePipe} from "@app/pipes/translate/translate.pipe";

@Component({
  standalone: true,
  selector: 'os-org-card',
  imports: [
    RouterLink,
    MatCardModule,
    TranslatePipe,
  ],
  templateUrl: './org-card.component.html',
  styleUrl: './org-card.component.scss'
})
export class OrgCardComponent {
  @Input({
    required: true,
  })
  public org!: Organization;
}
