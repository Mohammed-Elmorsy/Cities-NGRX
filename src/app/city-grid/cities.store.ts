import { Injectable } from '@angular/core';
import { AdaptCommon, Source } from '@state-adapt/core';
import { citiesAdapter, initialState } from '../store/cities.adapter';

@Injectable({ providedIn: 'root' })
export class CitiesStore {
  grow$ = new Source<string>('[City] grow$');
  nuke$ = new Source<string>('[City] nuke$');
  populationFilterChange$ = new Source<number>('[City] populationFilterChange$');

  store = this.adapt.init(['cities', citiesAdapter, initialState], {
    incrementPopulation: this.grow$,
    decrementPopulation: this.nuke$,
    setPopulationFilter: this.populationFilterChange$,
  });

  constructor(private adapt: AdaptCommon<any>) {}
}
