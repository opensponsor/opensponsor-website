import {Component} from '@angular/core';
import {MatDividerModule} from "@angular/material/divider";
import {DashboardLayoutComponent} from "@modules/dashboard/components/dashboard-layout/dashboard-layout.component";

@Component({
  standalone: true,
  selector: 'os-sending-money',
  templateUrl: './sending-money.component.html',
  imports: [
    MatDividerModule,
    DashboardLayoutComponent
  ],
  styleUrl: './sending-money.component.scss'
})
export class SendingMoneyComponent {

}
