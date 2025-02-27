import PlusIcon from "../Icons/PlusIcon.png"

import { useContext } from "react";
import { ModalContext } from "../Context/ModalContext";
import { PokemonContext } from "../Context/PokemonContext";

const PokemonCard = ({ pokemon, index }) => {
    const { setPartyData, setSelectedPartyMember } = useContext(PokemonContext)
    const { setShowModal } = useContext(ModalContext);

    const DeletePokemonFromTeam = () => {
        setPartyData((prevPartyData) => {
            const newPartyData = [...prevPartyData];
            newPartyData[index] = "";

            return newPartyData;
        })
    }

    return (
        <div className="col-2">
            <div onClick={(e) => {
                    e.preventDefault();
                    setShowModal(true);
                    setSelectedPartyMember(index);
                }}>
                <div className="card">
                    {pokemon.imageUrl ? (
                        <div style={{height: "286px", backgroundColor: "#E8EEEA"}}>
                            <button type="button" className="btn-close position-absolute top-0 end-0 m-2" onClick={(e) => {e.stopPropagation(); DeletePokemonFromTeam()}}/>
                            <img className="card-img-top" src={pokemon.imageUrl} alt=""/>
                        </div>
                    ) : (
                        <div className="d-flex justify-content-center align-items-center" style={{height: "339px", backgroundColor: "#E8EEEA"}}>
                            <img style={{height: "50%", width: "60%"}} src={PlusIcon} alt=""/>
                        </div>
                    )}
                    {pokemon.imageUrl && (
                        <div style={{backgroundColor: "#DCE5DF"}}>
                            <div className="card-title text-center border-top pt-1 mb-0">
                                {pokemon.name}
                            </div>
                            <div className="card-Test text-center">
                                {pokemon.type}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;