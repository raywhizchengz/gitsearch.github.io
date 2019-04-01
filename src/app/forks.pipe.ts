import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forks'
})
export class ForksPipe implements PipeTransform {

  transform(value: number, args?: any){
    if(value < 5){
      return value + "forks may mean that the User is a junior developer"
    }
    else{
      return value + "forks may mean that the  User is an experienced developer"
    }
  }

}
