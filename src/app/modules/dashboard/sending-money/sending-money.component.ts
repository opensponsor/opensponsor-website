import {Component} from '@angular/core';
import {MatDividerModule} from "@angular/material/divider";

@Component({
  standalone: true,
  selector: 'os-sending-money',
  templateUrl: './sending-money.component.html',
  imports: [
    MatDividerModule
  ],
  styleUrl: './sending-money.component.scss'
})
export class SendingMoneyComponent {

}
