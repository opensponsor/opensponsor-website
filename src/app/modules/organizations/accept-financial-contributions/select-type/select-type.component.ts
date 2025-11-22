import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";
import {MatRadioButton, MatRadioChange, MatRadioGroup} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
import {OrganizationsService} from "@services/organizations/organizations.service";
import {Organization} from "@app/interfaces/ApiInterface";
import {HttpStatusCode} from "@angular/common/http";
import {
  ResetFinancialComponent
} from "@modules/organizations/accept-financial-contributions/reset-financial/reset-financial.component";
import {SkeletonComponent} from "@app/components/skeleton/skeleton.component";
import {BindDebitCardComponent} from "@app/components/bind-debit-card/bind-debit-card.component";
import {DebitCardComponent} from "@app/components/debit-card/debit-card.component";

@Component({
  selector: 'os-select-type',
  imports: [
    MatButton,
    RouterLink,
    MatRadioGroup,
    FormsModule,
    MatRadioButton,
    ResetFinancialComponent,
    SkeletonComponent,
    BindDebitCardComponent,
    DebitCardComponent
  ],
  templateUrl: './select-type.component.html',
  styleUrl: './select-type.component.scss'
})
export class SelectTypeComponent {
  public selectFinanceType = 'noHost';
  public organization: Organization | undefined;

  constructor(
    protected organizationsService: OrganizationsService,
    protected router: Router,
  ) {
    this.organizationsService.organization$.subscribe(org => this.organization = org);
    this.selectFinanceType = this.router.parseUrl(this.router.url).queryParamMap.get('type') || this.selectFinanceType;
  }

  public navigateToType(event: MatRadioChange) {
    const tree = this.router.parseUrl(this.router.url)
    tree.queryParams['type'] = event.value;
    this.router.navigateByUrl(this.router.serializeUrl(tree)).then();
  }

  public enableIndependent() {
    if(this.organization?.slug) {
      this.organizationsService.enableIndependent(this.organization.slug).subscribe(res => {
        if(res.status === HttpStatusCode.Ok) {} {
          this.organizationsService.organization.set(res.body?.data);
        }
      });
    }
  }

  protected readonly console = console;
  protected readonly JSON = JSON;
}
