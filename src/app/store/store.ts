import { cities } from "../data/cities";
import { City } from "./models/city.model";

export let initialState: City[] = [
    ...cities
]

export interface CityAction {
    type: string;
    payload?: any;
}

