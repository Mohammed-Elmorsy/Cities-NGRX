import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cities } from '../data/cities';
import { City } from '../store/models/city.model';

@Component({
  selector: 'app-city-grid',
  templateUrl: './city-grid.component.html',
  styleUrls: ['./city-grid.component.css']
})
export class CityGridComponent implements OnInit {
  cities: City[] = cities;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.subscribe((data: any) => cities);
  }

}
