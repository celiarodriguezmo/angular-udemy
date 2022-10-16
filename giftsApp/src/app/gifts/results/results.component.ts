import { Component} from '@angular/core';
import { GiftsService } from '../services/gifts.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'})

export class ResultsComponent {

  get results () {

    return this.giftsService.apiResults;

  }

  constructor (private giftsService: GiftsService ) {}

}
