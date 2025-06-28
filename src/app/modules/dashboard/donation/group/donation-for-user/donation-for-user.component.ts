import {Component} from '@angular/core';
import {DateFilterComponent} from "@app/components/date-filter/date-filter.component";
import {MatTableModule} from "@angular/material/table";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButton} from "@angular/material/button";
import {OrderService} from "@services/order/order.service";
import {E_ORDER_STATUS, Order} from "@app/interfaces/ApiInterface";
import {DashboardLayoutComponent} from "@modules/dashboard/components/dashboard-layout/dashboard-layout.component";

interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  standalone: true,
  selector: 'os-donation-for-user',
  imports: [
    DateFilterComponent,
    MatTableModule,
    MatTooltipModule,
    MatButton,
    DashboardLayoutComponent
  ],
  templateUrl: './donation-for-user.component.html',
  styleUrl: './donation-for-user.component.scss',
})
export class DonationForUserComponent {
  dataSource: Order[] = [];

  constructor(
    private readonly orderService: OrderService
  ) {
    this.orderService.getList({status: E_ORDER_STATUS.NEW}).subscribe(res => {
      if(res.body?.records) {
        this.dataSource = res.body?.records;
      }
    })
  }
}
