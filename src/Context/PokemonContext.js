import { createContext, useEffect, useState } from "react";
import Pokemon from "../Classes/Pokemon";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {    
    const [ selectedPartyMember, setSelectedPartyMember ] = useState(0)
    const [ partyData, setPartyData ] = useState(Array(6).fill(""));
    const [ pokemonData, setPokemonData ] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await fetch("http://localhost:4000/pokemon");
                const data = await response.json();

                const convertedPokemonData = data.map(pokemon => 
                    new Pokemon(pokemon.id, pokemon.name, pokemon.imageUrl, pokemon.type)
                );

                console.log("fetched pokemon data")
                setPokemonData(convertedPokemonData)
            }
            catch( error ) {
                console.log(error)
            }
        }

        fetchData();
    }, [])

    return (
        <PokemonContext.Provider value={{ selectedPartyMember, setSelectedPartyMember, partyData, setPartyData, pokemonData, setPokemonData }}>
            {children}
        </PokemonContext.Provider>
    );
};