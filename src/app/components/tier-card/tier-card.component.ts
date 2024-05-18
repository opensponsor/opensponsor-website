import {Component, Input} from '@angular/core';
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {E_AMOUNT_TYPE, E_INTERVAL, Tier} from "@app/interfaces/ApiInterface";
import {TranslatePipe} from "@app/pipes/translate/translate.pipe";
import {MatButton} from "@angular/material/button";

@Component({
    selector: 'app-tier-card',
    standalone: true,
    imports: [
        JsonPipe,
        NgForOf,
        NgIf,
        TranslatePipe,
        MatButton
    ],
    templateUrl: './tier-card.component.html',
    styleUrl: './tier-card.component.scss'
})
export class TierCardComponent {
    @Input({
        required: true,
    })
    public tier: Tier = {};

    protected readonly E_AMOUNT_TYPE = E_AMOUNT_TYPE;
    protected readonly E_INTERVAL = E_INTERVAL;
}
