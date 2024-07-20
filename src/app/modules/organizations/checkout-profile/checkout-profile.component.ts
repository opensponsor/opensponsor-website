import {Component} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {TierService} from "@services/tier/tier.service";
import {Organization, Tier} from "@app/interfaces/ApiInterface";
import {Platform} from "@angular/cdk/platform";
import {OrganizationsService} from "@services/organizations/organizations.service";
import {AuthService} from "@services/auth/auth.service";
import {FormControl, FormControlName, FormGroup} from "@angular/forms";

type OptionType = {type: 'user' | 'organization'; id: string; name: string; desc: string};

@Component({
  selector: 'app-checkout-profile',
  templateUrl: './checkout-profile.component.html',
  styleUrl: './checkout-profile.component.scss'
})
export class CheckoutProfileComponent {
    public tier: Tier | undefined;
    selected: OptionType | undefined;

    profileSelectOpen = false;

    public profileOptions: OptionType[] = [];
    public organizationOptions: OptionType[] = [];

    public formGroup = new FormGroup({
        name: new FormControl(),
        legalName: new FormControl(),
    })

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly tierService: TierService,
        private readonly platform: Platform,
        private readonly authService: AuthService,
        private readonly organizationsService: OrganizationsService,
    ) {
        if(this.platform.isBrowser) {
            if(this.tierService.tier()) {
                this.tier = this.tierService.tier();
            } else {
                // redirect start
                if(this.activatedRoute.parent?.snapshot?.paramMap) {
                    this.tierService.redirectStep(this.activatedRoute.parent?.snapshot.paramMap as ParamMap, 'start').then()
                }
            }
            this.setProfileOptions();
            this.setOrganizationsOptions();
        }
    }

    private setProfileOptions() {
        const info = this.authService.authInfo();
        if(info) {
            this.profileOptions.push({
                type: 'user',
                id: info.id,
                name: info.username,
                desc: `@${info.username}`,
            })
            this.selected = this.profileOptions[0];
            this.formGroup.controls.name.setValue(this.selected.name);
        }
    }

    private setOrganizationsOptions() {
        this.organizationsService.list({userId: this.authService.authInfo()?.id}).subscribe(res => {
            if(res.status === 200 && res.body?.records.length) {
                res.body?.records.forEach(it => {
                    this.organizationOptions.push({
                        type: 'organization',
                        id: it.id,
                        name: it.name,
                        desc: `@${it.name}`,
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
        this.tierService.redirectStep(this.activatedRoute.parent?.snapshot.paramMap as ParamMap, to).then();
    }
}
