import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

    transform(value: string, esMayuscula: boolean = true): string {
        return (esMayuscula) ? value.toUpperCase() : value.toLowerCase();
    }

}