import {afterNextRender, Component} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {TierService} from "@services/tier/tier.service";
import {Organization, Tier, User} from "@app/interfaces/ApiInterface";
import {OrganizationsService} from "@services/organizations/organizations.service";
import {AuthService} from "@services/auth/auth.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgClass} from "@angular/common";
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {ClipboardTextComponent} from "@app/components/clipboard-text/clipboard-text.component";
import {CheckoutService} from "@services/checkout/checkout.service";

type OptionType = { type: 'user' | 'organization'; id: string; name: string; desc: string, entity: User | Organization };

@Component({
  selector: 'os-checkout-profile',
  templateUrl: './checkout-profile.component.html',
  imports: [
    MatAnchor,
    MatIconModule,
    NgClass,
    MatInputModule,
    ReactiveFormsModule,
    MatButton,
    ClipboardTextComponent,
  ],
  styleUrl: './checkout-profile.component.scss'
})
export class CheckoutProfileComponent {
  public tier: Tier | undefined;
  selected: OptionType | undefined;

  profileSelectOpen = false;

  public profileOptions: OptionType[] = [];
  public organizationOptions: OptionType[] = [];

  public formGroup = new FormGroup({
    name: new FormControl("", [
      Validators.required
    ]),
    legalName: new FormControl("", [
      Validators.required
    ]),
  })

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly tierService: TierService,
    private readonly authService: AuthService,
    private readonly organizationsService: OrganizationsService,
    private readonly checkoutService: CheckoutService,
  ) {
    afterNextRender(() => {
      this.tierService.tier$.subscribe(t => this.tier = t);
      this.setProfileOptions();
      this.setOrganizationsOptions();
    })
  }

  private setProfileOptions() {
    const info = this.authService.authInfo();
    if (info) {
      this.profileOptions.push({
        type: 'user',
        id: info.id,
        name: info.username,
        desc: `@${info.username}`,
        entity: info
      })
      this.selectProfile(this.profileOptions[0]);
    }
  }

  private setOrganizationsOptions() {
    this.organizationsService.list({userId: this.authService.authInfo()?.id}).subscribe(res => {
      if (res.status === 200 && res.body?.records.length) {
        res.body?.records.forEach(it => {
          this.organizationOptions.push({
            type: 'organization',
            id: it.id,
            name: it.name,
            desc: `@${it.name}`,
            entity: it
          })
        })
      }
    })
  }

  public selectProfile(item: OptionType) {
    this.selected = item;
    this.profileSelectOpen = false;
    this.formGroup.controls.name.setValue(item.name);
  }

  public toLink(to: 'start' | 'summary') {
    if(this.selected && this.formGroup.valid) {
      this.checkoutService.tierCache.set({
        profile: {
          type: this.selected.type,
          profile: this.selected.entity,
          name: this.formGroup.controls.name.value as string,
          legalName: this.formGroup.controls.legalName.value as string
        },
      });
      if(to === 'summary') {
        this.checkoutService.stepDesc.set({
          ...this.checkoutService.stepDesc(),
          checkoutProfile: this.formGroup.controls.legalName.value as string,
        })
        this.tierService.redirectStep(this.activatedRoute.parent?.snapshot.paramMap as ParamMap, to).then();
      } else {
        this.tierService.redirectStep(this.activatedRoute.parent?.snapshot.paramMap as ParamMap, to).then();
      }
    } else {
      this.formGroup.markAllAsTouched();
    }
  }

  protected readonly location = location;
}
