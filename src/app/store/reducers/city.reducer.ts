import { CityActions } from "../actions/city.action";
import { CityAction, initialState } from "../store";

export function cityReducer(state = initialState, action: CityAction) {
    switch (action.type) {
        case CityActions.INCREMENT_POPULATION:
            const incrementState = JSON.parse(JSON.stringify(state));
            const index = incrementState.findIndex((city: any) => city.CityName === action.payload);
            if (index > -1) incrementState[index].Population += 1000000;
            return incrementState;

        case CityActions.DECREMENT_POPULATION: 
            const decrementState = JSON.parse(JSON.stringify(state));
            const i = decrementState.findIndex((city: any) => city.CityName === action.payload);
            if (i > -1) decrementState[i].Population -= 5000000;
            return decrementState;
    
        default:
            return state;
    }

}