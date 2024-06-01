import {Component, inject, Input} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {AsyncPipe, NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";
import {Platform} from "@angular/cdk/platform";
import {MatAutocompleteModule, MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {Observable, startWith, map} from "rxjs";
import {MatChipInputEvent, MatChipsModule} from "@angular/material/chips";
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {OrganizationsService} from "@services/organizations/organizations.service";
import {E_ORGANIZATION_TYPE, Organization} from "@app/interfaces/ApiInterface";

@Component({
    selector: 'app-organization-form',
    standalone: true,
    imports: [
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        NgIf,
        MatButtonModule,
        MatIcon,
        MatTooltip,
        MatAutocompleteModule,
        AsyncPipe,
        MatChipsModule
    ],
    templateUrl: './organization-form.component.html',
    styleUrl: './organization-form.component.scss'
})
export class OrganizationFormComponent {
    @Input({
        required: true,
        transform: (value: E_ORGANIZATION_TYPE) => value
    })
    organizationType: E_ORGANIZATION_TYPE = E_ORGANIZATION_TYPE.COMMUNITY;

    // @Input({
    //     required: true,
    // })
    tags: Set<string> = new Set();

    readonly separatorKeysCodes = [ENTER, COMMA] as const;
    announcer = inject(LiveAnnouncer);
    options: string[] = ['One', 'Two', 'Three'];
    filteredOptions: Observable<string[]>;

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
        type: new FormControl(this.organizationType),
    });

    public urlOrigin = '';

    constructor(
        private readonly platform: Platform,
        private readonly organizationsService: OrganizationsService
    ) {
        if(platform.isBrowser) {
            this.urlOrigin = [location?.origin, '/'].join("");
        }

        this.filteredOptions = this.formGroup.controls.tags.valueChanges.pipe(
            startWith(''),
            map((value: any) => this._filter(value || '')),
        );
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.options.filter(option => option.toLowerCase().includes(filterValue));
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

    public save() {
        if (this.formGroup.valid) {
            const data = this.formGroup.value as Partial<Organization>;
            data.tags = [...this.tags];
            this.organizationsService.create(data).subscribe(res => {
                console.dir(res.body);
            })
        }
    }
}
