import TeambuilderModalCard from "./TeambuilderModalCard";

import { useContext } from "react";
import { ModalContext } from "../Context/ModalContext";
import { PokemonContext } from "../Context/PokemonContext";

const TeambuilderModal = () => {
    const { pokemonData } = useContext(PokemonContext)
    const { showModal, setShowModal } = useContext(ModalContext);

    if (showModal){
        return (
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
                                    return <TeambuilderModalCard key={index} pokemon={pokemon}/>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TeambuilderModal