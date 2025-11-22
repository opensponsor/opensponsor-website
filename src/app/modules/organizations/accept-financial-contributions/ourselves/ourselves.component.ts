import { Component } from '@angular/core';
import {
  SettingPaymentMethodsComponent
} from "@app/forms/setting-payment-methods/setting-payment-methods.component";
import {DebitCard} from "@app/interfaces/ApiInterface";

@Component({
  selector: 'os-ourselves',
  imports: [
    SettingPaymentMethodsComponent,
  ],
  templateUrl: './ourselves.component.html',
  styleUrl: './ourselves.component.scss'
})
export class OurselvesComponent {
  public onSave(data: Partial<DebitCard>) {
    console.dir(data);
  }
}
