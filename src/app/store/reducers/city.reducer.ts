import { cities } from "src/app/data/cities";
import { CityActions } from "../actions/city.action";
import { City } from "../models/city.model";
import { CityAction, initialState } from "../store";

export function cityReducer(state = initialState, action: CityAction) {
    const newState = JSON.parse(JSON.stringify(state)) as City[];

    switch (action.type) {
        case CityActions.INCREMENT_POPULATION:
            const index = newState.findIndex(city => city.CityName === action.payload);
            if (index > -1) newState[index].Population += 1000000;
            return newState;

        case CityActions.DECREMENT_POPULATION:
            const i = newState.findIndex(city => city.CityName === action.payload);
            if (i > -1) newState[i].Population -= 5000000;
            return newState;

        case CityActions.POPULATION_FILTER:
            let citiesClone = JSON.parse(JSON.stringify(cities)) as City[];
            
            citiesClone.forEach((city) => {
                const i = newState.findIndex(c => c.CityName === city.CityName);
                if (i > -1) city.Population = newState[i].Population;
            });

            return citiesClone.filter(city => city.Population >= action.payload);

        default:
            return state;
    }

}