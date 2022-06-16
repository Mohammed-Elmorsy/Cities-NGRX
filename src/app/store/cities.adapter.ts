import { createAdapter } from '@state-adapt/core';
import { cities } from '../data/cities';
import { City } from './models/city.model';

export let initialState: City[] = [...cities];

export interface CityAction {
  type: string;
  payload?: any;
}

export const citiesAdapter = createAdapter<City[]>()({
  incrementPopulation: (cities, name: string) =>
    cities.map((city) =>
      city.CityName !== name ? city : { ...city, Population: city.Population + 1000000 }
    ),
  decrementPopulation: (cities, name: string) =>
    cities.map((city) =>
      city.CityName !== name ? city : { ...city, Population: city.Population - 5000000 }
    ),
  setPopulationFilter: (state, filter: number) => {
    const newState = JSON.parse(JSON.stringify(cities)) as City[];
    let citiesClone = JSON.parse(JSON.stringify(cities)) as City[];
    citiesClone.forEach((city) => {
      const i = newState.findIndex((c) => c.CityName === city.CityName);
      if (i > -1) city.Population = newState[i].Population;
    });
    return citiesClone.filter((city) => city.Population >= filter);
  },
});
