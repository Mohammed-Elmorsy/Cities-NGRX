import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { cities } from '../data/cities';
import { PopulationFilterAction } from '../store/actions/city.action';
import { AppState } from '../store/models/app-state.model';
import { City } from '../store/models/city.model';

@Component({
  selector: 'app-city-grid',
  templateUrl: './city-grid.component.html',
  styleUrls: ['./city-grid.component.css']
})
export class CityGridComponent implements OnInit {
  cities$!: Observable<City[]>;
  population: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.cities$ = this.store.select(store => store.cities);
  }

  filterCities() {
    this.store.dispatch(new PopulationFilterAction(this.population));
  }

  formatLabel(value: number) {
    if (value >= 1000000) {
      return Math.round(value / 1000000) + 'M'
    }

    return value;
  }

}
