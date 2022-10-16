import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class GiftsService {

    private apiKey : string = 'DLqUEDhqC7IGuc1joNJRWXZlpOcDKQd7';

    private _historial : string [] = [];

    public apiResults : any []= [];

    get historial () {
      
      return [...this._historial];
    }

    constructor ( private http: HttpClient ) { }


    searchGifts (query : string = '') {

      query = query.trim().toLowerCase();

      if (!this._historial.includes (query)) {

        this._historial.unshift( query );
        this._historial = this._historial.splice(0,10);
      }

//Peticion al servidor tipo get usando el módulo de '@angular/common/http' llamado HttpClient que en lugar de promesas trabaja con obserbables y en lugar del .then() usa el .suscribe()//

// para usarlo en el archivo services hemos tenido que importar este módulo en el módulo raiz HttpClientModule así '@angular/common/http'//

      this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=DLqUEDhqC7IGuc1joNJRWXZlpOcDKQd7&q= ${ query } &limit=10`)
      .subscribe( (resp : any) => {

        console.log( resp.data );
        this.apiResults = resp.data;

      })

// la manera tradicional de hacer la petición a la api sería esta//

// fetch ('https://api.giphy.com/v1/gifs/search?api_key=DLqUEDhqC7IGuc1joNJRWXZlpOcDKQd7&q=dragon ball&limit=10')
// .then(response => {
//   response.json().then(data => console.log(data))
// })

    }
}
