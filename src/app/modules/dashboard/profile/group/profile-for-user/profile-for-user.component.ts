import {AfterViewInit, Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RequiredHintComponent} from "@app/components/required-hint/required-hint.component";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatChipsModule} from "@angular/material/chips";
import {E_SEX, UpdateUser} from "@app/interfaces/ApiInterface";
import {enumTranslate} from "@app/languages/zh_cn/enumTranslate";
import {UserService} from "@services/user/user.service";
import {AuthService} from "@services/auth/auth.service";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {MatIcon} from "@angular/material/icon";
import slugify from "limax";
import {resetFormFields} from "@app/utils/reset-form-fields";
import {SnackBarService} from "@services/snack-bar/snack-bar.service";
import {DialogService} from "@services/dialog/dialog.service";
import {DashboardLayoutComponent} from "@modules/dashboard/components/dashboard-layout/dashboard-layout.component";
import {HttpStatusCode} from "@angular/common/http";

@Component({
  standalone: true,
  selector: 'os-profile-for-user',
  imports: [
    RequiredHintComponent,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatIcon,
    DashboardLayoutComponent,
  ],
  templateUrl: './profile-for-user.component.html',
  styleUrl: './profile-for-user.component.scss'
})
export class ProfileForUserComponent implements AfterViewInit {
  public formGroup = new FormGroup< Required<Record<(keyof UpdateUser), FormControl>> >({
    username: new FormControl<string>("", [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(64),
    ]),
    slug: new FormControl<string>({value: '', disabled: true}, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(64),
    ]),
    website: new FormControl<string>('', [
      Validators.minLength(4),
      Validators.maxLength(64),
    ]),
    sex: new FormControl<E_SEX | null>(null),
  });

  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
    private readonly snackBarService: SnackBarService,
    private readonly dialogService: DialogService,
  ) {
  }

  ngAfterViewInit() {
    this.authService.getAuthUser().subscribe(res => {
      if(res.status === HttpStatusCode.Ok && res.body?.data) {
        this.formGroup.setValue({
          username: res.body?.data.username,
          slug: res.body?.data.slug,
          sex: res.body?.data.sex,
          website: res.body?.data.website,
        })
      }
    })
  }

  public submit(): void {
    if(this.formGroup.valid) {
      resetFormFields(this.formGroup.controls);
      this.userService.update(this.formGroup.getRawValue()).subscribe((res) => {
        if(res.status === HttpStatusCode.Ok && res.body) {
          this.snackBarService.message({ message: res.body.message })
        }
      });
    } else {
      console.dir(this.formGroup.errors);
    }
  }

  public confirmModifySlug() {
    this.dialogService.confirm({title: '确定要修改 "URL路径"', message: 'URL路径是您唯一访问路径，修改后可能影响已经存在的访问链接'}).afterClosed().subscribe(ok => {
      if(ok) {
        this.formGroup.controls.slug.enable()
      }
    })
  }

  protected readonly E_SEX = E_SEX;
  protected readonly enumTranslate = enumTranslate;
  protected readonly String = String;
}
