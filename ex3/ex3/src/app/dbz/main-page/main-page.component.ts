import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent  {


  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  // get personajes():Personaje[]{
  //   return this.DbzService.personajes;
  // }

  agregarNuevoPersonaje( argumento: Personaje){
    
    // this.personajes.push(argumento);
    
  }

  constructor(){

  }

}

// constructor(private DbzService: DbzService){

// }