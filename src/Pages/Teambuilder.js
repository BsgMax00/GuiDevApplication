import PokemonCard from "../Components/PokemonCard";
import PokemonModal from "../Components/PokemonModal";

import { useContext } from "react";
import { PokemonContext } from "../Context/PokemonContext";

const TeamBuilder = () => {
    const { partyData } = useContext(PokemonContext);

    const PartyDataEmpty = () => {
        return partyData.every(item => item === "")
    }

    return (
        <div>
            <div className="mx-4" style={{height: "90vh"}}>
                <div className="d-flex align-items-center h-75">
                    <div className="container-fluid">
                        <div className="row">
                            <center className="col-12 mb-3">
                                <h2>Pick your pokemon for your team</h2>
                            </center>
                        </div>
                        <div className="row">
                            {partyData.map((pokemon, index) => {
                                return <PokemonCard key={index} pokemon={pokemon} index={index}/>
                            })}
                        </div>
                    </div>
                </div>
                <div>
                    {!PartyDataEmpty() && (
                        <center>
                            <button>Save Team</button>
                        </center>
                    )}
                </div>
            </div>
                
            <PokemonModal/>
        </div>
    );
};

export default TeamBuilder;