import {Component} from '@angular/core';
import {MatChip, MatChipSet} from "@angular/material/chips";
import {MatFormField, MatInput, MatLabel, MatSuffix} from "@angular/material/input";
import {OrganizationsService} from "@services/organizations/organizations.service";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {E_ORGANIZATION_TYPE, Organization} from "@app/interfaces/ApiInterface";
import {HttpResultOfArray} from "@services/http/http.service";
import {EmptyStatesComponent} from "@app/components/empty-states/empty-states.component";
import {OrgCardComponent} from "@app/components/org-card/org-card.component";
import {PaginatorComponent} from "@app/components/paginator/paginator.component";
import {SkeletonComponent} from "@app/components/skeleton/skeleton.component";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";

@Component({
  selector: 'os-host',
  imports: [
    MatChip,
    MatChipSet,
    MatFormField,
    MatInput,
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
    EmptyStatesComponent,
    OrgCardComponent,
    PaginatorComponent,
    SkeletonComponent,
    MatIcon,
    MatSuffix,
    MatIconButton,
    MatButton
  ],
  templateUrl: './host.component.html',
  styleUrl: './host.component.scss'
})
export class HostComponent {
  public searchWorld = new FormControl<string>("");
  public httpResult: HttpResultOfArray<Organization[]> | null = null;
  public loading = false;

  constructor(
    protected readonly organizationsService: OrganizationsService,
  ) {
    this.search();
  }

  public search() {
    this.loading = true;
    if(this.searchWorld.value) {
      this.organizationsService.list({name: this.searchWorld.value, type: E_ORGANIZATION_TYPE.FISCAL_HOST}).subscribe({
        next: res => {
          this.loading = false;
          this.httpResult = res.body;
        },
        error: err => {
          this.loading = false;
        }
      })
    } else {
      this.organizationsService.list({type: E_ORGANIZATION_TYPE.FISCAL_HOST}).subscribe({
        next: res => {
          this.loading = false;
          this.httpResult = res.body;
        },
        error: err => {
          this.loading = false;
        }
      })
    }
  }
}
