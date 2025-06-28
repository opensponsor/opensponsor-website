import {Component, Input} from '@angular/core';

@Component({
  standalone: true,
  selector: 'os-dashboard-layout',
  imports: [],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent {
  @Input({
    required: true,
  })
  public title!: string;
}
