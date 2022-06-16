import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  DecrementPopulationAction,
  IncrementPopulationAction,
} from 'src/app/store/actions/city.action';
import { City } from 'src/app/store/models/city.model';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.css'],
})
export class CityCardComponent implements OnInit {
  @Input() city!: City;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  incrementPopulation(cityName: string) {
    this.store.dispatch(new IncrementPopulationAction(cityName));
  }

  decrementPopulation(cityName: string) {
    this.store.dispatch(new DecrementPopulationAction(cityName));
  }
}
