import Pokemon from "../Classes/Pokemon"

export const serviceGetPokemonData = async() => {
    try{
        const response = await fetch("http://localhost:4000/pokemon");
        if (!response.ok) {throw new Error("something went wrong in fetching all pokemon. (http://localhost:4000/pokemon)")};
        const data = await response.json();

        const convertedPokemonData = data.map(pokemon => 
            new Pokemon(pokemon.id, pokemon.name, pokemon.imageUrl, pokemon.type)
        );

        return convertedPokemonData
    }
    catch(error) {
        console.log(error)
    };
};