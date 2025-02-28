import { useContext } from "react";
import { ModalContext } from "../Context/ModalContext";
import { PartyContext } from "../Context/PartyContext";

const PokemonModalCard = ({ pokemon }) => {
    const { setShowModal } = useContext(ModalContext);
    const { selectedPartyMember, setCurrentPartyData } = useContext(PartyContext)

    const AddPokemonToTeam = () => {
        setCurrentPartyData((prevPartyData) => {
            const newPartyData = [...prevPartyData];
            newPartyData[selectedPartyMember] = pokemon;

            return newPartyData;
        })
    }

    return (
        <div className="col-2 p-1">
            <div className="card w-100">
                <div onClick={() => {
                    setShowModal(false);
                    AddPokemonToTeam();
                }}>
                    <img className="card-img-top" src={pokemon.imageUrl} alt={pokemon.name}/>
                </div>
            </div>
        </div>
    )
}

export default PokemonModalCard;