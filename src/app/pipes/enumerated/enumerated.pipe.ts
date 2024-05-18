import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'enumerated',
    standalone: true
})
export class EnumeratedPipe implements PipeTransform {

    transform(value: Object, filter?: { pick?: string[], omit?: string[] }): string[] {
        const values = Object.values(value);
        if(filter?.pick) {
            return values.filter(v => filter?.pick?.includes(v));
        } else if(filter?.omit) {
            return values.filter(v => filter?.omit?.includes(v));
        } else {
            return values;
        }
    }

}
