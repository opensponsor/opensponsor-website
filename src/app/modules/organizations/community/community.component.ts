import { Component } from '@angular/core';
import {E_ORGANIZATION_TYPE} from "@app/interfaces/ApiInterface";

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss'
})
export class CommunityComponent {
    protected readonly E_ORGANIZATION_TYPE = E_ORGANIZATION_TYPE;
}
