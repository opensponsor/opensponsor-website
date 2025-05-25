import {afterNextRender, Component} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'os-organization-search',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './organization-search.component.html',
  styleUrl: './organization-search.component.scss'
})
export class OrganizationSearchComponent {
  public keyword = new FormControl('');

  public constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      const queryParams = new URLSearchParams(params);
      this.keyword.setValue(queryParams.get('w'));
    });
  }

  public doSearch() {
    const s = new URLSearchParams("");
    if (this.keyword.value) {
      this.activatedRoute.queryParams.subscribe(params => {
        const queryParams = new URLSearchParams(params);
        if (this.keyword.value) {
          queryParams.set('w', this.keyword.value);
          this.router.navigateByUrl(`${location.pathname}?${queryParams.toString()}`).then()
        }
      })
    } else {
      this.router.navigate([location.pathname]).then()
    }
  }
}
