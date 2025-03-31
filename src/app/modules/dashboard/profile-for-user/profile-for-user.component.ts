import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RequiredHintComponent} from "@app/components/required-hint/required-hint.component";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {AsyncPipe} from "@angular/common";
import {MatChipsModule} from "@angular/material/chips";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {E_SEX} from "@app/interfaces/ApiInterface";
import {enumTranslate} from "@app/languages/zh_cn/enumTranslate";

@Component({
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
    RequiredHintComponent,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatIcon
  ],
  templateUrl: './profile-for-user.component.html',
  styleUrl: './profile-for-user.component.scss'
})
export class ProfileForUserComponent {
  public formGroup = new FormGroup({
    username: new FormControl<string>('', [
      Validators.required,
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
    sex: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(64),
    ]),
  });

  constructor(
    // private u: User
  ) {}

  protected readonly E_SEX = E_SEX;
  protected readonly enumTranslate = enumTranslate;
}
