import { Action } from '@ngrx/store';

export enum CityActions {
  INCREMENT_POPULATION = '[City] Increment Population',
  DECREMENT_POPULATION = '[City] Decrement Population',
  POPULATION_FILTER = '[City] Population Filter'
}

export class PopulationFilterAction implements Action {
  public readonly type = CityActions.POPULATION_FILTER;
  constructor(public payload: number) {}
}

export class IncrementPopulationAction implements Action {
  public readonly type = CityActions.INCREMENT_POPULATION;
  constructor(public payload: string) {}
}

export class DecrementPopulationAction implements Action {
  public readonly type = CityActions.DECREMENT_POPULATION;
  constructor(public payload: string) {}
}

