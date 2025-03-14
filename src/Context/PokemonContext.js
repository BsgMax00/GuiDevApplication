import { serviceGetPokemonData } from "../services/PokemonService";
import { createContext, useEffect, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {    
    const [ pokemonData, setPokemonData ] = useState([]);

    const getPokemonData = async() => {
        const data = await serviceGetPokemonData();
        setPokemonData(data);
    }

    useEffect(() => {
        getPokemonData();
    }, [])

    return (
        <PokemonContext.Provider value={{ pokemonData, setPokemonData }}>
            {children}
        </PokemonContext.Provider>
    );
};