import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  imports: [
    RouterLink,
    NgForOf,
    MatAnchor
  ],
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  public createList = [
    {
      logo: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg",
      link: "/create/open-source-community",
      text: "创建开源社区",
      description: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg",
    },
    {
      logo: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg",
      link: "/create/community",
      text: "创建其他任何社区",
      description: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg",
    },
    {
      logo: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg",
      link: "/create/fiscal-host",
      text: "创建财务托管机构",
      description: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg",
    },
  ];
}
