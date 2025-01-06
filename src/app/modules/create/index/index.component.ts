import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  imports: [
    RouterLink,
    NgForOf,
    MatAnchor,
    NgOptimizedImage
  ],
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  public createList = [
    {
      logo: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
      link: "/create/opensource-community",
      text: "创建开源社区",
      description: "开源项目",
    },
    {
      logo: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
      link: "/create/community",
      text: "创建其他任何社区",
      description: "其他项目",
    }
  ];
}
