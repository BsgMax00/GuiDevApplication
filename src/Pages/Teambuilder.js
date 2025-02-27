import PokemonCard from "../Components/PokemonCard";
import PokemonModal from "../Components/PokemonModal";

import { useContext } from "react";
import { PokemonContext } from "../Context/PokemonContext";

const TeamBuilder = () => {
    const { partyData } = useContext(PokemonContext);

    return (
        <div>
            <div className="mx-4" style={{height: "90vh"}}>
                <div className="d-flex align-items-center h-100">
                    <div className="row  w-100">
                        <center className="col-12 mb-3">
                            <h2>Pick your pokemon for your team</h2>
                        </center>
                        {partyData.map((pokemon, index) => {
                            return <PokemonCard key={index} pokemon={pokemon} index={index}/>
                        })}
                    </div>
                </div>
            </div>
                
            <PokemonModal/>
        </div>
    );
};

export default TeamBuilder;