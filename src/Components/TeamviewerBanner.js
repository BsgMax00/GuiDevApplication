import pokeball from "../Icons/pokeball.png"
import editButton from "../Icons/edit.png"
import deleteButton from "../Icons/delete.png"
import TeamviewerIcon from "./TeamviewerIcons"

import { useContext } from "react"
import { PartyContext } from "../Context/PartyContext"

const TeamviewerBanner = ({ party }) => {
    const { fetchPartyData } = useContext(PartyContext)
    const DeleteParty = async () => {
        try{
            await deleteData();
        }
        catch (error){
            console.log(error)
        }
    }

    const deleteData = async () => {
        try{
            const settings = {
                method: "DELETE",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            };
            const response = await fetch(`http://localhost:4000/teams/${party.id}`, settings);
            if (!response.ok) {throw new Error("something went wrong in the delete request.");};
            
            fetchPartyData();
        }
        catch (error){
            throw error;
        }
    }

    return (
        <div className="col-12 px-0">
            <div className="border border-dark my-1" style={{backgroundColor: "#E8EEEA"}}>
                <div className="d-flex justify-content-between">
                    <h3 className="m-2 text-center w-100 flex-grow-1">{party.name}</h3>
                    <TeamviewerIcon Icon={editButton}/>
                    <TeamviewerIcon Icon={deleteButton} onClick={DeleteParty}/>
                </div>
                <div className="container-fluid px-0">
                    <div className="row g-2 m-2">
                        {party.team.map((team, index) => {
                            return <img key={index} className="col-2" src={team.imageUrl || pokeball} loading="lazy" alt=""/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamviewerBanner