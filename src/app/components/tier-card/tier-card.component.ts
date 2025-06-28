import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";
import {Tier} from "@app/interfaces/ApiInterface";
import {TranslatePipe} from "@app/pipes/translate/translate.pipe";
import {MatAnchor} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,
  selector: 'os-tier-card',
  imports: [
    NgIf,
    TranslatePipe,
    RouterLink,
    MatAnchor,
  ],
  templateUrl: './tier-card.component.html',
  styleUrl: './tier-card.component.scss'
})
export class TierCardComponent {
  @Input({
    required: true,
  })
  public tier: Partial<Tier> = {};

  @Input({
    required: false
  })
  public readonly: boolean = false;
}
