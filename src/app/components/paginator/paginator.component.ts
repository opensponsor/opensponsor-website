import {Component, Input} from '@angular/core';
import {HttpResultOfArray} from "@services/http/http.service";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  standalone: true,
  selector: 'os-paginator',
  imports: [
    MatPaginator
  ],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {
  @Input({
    required: true,
  })
  result: HttpResultOfArray<any> | undefined;
}
