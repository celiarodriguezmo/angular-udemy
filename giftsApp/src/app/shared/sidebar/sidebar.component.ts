import { Component } from '@angular/core';
import { GiftsService } from 'src/app/gifts/services/gifts.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  
})
export class SidebarComponent {

  constructor (private giftsService: GiftsService) {}

  get historial () {

    return this.giftsService.historial;

  }

  search (argumento:string) {

    this.giftsService.searchGifts( argumento);

  }

}
