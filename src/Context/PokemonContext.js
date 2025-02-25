import { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    const [ pokemonData, setPokemonData ] = useState();

    return (
        <PokemonContext.Provider value={{ pokemonData, setPokemonData }}>
            {children}
        </PokemonContext.Provider>
    );
};