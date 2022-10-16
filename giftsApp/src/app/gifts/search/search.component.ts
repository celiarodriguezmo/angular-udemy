import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiftsService } from '../services/gifts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',

})
export class SearchComponent {


  constructor (private giftsService: GiftsService ) {}


  @ViewChild('txtSearch') txtSearch!: ElementRef <HTMLInputElement>;


  buscar(){
    
    const value = this.txtSearch.nativeElement.value;

    if (value.trim().length === 0){
      return;
    }

    this.giftsService.searchGifts (value);

    this.txtSearch.nativeElement.value = '';
  }

}
