import { CityActions } from "../actions/city.action";
import { CityAction, initialState } from "../store";

export function cityReducer(state = initialState, action: CityAction) {
    switch (action.type) {
        case CityActions.INCREMENT_POPULATION:
            const incrementState = [ ...state ];
            const index = incrementState.findIndex(city => city.CityName === action.payload);
            if (index > -1) incrementState[index].Population += 1000000;
            console.log('incrementState', incrementState)
            return incrementState;

        case CityActions.DECREMENT_POPULATION: 
            const decrementState = [ ...state ];
            const i = decrementState.findIndex(city => city.CityName === action.payload);
            if (i > -1) decrementState[i].Population += 1000000;
            console.log('decrementState', decrementState)

            return decrementState;
    
        default:
            console.log('state', state)

            return state;
    }

}