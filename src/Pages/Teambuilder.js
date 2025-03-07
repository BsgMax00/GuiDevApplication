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

    const saveCurrentParty = async () => {
        try{
            await postData();
            emptyCurrentParty();
            setTeamName(`Team #${allPartyData.length + 1}`);
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
                    id: allPartyData.length,
                    name: teamName,
                    team: currentPartyData
                })
            };
            const response = await fetch("http://localhost:4000/teams", settings)
            if (!response.ok) {throw new Error("something went wrong in the post request.")};
            const data = await response.json()

            console.log(data);
            fetchPartyData();
        }
        catch(error){
            throw error
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