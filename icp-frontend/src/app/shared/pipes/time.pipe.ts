import { Pipe, PipeTransform } from '@angular/core'
import { pipe } from 'rxjs';
@Pipe({
    name: 'timeRefactor'
})
export class TimeRefactorPipe implements PipeTransform {
     private character:any=':'
     private position:any=2
    transform(value: any, ...args: any[]) {
        return [value.slice(0, this.position), this.character, value.slice(this.position)].join('');
    }
}