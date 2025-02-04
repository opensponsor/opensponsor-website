import {Component} from '@angular/core';
import {MatTabsModule} from "@angular/material/tabs";
import {ForPhoneNumberComponent} from "@modules/user/for-phone-number/for-phone-number.component";
import {ForEmailComponent} from "@modules/user/for-email/for-email.component";
import {ForSmsCodeComponent} from "@modules/user/for-sms-code/for-sms-code.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'os-login',
  templateUrl: './login.component.html',
  imports: [
    MatTabsModule,
    ForPhoneNumberComponent,
    ForEmailComponent,
    ForSmsCodeComponent,
    NgOptimizedImage,
  ],
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
