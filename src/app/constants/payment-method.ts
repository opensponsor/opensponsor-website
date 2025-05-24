export type PaymentMethod = 'Alipay' | 'WechatPay' | 'UnionPay';

export const PaymentMethodOptions: {name: PaymentMethod, label: string; icon: string}[] = [
  {
    label: '支付宝',
    name: 'Alipay',
    icon: 'https://mdn.alipayobjects.com/huamei_llciku/afts/img/A*ofPZSqIRTxYAAAAAAAAAAAAADsTiAQ/original',
  },
  {
    label: '微信',
    name: 'WechatPay',
    icon: 'https://gtimg.wechatpay.cn/core/favicon.ico',
  },
  // {
  //   label: '银联',
  //   name: 'UnionPay',
  //   icon: 'https://m.unionpayintl.com/favicon.ico',
  // }
]
