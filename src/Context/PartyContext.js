import { serviceGetPartyData, serviceDeletePartyData, servicePostPartyData, servicePutPartyData } from "../services/PartyService";
import { createContext, useEffect, useState } from "react";

export const PartyContext = createContext()

export const PartyProvider = ({ children }) => {
    const [ selectedPartyMember, setSelectedPartyMember ] = useState(0)
    const [ currentPartyData, setCurrentPartyData ] = useState(Array(6).fill(""));
    const [ allPartyData, setAllPartyData ] = useState([]);
    const [ teamName, setTeamName ] = useState("")
    const [ isEditing, setIsEditing ] = useState(false)

    const getLastPartyId = ()  => {
        const length = allPartyData.length;
        if (length === 0) {
            return -1
        }
        return Number(allPartyData[length - 1].id);
    }

    const getPartyData = async() => {
        const data = await serviceGetPartyData();
        setAllPartyData(data)
    };

    const deletePartyData = async(party) => {
        await serviceDeletePartyData(party);
        getPartyData();
    };

    const postPartyData = async() => {
        await servicePostPartyData(getLastPartyId() + 1, teamName, currentPartyData);
        getPartyData();
    };

    const putPartyData = async(currentPartyId) => {
        await servicePutPartyData(currentPartyId, teamName, currentPartyData)
        getPartyData();
    }

    useEffect(() => {
        getPartyData();
    }, [])

    return (
        <PartyContext.Provider value={{ selectedPartyMember, setSelectedPartyMember, currentPartyData, setCurrentPartyData, allPartyData, setAllPartyData, teamName, setTeamName,isEditing, setIsEditing, getLastPartyId, getPartyData, deletePartyData, postPartyData, putPartyData }}>
            {children}
        </PartyContext.Provider>
    )
};