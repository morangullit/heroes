import { heroes } from "../data/heroes"


export const getHerById = ( id ) => {
    return heroes.find(hero => hero.id === id);
}