import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Gift, SearchGiftsResponse } from '../interface/gifts.interfaces';

@Injectable({
  providedIn: 'root'
})

export class GiftsService {

    private apiKey : string = 'DLqUEDhqC7IGuc1joNJRWXZlpOcDKQd7';
    private serviceURL : string = 'https://api.giphy.com/v1/gifs';
    private _historial : string [] = [];

    public apiResults : Gift []= [];

    //damos el tipado a la data que viene de la api como : Gift[] esta información proviene de la interfaz que hemos creado//

    get historial () {
      
      return [...this._historial];
    }

    constructor ( private http: HttpClient ) { 

      if ( localStorage.getItem ('historial') ) {

        this._historial = JSON.parse ( localStorage.getItem('historial')! );
        this.apiResults = JSON.parse ( localStorage.getItem('apiResults')! )

      }
      else{

        this._historial = [];
        this.apiResults = [];
      }

    }

    searchGifts (query : string = '') {

      query = query.trim().toLowerCase();

      if (!this._historial.includes (query)) {

        this._historial.unshift( query );
        this._historial = this._historial.splice(0,10);

        //almacenar en local storage//

        localStorage.setItem('historial' , JSON.stringify( this._historial) );
      
      }

//Peticion al servidor tipo get usando el módulo de '@angular/common/http' llamado HttpClient que en lugar de promesas trabaja con obserbables y en lugar del .then() usa el .suscribe()//

// para usarlo en el archivo services hemos tenido que importar este módulo en el módulo raiz HttpClientModule así '@angular/common/http'//

      //modificamos el tipado de la respuesta del get introduciendo <SearchGiftsresponse> que es lo que nos devuelve la interfaz creada para typescript de la data de la api//


      const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

      this.http.get<SearchGiftsResponse> (`${this.serviceURL}/search`,{params} )
      .subscribe( (resp) => {
        this.apiResults = resp.data;
        localStorage.setItem('apiResults' , JSON.stringify( this.apiResults) )
        
      })

// la manera tradicional de hacer la petición a la api sería esta//

// fetch ('https://api.giphy.com/v1/gifs/search?api_key=DLqUEDhqC7IGuc1joNJRWXZlpOcDKQd7&q=dragon ball&limit=10')
// .then(response => {
//   response.json().then(data => console.log(data))
// })

    }
}
