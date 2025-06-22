import {Component} from '@angular/core';
import {DateFilterComponent} from "@app/components/date-filter/date-filter.component";
import {MatTableModule} from "@angular/material/table";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButton} from "@angular/material/button";
import {OrderService} from "@services/order/order.service";
import {E_ORDER_STATUS, Order} from "@app/interfaces/ApiInterface";
import {DatePipe} from "@angular/common";
import {RouterLink} from "@angular/router";
import {TranslatePipe} from "@app/pipes/translate/translate.pipe";

interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'os-donation-for-user',
  imports: [
    DateFilterComponent,
    MatTableModule,
    MatTooltipModule,
    MatButton,
    DatePipe,
    RouterLink,
    TranslatePipe
  ],
  templateUrl: './donation-for-user.component.html',
  styleUrl: './donation-for-user.component.scss',
})
export class DonationForUserComponent {
  displayedColumns: (keyof Order)[] = ['whenCreated', 'totalAmount', "currency", 'organization'];
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
