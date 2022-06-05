import { Action } from '@ngrx/store';

export enum CityActions {
  GET_CITIES = '[City] Get Cities',
  INCREMENT_POPULATION = '[City] Increment Population',
  DECREMENT_POPULATION = '[City] Decrement Population',
}

export class GetCitiesAction implements Action {
  public readonly type = CityActions.GET_CITIES;
}

export class IncrementPopulationAction implements Action {
  public readonly type = CityActions.INCREMENT_POPULATION;
  constructor(public payload: string) {}
}

export class DecrementPopulationAction implements Action {
  public readonly type = CityActions.DECREMENT_POPULATION;
  constructor(public payload: string) {}
}

