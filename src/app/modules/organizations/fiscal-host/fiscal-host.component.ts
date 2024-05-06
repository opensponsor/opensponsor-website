import { Component } from '@angular/core';
import {E_ORGANIZATION_TYPE} from "@app/interfaces/ApiInterface";

@Component({
    selector: 'app-fiscal-host',
    templateUrl: './fiscal-host.component.html',
    styleUrl: './fiscal-host.component.scss',
})
export class FiscalHostComponent {
    protected readonly E_ORGANIZATION_TYPE = E_ORGANIZATION_TYPE;
}
