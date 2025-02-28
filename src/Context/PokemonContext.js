import { createContext, useEffect, useState } from "react";
import Pokemon from "../Classes/Pokemon";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {    
    const [ pokemonData, setPokemonData ] = useState([]);

    useEffect(() => {
        const fetchPokemonData = async() => {
            try{
                const response = await fetch("http://localhost:4000/pokemon");
                if (!response.ok) {throw new Error("something went wrong in fetching all pokemon. (http://localhost:4000/pokemon)")};
                const data = await response.json();

                const convertedPokemonData = data.map(pokemon => 
                    new Pokemon(pokemon.id, pokemon.name, pokemon.imageUrl, pokemon.type)
                );

                console.log("FETCH ME THEIR SOULS (pokemon)")
                setPokemonData(convertedPokemonData)
            }
            catch( error ) {
                console.log(error)
            };
        };

        fetchPokemonData();
    }, [])

    return (
        <PokemonContext.Provider value={{ pokemonData, setPokemonData }}>
            {children}
        </PokemonContext.Provider>
    );
};