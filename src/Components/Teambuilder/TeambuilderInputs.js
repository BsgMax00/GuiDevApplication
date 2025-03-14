import { useContext } from "react";
import { PartyContext } from "../../Context/PartyContext"
import { useNavigate } from "react-router-dom";

const TeambuilderInput = ({currentPartyId}) => {
    const { currentPartyData, setCurrentPartyData, teamName, setTeamName, isEditing, getLastPartyId, postPartyData, putPartyData } = useContext(PartyContext)
    const navigate = useNavigate()

    const currentPartyEmpty = () => {
        return currentPartyData.every(item => item === "")
    }

    const emptyCurrentParty = () => {
        setCurrentPartyData(Array(6).fill(""))
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

    return (
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
    )

}

export default TeambuilderInput;