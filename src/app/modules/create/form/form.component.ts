import { Component } from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import {MatRadioModule} from "@angular/material/radio";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatExpansionModule, MatExpansionPanel} from "@angular/material/expansion";
import {MatIcon} from "@angular/material/icon";
import {E_ORGANIZATION_TYPE} from "@app/interfaces/ApiInterface";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-form',
  imports: [
    NgClass,
    MatRadioModule,
    MatExpansionModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    MatIcon,
    NgIf,
    MatFormField,
    MatHint,
    MatInput,
    MatLabel,
    MatTooltip,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  public communityTypeControl: FormControl<'code' | 'community' | null> = new FormControl("code");

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
    tags: new FormControl(""),
    introduce: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(200),
    ]),
    type: new FormControl(E_ORGANIZATION_TYPE.COMMUNITY),
  });

  public selectCodeType({code, community}: {code: MatExpansionPanel, community: MatExpansionPanel}) {
    this.communityTypeControl.setValue('code')
    code.open();
    community.close();
  }

  public selectCommunityType({code, community}: {code: MatExpansionPanel, community: MatExpansionPanel}) {
    this.communityTypeControl.setValue('community');
    code.close();
    community.open();
  }
}
