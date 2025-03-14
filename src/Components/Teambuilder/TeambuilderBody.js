import TeambuilderPokemonCard from "../Teambuilder/TeambuilderPokemonCard"
import TeambuilderInput from "./TeambuilderInputs";

import { useContext, useEffect } from "react";
import { PartyContext } from "../../Context/PartyContext"
import { useParams } from "react-router-dom";
import TeambuilderTitle from "./TeambuilderTitle";

const TeambuilderBody = () => {
    const { allPartyData, currentPartyData, setCurrentPartyData, setTeamName, setIsEditing, getLastPartyId } = useContext(PartyContext)
    const {currentPartyId } = useParams()

    useEffect(() => {
        const partyToEdit = allPartyData.find(item => item.id === currentPartyId)
        if (partyToEdit && allPartyData.length !== 0){
            setCurrentPartyData(partyToEdit.team)
            setTeamName(partyToEdit.name)
            setIsEditing(true)
        }
        else {
            setTeamName(`Team #${getLastPartyId() + 2}`);
            setIsEditing(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allPartyData])

    return (
        <>
            <div className="mx-4" style={{height: "90vh"}}>
                <div className="d-flex align-items-center h-75">
                    <div className="container-fluid">
                        <TeambuilderTitle/>
                        <div className="row">
                            {currentPartyData.map((pokemon, index) => {
                                return <TeambuilderPokemonCard key={index} pokemon={pokemon} index={index}/>
                            })}
                        </div>
                    </div>
                </div>
                    
                <TeambuilderInput currentPartyId={currentPartyId}/>
            </div>
        </>
    );
};

export default TeambuilderBody;