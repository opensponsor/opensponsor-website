import {Component, Input} from '@angular/core';
import {Organization} from "@app/interfaces/ApiInterface";
import {MatButton} from "@angular/material/button";

@Component({
  standalone: true,
  selector: 'os-news',
  imports: [
    MatButton
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  @Input({
    required: true,
  })
  organization!: Organization;
}
