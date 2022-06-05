import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { cities } from '../data/cities';
import { AppState } from '../store/models/app-state.model';
import { City } from '../store/models/city.model';

@Component({
  selector: 'app-city-grid',
  templateUrl: './city-grid.component.html',
  styleUrls: ['./city-grid.component.css']
})
export class CityGridComponent implements OnInit {
  cities$!: Observable<City[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.cities$ = this.store.select(store => store.cities);
  }

}
