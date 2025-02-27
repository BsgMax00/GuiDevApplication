import { createContext, useState } from "react";
import Pokemon from "../Classes/Pokemon";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    const initialPokemonData = Array.from({ length: 150 }, () => new Pokemon("test", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10057.png", "dark / light"));
    
    const [ selectedPartyMember, setSelectedPartyMember ] = useState(0)
    const [ partyData, setPartyData ] = useState(Array(6).fill(""));
    const [ pokemonData, setPokemonData ] = useState(initialPokemonData);

    return (
        <PokemonContext.Provider value={{ selectedPartyMember, setSelectedPartyMember, partyData, setPartyData, pokemonData, setPokemonData }}>
            {children}
        </PokemonContext.Provider>
    );
};