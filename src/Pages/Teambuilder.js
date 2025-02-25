import PokemonCard from "../Components/PokemonCard";

import { useState, useContext } from "react";
import { ModalContext } from "../Context/ModalContext";

const TeamBuilder = () => {
    const [Test, setTest] = useState([])
    const { showModal, setShowModal } = useContext(ModalContext);

    const Add = () => {
        setTest(Test => [...Test, "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10057.png"])
    }

    return (
        <div>
            <div className="mx-4" style={{height: "90vh"}}>
                <div className="d-flex align-items-center h-100">
                    <div className="row  w-100">
                        <PokemonCard imageUrl={Test[0]}/>
                        <PokemonCard imageUrl={Test[1]}/>
                        <PokemonCard imageUrl={Test[2]}/>
                        <PokemonCard imageUrl={Test[3]}/>
                        <PokemonCard imageUrl={Test[4]}/>
                        <PokemonCard imageUrl={Test[5]}/>
                    </div>
                </div>
                <button onClick={Add}>
                    test test test
                </button>
            </div>
                
            {showModal && (
                <div className="modal d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)"}}>
                    <div className="modal-dialog modal-dialog-center">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Which Pokemon do you want to choose?</h5>
                            </div>
                            <div className="modal-body">
                                test
                            </div>
                            <div className="modal-footer">
                                <button onClick={() => {setShowModal(false)}}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TeamBuilder;