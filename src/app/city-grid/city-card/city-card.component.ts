import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/store/models/city.model';
import { CitiesStore } from '../cities.store';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.css'],
})
export class CityCardComponent implements OnInit {
  @Input() city!: City;
  grow$ = this.store.grow$;
  nuke$ = this.store.nuke$;

  constructor(private store: CitiesStore) {}

  ngOnInit(): void {}
}
