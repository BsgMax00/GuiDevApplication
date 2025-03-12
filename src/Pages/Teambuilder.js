import TeambuilderPokemonCard from "../Components/TeambuilderPokemonCard";
import TeambuilderModal from "../Components/TeambuilderModal";

import { useContext, useState, useEffect } from "react";
import { PartyContext } from "../Context/PartyContext";

const TeamBuilder = () => {
    const { allPartyData, currentPartyData, setCurrentPartyData, fetchPartyData } = useContext(PartyContext)
    const [ teamName, setTeamName ] = useState("")

    useEffect(() => {
        setTeamName(`Team #${allPartyData.length + 1}`);
    }, [allPartyData])

    const currentPartyEmpty = () => {
        return currentPartyData.every(item => item === "")
    }

    const getLastPartyId = ()  => {
        const length = allPartyData.length;
        if (length === 0) {
            return -1
        }
        return Number(allPartyData[length - 1].id);
    }

    const saveCurrentParty = async () => {
        try{
            await postData();
            emptyCurrentParty();
            console.log(getLastPartyId() + 1)
            setTeamName(`Team #${getLastPartyId() + 1}`);
        }
        catch (error){
            console.log(error)
        }
    }

    const postData = async () => {
        try{
            const settings = {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    id: `${getLastPartyId() + 1}`,
                    name: teamName,
                    team: currentPartyData
                })
            };
            const response = await fetch("http://localhost:4000/teams", settings)
            if (!response.ok) {throw new Error("something went wrong in the post request.")};

            fetchPartyData();
        }
        catch(error){
            throw error;
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
                                <h2>Pick your pokemon for your team</h2>
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
                        <div>
                            <center>
                                <button onClick={saveCurrentParty}>Save Team</button>
                            </center>
                        </div>
                    )}
                </div>
            </div>
                
            <TeambuilderModal/>
        </>
    );
};

export default TeamBuilder;