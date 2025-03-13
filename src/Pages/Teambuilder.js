import TeambuilderPokemonCard from "../Components/Teambuilder/TeambuilderPokemonCard";
import TeambuilderModal from "../Components/Teambuilder/modal/TeambuilderModal";

import { useContext, useState, useEffect } from "react";
import { PartyContext } from "../Context/PartyContext";
import { useNavigate, useParams } from "react-router-dom";

const TeamBuilder = () => {
    const { allPartyData, currentPartyData, setCurrentPartyData, teamName, setTeamName, getLastPartyId, postPartyData, putPartyData } = useContext(PartyContext)
    const [ isEditing, setIsEditing ] = useState(false)
    const {currentPartyId } = useParams()
    const navigate = useNavigate()

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
    }, [allPartyData, currentPartyId, setCurrentPartyData, setTeamName, getLastPartyId])

    const currentPartyEmpty = () => {
        return currentPartyData.every(item => item === "")
    }

    const saveCurrentParty = async () => {
        try{
            if (isEditing){
                await putPartyData(currentPartyId);
            }
            else {
                await postPartyData();
            }
            emptyCurrentParty();
            setTeamName(`Team #${getLastPartyId() + 1}`);
        }
        catch (error){
            console.log(error)
        }
    }

    const emptyCurrentParty = () => {
        setCurrentPartyData(Array(6).fill(""))
    }

    return (
        <>
            <div className="mx-4" style={{height: "90vh"}}>
                <div className="d-flex align-items-center h-75">
                    <div className="container-fluid">
                        <div className="row">
                            <center className="col-12 mb-3">
                            {isEditing ? (
                                <h2>Edit your team</h2>
                            ) : (
                                <h2>Pick your pokemon for your team</h2>
                            )}
                            </center>
                        </div>
                        <div className="row">
                            {currentPartyData.map((pokemon, index) => {
                                return <TeambuilderPokemonCard key={index} pokemon={pokemon} index={index}/>
                            })}
                        </div>
                    </div>
                </div>
                
                <div>
                    <center>
                        <input value={teamName} onChange={e => setTeamName(e.target.value)}/>
                    </center>
                    {!currentPartyEmpty() && teamName !== "" && (
                        <center>
                            <button onClick={() => {saveCurrentParty(); navigate("/Teamviewer");}}>Save Team</button>
                        </center>
                    )}
                </div>
            </div>
                
            <TeambuilderModal/>
        </>
    );
};

export default TeamBuilder;