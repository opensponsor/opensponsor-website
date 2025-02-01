import {Component, Input} from '@angular/core';
import {HttpResult} from "@services/http/http.service";
import {MatPaginator} from "@angular/material/paginator";

@Component({
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
  result: HttpResult<any> | undefined;
}
