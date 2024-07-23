import {Component} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: 'app-organization-search',
    standalone: true,
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule
    ],
    templateUrl: './organization-search.component.html',
    styleUrl: './organization-search.component.scss'
})
export class OrganizationSearchComponent {

}
