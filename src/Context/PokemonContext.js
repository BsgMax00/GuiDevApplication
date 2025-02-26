import { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    const [ selectedPartyMember, setSelectedPartyMember ] = useState(0)
    const [ partyData, setPartyData ] = useState(Array(6).fill(""));
    const [ pokemonData, setPokemonData ] = useState(Array(20).fill("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10057.png"));

    return (
        <PokemonContext.Provider value={{ selectedPartyMember, setSelectedPartyMember, partyData, setPartyData, pokemonData, setPokemonData }}>
            {children}
        </PokemonContext.Provider>
    );
};