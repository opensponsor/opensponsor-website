import {E_AMOUNT_TYPE, E_IBAN_CURRENCIES, E_INTERVAL, E_TIER_TYPE} from "@app/interfaces/ApiInterface";

export const enumTranslate: Record<string, string> = {
    [E_INTERVAL.ONETIME]: "一次性",
    [E_INTERVAL.MONTH]: "每月",
    [E_INTERVAL.YEAR]: "每年",
    [E_INTERVAL.FLEXIBLE]: "弹性的",

    [E_AMOUNT_TYPE.FIXED]: "固定金额",
    // [E_AMOUNT_TYPE.FLEXIBLE]: "弹性的",


    [E_IBAN_CURRENCIES.CNY]: "人民币",
    [E_IBAN_CURRENCIES.USD]: "美元",
    [E_IBAN_CURRENCIES.RUB]: "卢布",

    [E_TIER_TYPE.GENERIC]: "通用",
    [E_TIER_TYPE.MEMBERSHIP]: "成员贡献",
    [E_TIER_TYPE.DONATION]: "捐赠",
    [E_TIER_TYPE.PRODUCT]: "产品",
    [E_TIER_TYPE.SERVICE]: "服务",
}
