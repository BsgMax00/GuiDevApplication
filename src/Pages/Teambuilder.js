import PokemonCard from "../Components/PokemonCard";

import { useContext } from "react";
import { ModalContext } from "../Context/ModalContext";
import { PokemonContext } from "../Context/PokemonContext";

const TeamBuilder = () => {
    const { partyData, setPartyData } = useContext(PokemonContext)
    const { showModal, setShowModal } = useContext(ModalContext);

    const Add = () => {
        setPartyData((prevPartyData) => {
            const newPartyData = [...prevPartyData]
            const newIndex = newPartyData.findIndex(item => item === "");
    
            if (newIndex !== -1) {
                newPartyData[newIndex] = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10057.png";
            }

            return newPartyData
        });
    };

    return (
        <div>
            <div className="mx-4" style={{height: "90vh"}}>
                <div className="d-flex align-items-center h-100">
                    <div className="row  w-100">
                        {partyData.map((Url, index) => {
                            return <PokemonCard key={index} imageUrl={Url}/>
                        })}
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