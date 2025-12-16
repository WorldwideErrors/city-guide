import { cities } from "../infrastructure/cities";
import { City } from "./city";

export function getCityByName(name: string): City | null {
    const city = cities.find(city => city.name === name)

    if (!city) {
        return null;
    }

    return city
}