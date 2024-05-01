import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
    public createList = [
        {
            logo: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg",
            link: "/organizations/create/open-source",
            text: "创建开源社区",
            description: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg",
        },
        {
            logo: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg",
            link: "/organizations/create/community",
            text: "创建其他任何社区",
            description: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg",
        },
        {
            logo: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg",
            link: "/organizations/create/fiscal-host",
            text: "创建财务托管机构",
            description: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg",
        },
    ];
}
