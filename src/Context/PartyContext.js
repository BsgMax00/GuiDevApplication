import { createContext, useEffect, useState } from "react";

import Party from "../Classes/Party"

export const PartyContext = createContext()

export const PartyProvider = ({ children }) => {
    const [ selectedPartyMember, setSelectedPartyMember ] = useState(0)
    const [ currentPartyData, setCurrentPartyData ] = useState(Array(6).fill(""));
    const [ allPartyData, setAllPartyData ] = useState([]);

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

    useEffect(() => {
        fetchPartyData();
    }, [])

    return (
        <PartyContext.Provider value={{ selectedPartyMember, setSelectedPartyMember, currentPartyData, setCurrentPartyData, allPartyData, setAllPartyData, fetchPartyData }}>
            {children}
        </PartyContext.Provider>
    )
};