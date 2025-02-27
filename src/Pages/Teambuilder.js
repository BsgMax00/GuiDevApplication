import PokemonCard from "../Components/PokemonCard";
import PokemonModalCard from "../Components/PokemonModalCard";

import { useContext } from "react";
import { ModalContext } from "../Context/ModalContext";
import { PokemonContext } from "../Context/PokemonContext";

const TeamBuilder = () => {
    const { partyData, pokemonData } = useContext(PokemonContext)
    const { showModal, setShowModal } = useContext(ModalContext);

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
                
            {showModal && (
                <div className="modal d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)"}}>
                    <div className="modal-lg modal-dialog modal-dialog-center">
                        <div className="modal-content">
                            <div className="modal-header">
                            <button type="button" className="btn-close position-absolute top-0 end-0 m-2" onClick={() => { setShowModal(false)}}/>
                                <h5 className="modal-title">Which Pokemon do you want to choose?</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    {pokemonData.map((pokemon, index) => {
                                        return <PokemonModalCard key={index} pokemon={pokemon}/>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TeamBuilder;