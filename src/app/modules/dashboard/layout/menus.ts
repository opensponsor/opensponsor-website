import {E_ORGANIZATION_TYPE} from "@app/interfaces/ApiInterface";

type Menu = {
  label: string;
  link?: string;
  active?: boolean;
  icon: string;
  roles: E_ORGANIZATION_TYPE[];
  children?: (Pick<Menu, 'label' | 'link'> & Partial<Menu>)[]
}

export const menus: Menu[] = [
  {
    label: '概览',
    link: '',
    icon: 'dashboard',
    roles: []
  },
  {
    label: '支出',
    link: '',
    icon: 'paid',
    roles: [
      E_ORGANIZATION_TYPE.ORGANIZATION,
      E_ORGANIZATION_TYPE.COMMUNITY
    ],
    children: [
      {
        label: '费用支持',
        link: 'expends',
      },
    ],
  },
  {
    label: '贡献者',
    link: 'contributor',
    icon: 'apps',
    roles: [
      E_ORGANIZATION_TYPE.ORGANIZATION,
      E_ORGANIZATION_TYPE.COMMUNITY
    ]
  },
  {
    label: '捐款',
    link: '',
    icon: 'group',
    roles: [
      E_ORGANIZATION_TYPE.USER,
      E_ORGANIZATION_TYPE.ORGANIZATION,
      E_ORGANIZATION_TYPE.COMMUNITY
    ],
    children: [
      {
        label: '所有捐款',
        link: 'donation',
      },
    ]
  },
  {
    label: 'Team',
    link: 'team',
    icon: 'group',
    roles: [
      E_ORGANIZATION_TYPE.ORGANIZATION,
      E_ORGANIZATION_TYPE.COMMUNITY
    ]
  },
  {
    label: '贡献等级',
    link: 'tiers',
    icon: 'diamond',
    roles: [
      E_ORGANIZATION_TYPE.ORGANIZATION,
      E_ORGANIZATION_TYPE.COMMUNITY
    ]
  },
  {
    label: '设置',
    icon: 'settings',
    roles: [],
    children: [
      {
        label: '基本信息',
        link: `profile`
      },
      {
        label: '安全',
        link: 'security'
      },
      {
        label: '社交账户',
        link: 'social'
      },
      {
        label: '规则',
        link: ''
      },
      {
        label: '财务证明',
        link: ''
      },
      {
        label: '付款设置',
        link: 'sending-money'
      },
      {
        label: '收款设置',
        link: 'receiving-money',
        roles: [
          E_ORGANIZATION_TYPE.ORGANIZATION,
          E_ORGANIZATION_TYPE.COMMUNITY
        ],
      },
      {
        label: '开发',
        link: 'development',
        roles: [
          E_ORGANIZATION_TYPE.ORGANIZATION,
          E_ORGANIZATION_TYPE.COMMUNITY
        ]
      },
      {
        label: 'webhook',
        link: 'webhook',
        roles: [
          E_ORGANIZATION_TYPE.ORGANIZATION,
          E_ORGANIZATION_TYPE.COMMUNITY
        ]
      },
    ]
  }
];
