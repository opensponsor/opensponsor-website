import {afterNextRender, Component} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {OrganizationsService} from "@services/organizations/organizations.service";
import {E_ORGANIZATION_ROLE, Member, Organization} from "@app/interfaces/ApiInterface";

@Component({
  selector: 'os-team',
  templateUrl: './team.component.html',
  imports: [
    RouterLink
  ],
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  public organization: Organization | undefined;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly organizationsService: OrganizationsService,
  ) {
    afterNextRender(() => {
      this.organizationsService.organization$.subscribe(org => this.organization = org);
    })
  }

  public filterMember(type: E_ORGANIZATION_ROLE): Member[] {
    if(this.organization) {
      return this.organization?.members.filter(m => m.role === type);
    }
    return []
  }

  public E_ORGANIZATION_ROLE = E_ORGANIZATION_ROLE;
}
