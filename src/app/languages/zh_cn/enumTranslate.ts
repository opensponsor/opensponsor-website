import {E_AMOUNT_TYPE, E_IBAN_CURRENCIES, E_INTERVAL} from "@app/interfaces/ApiInterface";

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
}
