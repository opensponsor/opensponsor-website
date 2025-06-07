import {AfterViewInit, Component, inject, ViewChild} from '@angular/core';
import {AsyncPipe, NgClass, NgIf} from "@angular/common";
import {MatRadioModule} from "@angular/material/radio";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatExpansionModule, MatExpansionPanel} from "@angular/material/expansion";
import {MatIcon} from "@angular/material/icon";
import {E_ORGANIZATION_TYPE, Licenses, Organization} from "@app/interfaces/ApiInterface";
import {MatFormField, MatLabel, MatPrefix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {Platform} from "@angular/cdk/platform";
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
  MatOption
} from "@angular/material/autocomplete";
import {MatChipGrid, MatChipInput, MatChipInputEvent, MatChipRemove, MatChipRow} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {Observable} from "rxjs";
import {MatSelect} from "@angular/material/select";
import {LicensesService} from "@services/licenses/licenses.service";
import {MatButton} from "@angular/material/button";
import {RequiredHintComponent} from "@app/components/required-hint/required-hint.component";
import {OrganizationsService} from "@services/organizations/organizations.service";
import {SnackBarService} from "@services/snack-bar/snack-bar.service";
import {Router} from "@angular/router";
import {LogoComponent} from "@app/components/logo/logo.component";

@Component({
  selector: 'os-form',
  imports: [
    NgClass,
    MatRadioModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatIcon,
    NgIf,
    MatFormField,
    MatInput,
    MatLabel,
    MatPrefix,
    AsyncPipe,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatChipGrid,
    MatChipInput,
    MatChipRemove,
    MatChipRow,
    MatOption,
    MatSelect,
    MatButton,
    RequiredHintComponent,
    LogoComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements AfterViewInit {
  @ViewChild("codePanel")
  public codePanel!: MatExpansionPanel;

  @ViewChild("communityPanel")
  public communityPanel!: MatExpansionPanel;

  public urlOrigin = '';
  public communityTypeControl: FormControl<'code' | 'community' | null> = new FormControl("code");
  licenses: Licenses[] = [];

  public formGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(64),
    ]),
    legalName: new FormControl(null, [
      Validators.minLength(4),
      Validators.maxLength(64),
    ]),
    slug: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(64),
    ]),
    website: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(64),
    ]),
    licenses: new FormControl(null, [
      Validators.required,
      Validators.minLength(64),
      Validators.maxLength(64),
    ]),
    tags: new FormControl(""),
    introduce: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(200),
    ]),
    previousEvents: new FormControl(null, [
      Validators.minLength(4),
      Validators.maxLength(200),
    ]),
    additionalLicenses: new FormControl(null, [
      Validators.minLength(4),
      Validators.maxLength(1000),
    ]),
    // 成员数量
    amountOfMembers: new FormControl(null, [
      Validators.minLength(10),
    ]),
    type: new FormControl(E_ORGANIZATION_TYPE.COMMUNITY),
  });

  tags: Set<string> = new Set([]);

  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  announcer = inject(LiveAnnouncer);
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined = undefined;

  constructor(
    private platform: Platform,
    private licensesService: LicensesService,
    private organizationsService: OrganizationsService,
    private snackBarService: SnackBarService,
    private router: Router,
  ) {
    if (this.platform.isBrowser) {
      this.urlOrigin = [location?.origin, '/'].join("");
    }

    this.setLicenses();
  }

  ngAfterViewInit() {
    this.codePanel?.open();
  }

  /**
   * opensource Community Type
   */
  public selectCodeType() {
    this.communityTypeControl.setValue('code')
    this.codePanel.open();
    this.communityPanel.close();
    this.formGroup.controls.website.addValidators([Validators.required]);
    this.formGroup.controls.website.updateValueAndValidity();

    this.formGroup.controls.amountOfMembers.removeValidators([Validators.required]);
    this.formGroup.controls.amountOfMembers.updateValueAndValidity();
  }

  /**
   * other Community Type
   */
  public selectCommunityType() {
    this.communityTypeControl.setValue('community');
    this.codePanel.close();
    this.communityPanel.open();
    this.formGroup.controls.website.removeValidators([Validators.required]);
    this.formGroup.controls.website.updateValueAndValidity();

    this.formGroup.controls.amountOfMembers.addValidators([Validators.required]);
    this.formGroup.controls.amountOfMembers.updateValueAndValidity();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.add(event.option.viewValue);
    this.formGroup.controls.tags.setValue("");
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our tags
    if (value) {
      this.tags.add(value);
    }
    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tag: string): void {
    this.tags.delete(tag);
    this.announcer.announce(`Removed ${tag}`).then();
  }

  create() {
    if (this.formGroup.valid) {
      const data = this.formGroup.value as Partial<Organization>;
      // data.tags = [...this.tags];
      this.organizationsService.create(data).subscribe(res => {
        this.router.navigate(['/dashboard/', res.body?.data.name]).then(() => {
          this.snackBarService.message({message: '组织已经创建'});
        })
      })
    }
  }

  private setLicenses() {
    this.licensesService.getLicenses().subscribe(res => {
      this.licenses = res.body?.records || [];
    })
  }
}
