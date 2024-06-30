import {Component, Input} from '@angular/core';
import {Organization} from "@app/interfaces/ApiInterface";
import {MatAnchor} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatCard, MatCardContent, MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-org-card',
  standalone: true,
    imports: [
        MatAnchor,
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
