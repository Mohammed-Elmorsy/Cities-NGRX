import { Component } from '@angular/core';
import { CitiesStore } from './cities.store';

@Component({
  selector: 'app-city-grid',
  templateUrl: './city-grid.component.html',
  styleUrls: ['./city-grid.component.css'],
})
export class CityGridComponent {
  populationFilterChange$ = this.store.populationFilterChange$;
  cities$ = this.store.store.state$;
  population: number = 0;

  constructor(private store: CitiesStore) {}

  formatLabel(value: number) {
    if (value >= 1000000) {
      return Math.round(value / 1000000) + 'M';
    }

    return value;
  }
}
