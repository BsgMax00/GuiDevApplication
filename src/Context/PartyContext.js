import { createContext, useEffect, useState } from "react";

import Party from "../Classes/Party"

export const PartyContext = createContext()

export const PartyProvider = ({ children }) => {
    const [ selectedPartyMember, setSelectedPartyMember ] = useState(0)
    const [ currentPartyData, setCurrentPartyData ] = useState(Array(6).fill(""));
    const [ allPartyData, setAllPartyData ] = useState([]);
    const [ teamName, setTeamName ] = useState("")

    const getLastPartyId = ()  => {
        const length = allPartyData.length;
        if (length === 0) {
            return -1
        }
        return Number(allPartyData[length - 1].id);
    }

    const fetchPartyData = async() => {
        try{
            const response = await fetch("http://localhost:4000/teams");
            if (!response.ok) {throw new Error("something went wrong in fetching all pokemon. (http://localhost:4000/teams)")};
            const data = await response.json();

            const convertedPartyData = data.map(party => 
                new Party(party.id, party.name, party.team)
            );
            
            setAllPartyData(convertedPartyData)
        }
        catch (error){
            console.log(error)
        };
    };

    const deleteData = async (party) => {
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
        };
    };

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
            const response = await fetch("http://localhost:4000/teams", settings);
            if (!response.ok) {throw new Error("something went wrong in the post request.")};

            fetchPartyData();
        }
        catch(error){
            throw error;
        };
    };

    const putData = async (currentPartyId) => {
        try{
            const settings = {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    id: `${currentPartyId}`,
                    name: teamName,
                    team: currentPartyData
                })
            };
            const response = await fetch(`http://localhost:4000/teams/${currentPartyId}`, settings);
            if (!response.ok) {throw new Error("something went wrong in the post request.")};

            fetchPartyData();
        }
        catch(error){
            throw error;
        };
    };

    useEffect(() => {
        fetchPartyData();
    }, [])

    return (
        <PartyContext.Provider value={{ selectedPartyMember, setSelectedPartyMember, currentPartyData, setCurrentPartyData, allPartyData, setAllPartyData, teamName, setTeamName, getLastPartyId, fetchPartyData, deleteData, postData, putData }}>
            {children}
        </PartyContext.Provider>
    )
};