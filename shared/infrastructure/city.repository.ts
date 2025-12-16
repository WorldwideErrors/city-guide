import { cities } from "./cities";
import { City } from "../domain/city";

export function getCityByName(name: string): City | null {
    const city = cities.find(city => city.name === name)

    if (!city) {
        return null;
    }

    return city
}