import { Component } from '@angular/core';
import {Organization} from "@app/interfaces/ApiInterface";
import {OrganizationsService} from "@services/organizations/organizations.service";
import {MatButton} from "@angular/material/button";
import {HttpStatusCode} from "@angular/common/http";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'os-reset-financial',
  imports: [
    MatButton,
    MatIcon
  ],
  templateUrl: './reset-financial.component.html',
  styleUrl: './reset-financial.component.scss'
})
export class ResetFinancialComponent {
  public organization: Organization | undefined;

  constructor(
    protected organizationsService: OrganizationsService,
  ) {
    this.organizationsService.organization$.subscribe(org => this.organization = org);
  }

  public resetFinancial() {
    if(this.organization?.slug) {
      this.organizationsService.resetFinancial(this.organization.slug).subscribe(res => {
        if(res.status === HttpStatusCode.Ok) {
          this.organizationsService.organization.set(res.body?.data);
        }
      })
    }
  }
}
