import { Pipe, PipeTransform } from '@angular/core';
import {enumTranslate} from "@app/languages/zh_cn/enumTranslate";

@Pipe({
  name: 'translate',
  standalone: true
})
export class TranslatePipe implements PipeTransform {

    transform(value: unknown, ...args: unknown[]): unknown {
        return enumTranslate[String(value)] || value;
    }

}
