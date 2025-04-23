import {Component, Input} from '@angular/core';
import {Organization} from "@app/interfaces/ApiInterface";

@Component({
  selector: 'os-news',
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  @Input({
    required: true,
  })
  organization!: Organization;
}
