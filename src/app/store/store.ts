import { cities } from "../data/cities";
import { CityActions } from "./actions/city.action";
import { City } from "./models/city.model";

export let initialState: City[] = {
    ...cities
}

export interface CityAction {
    type: string;
    payload?: string;
}

