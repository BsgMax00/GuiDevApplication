import PlusIcon from "../Icons/PlusIcon.png"

import { useContext } from "react";
import { ModalContext } from "../Context/ModalContext";
import { PartyContext } from "../Context/PartyContext";

const TeambuilderPokemonCard = ({ pokemon, index }) => {
    const { setCurrentPartyData, setSelectedPartyMember } = useContext(PartyContext)
    const { setShowModal } = useContext(ModalContext);

    const DeletePokemonFromTeam = () => {
        setCurrentPartyData((prevPartyData) => {
            const newPartyData = [...prevPartyData];
            newPartyData[index] = "";

            return newPartyData;
        })
    }

    return (
        <div className="col-2">
            <div className="card" onClick={(e) => {
                    e.preventDefault();
                    setShowModal(true);
                    setSelectedPartyMember(index);
                }}>
                {pokemon.imageUrl ? (
                    <div className="d-flex align-items-center" style={{height: "286px", backgroundColor: "#E8EEEA"}}>
                        <button type="button" className="btn-close position-absolute top-0 end-0 m-2" onClick={(e) => {e.stopPropagation(); DeletePokemonFromTeam()}}/>
                        <img className="card-img-top" src={pokemon.imageUrl} alt="" loading="lazy"/>
                    </div>
                ) : (
                    <div className="d-flex justify-content-center align-items-center" style={{height: "339px", backgroundColor: "#E8EEEA"}}>
                        <img style={{height: "50%", width: "60%"}} src={PlusIcon} alt="" loading="lazy"/>
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
    );
};

export default TeambuilderPokemonCard;