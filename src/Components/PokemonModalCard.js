import { useContext } from "react";
import { ModalContext } from "../Context/ModalContext";
import { PokemonContext } from "../Context/PokemonContext";

const PokemonModalCard = ({ imagUrl = ""}) => {
    const { setShowModal } = useContext(ModalContext);
    const { selectedPartyMember, setPartyData } = useContext(PokemonContext)

    const AddPokemonToTeam = () => {
        setPartyData((prevPartyData) => {
            const newPartyData = [...prevPartyData];
            newPartyData[selectedPartyMember] = imagUrl;

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
                    <img className="card-img-top" src={imagUrl} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default PokemonModalCard;