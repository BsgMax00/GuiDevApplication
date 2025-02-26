import { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    const [ partyData, setPartyData ] = useState(Array(6).fill(""));
    const [ pokemonData, setPokemonData ] = useState([]);

    return (
        <PokemonContext.Provider value={{ partyData, setPartyData, pokemonData, setPokemonData }}>
            {children}
        </PokemonContext.Provider>
    );
};