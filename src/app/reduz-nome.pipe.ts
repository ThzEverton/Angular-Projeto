import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduzNome',
  standalone: true
})
export class ReduzNomePipe implements PipeTransform {

  transform(texto:string): string {
    if(!texto){
      return"";

    }
    const nomes=texto.split(' ');
    const primeiroNome = nomes[0];
    const ultimoNome = nomes[nomes.length - 1];
    return `${primeiroNome} ${ultimoNome[0]}.`;
  }

}
