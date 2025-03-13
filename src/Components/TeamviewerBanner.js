import pokeball from "../Icons/pokeball.png"
import editButton from "../Icons/edit.png"
import deleteButton from "../Icons/delete.png"
import TeamviewerIcon from "./TeamviewerIcons"

import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { PartyContext } from "../Context/PartyContext"

const TeamviewerBanner = ({ party }) => {
    const { deleteData } = useContext(PartyContext)
    let navigate = useNavigate();

    const DeleteParty = async () => {
        try{
            await deleteData(party);
        }
        catch (error){
            console.log(error)
        }
    }

    return (
        <div className="col-12 px-0">
            <div className="border border-dark my-1" style={{backgroundColor: "#E8EEEA"}}>
                <div className="d-flex justify-content-between">
                    <h3 className="m-2 text-center w-100 flex-grow-1">{party.name}</h3>
                    <TeamviewerIcon Icon={editButton} onClick={() => navigate(`/${party.id}`, { replace: true })}/>
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