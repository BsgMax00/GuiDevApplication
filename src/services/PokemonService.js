import Pokemon from "../Classes/Pokemon"
import { serviceFetch } from "./BaseService";

export const serviceGetPokemonData = async() => {
    const data = await serviceFetch("GET", "http://localhost:4000/pokemon")
    
    const convertedPokemonData = data.map(pokemon => 
        new Pokemon(pokemon.id, pokemon.name, pokemon.imageUrl, pokemon.type)
    );
        
    return convertedPokemonData;
};