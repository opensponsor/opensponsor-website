import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";
import {Platform} from "@angular/cdk/platform";
import {MatChipsModule} from "@angular/material/chips";
import {OrganizationsService} from "@services/organizations/organizations.service";
import {E_ORGANIZATION_TYPE, Organization, Tags} from "@app/interfaces/ApiInterface";
import {SnackBarService} from "@services/snack-bar/snack-bar.service";
import {Router} from "@angular/router";
import {RequiredHintComponent} from "@app/components/required-hint/required-hint.component";
import slugify from "limax";
import {TagsFieldComponent} from "@app/forms/tags-field/tags-field.component";

@Component({
  standalone: true,
  selector: 'os-organization-form',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIcon,
    MatTooltip,
    MatChipsModule,
    RequiredHintComponent,
    TagsFieldComponent
  ],
  templateUrl: './organization-form.component.html',
  styleUrl: './organization-form.component.scss'
})
export class OrganizationFormComponent implements OnInit {
  @Input({
    required: true,
    transform: (value: E_ORGANIZATION_TYPE) => value
  })
  organizationType: E_ORGANIZATION_TYPE = E_ORGANIZATION_TYPE.COMMUNITY;

  // update organization
  @Input({
    required: false,
  })
  data?: Partial<Organization>;

  public formGroup = new FormGroup({
    name: new FormControl<string>('', {
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(64),
      ],
      asyncValidators: [
        () => {
          return new Promise((resolve) => {
            const n = this.formGroup.controls.name.getRawValue();
            if(n) {
              this.formGroup.controls.slug.setValue(slugify(n))
            }
            resolve({});
          })
        }
      ]
    }),
    legalName: new FormControl<string>('', [
      Validators.minLength(4),
      Validators.maxLength(64),
    ]),
    slug: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(64),
    ]),
    website: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(64),
    ]),
    tags: new FormControl<string[]>([]),
    introduce: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(200),
    ]),
    type: new FormControl(this.organizationType),
  });

  public urlOrigin = '';

  constructor(
    private readonly platform: Platform,
    private readonly snackBarService: SnackBarService,
    private readonly router: Router,
    private readonly organizationsService: OrganizationsService
  ) {
    if (this.platform.isBrowser) {
      this.urlOrigin = [location?.origin, '/'].join("");
    }
  }

  ngOnInit() {
    const ignore = ['tags'];
    if (this.data) {
      const record: Record<string, any> = this.data;
      for (let controlsKey in this.formGroup.controls) {
        if (record[controlsKey] && this.formGroup.get(controlsKey) && !ignore.includes(controlsKey)) {
          this.formGroup.get(controlsKey)?.setValue(record[controlsKey]);
        }
      }

      // this.data.tags?.forEach(t => this.tags.add(t))
      this.formGroup.controls.name.disable();
    }

    if(this.organizationType === E_ORGANIZATION_TYPE.ORGANIZATION) {
      this.formGroup.controls.type.setValue(this.organizationType);
      this.formGroup.controls.legalName.addValidators([Validators.required]);
    }
  }

  public save() {
    if (this.formGroup.valid) {
      if (this.data) {
        const data = {...this.data, ...this.formGroup.value} as Organization;
        data.tags = this.formGroup.controls.tags.value?.map(tag => ({
          name: tag
        })) as Tags[];

        this.organizationsService.update(data).subscribe(res => {
          this.snackBarService.message({message: '更新完成'})
        })
      } else {
        const data = this.formGroup.value as Partial<Organization>;
        data.tags = this.formGroup.controls.tags.value?.map(tag => ({
          name: tag
        })) as Tags[];
        this.organizationsService.create(data).subscribe(res => {
          this.router.navigate(['/dashboard/', res.body?.data.name]).then(() => {
            this.snackBarService.message({message: '组织已经创建'});
          })
        })
      }
    }
  }

  protected readonly E_ORGANIZATION_TYPE = E_ORGANIZATION_TYPE;
}
