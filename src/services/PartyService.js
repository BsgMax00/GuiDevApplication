import Party from "../Classes/Party"

import { serviceFetch } from "./BaseService";

export const serviceGetPartyData = async() => {
    const data = await serviceFetch("GET", "http://localhost:4000/teams");

    const convertedPartyData = data.map(party => 
        new Party(party.id, party.name, party.team)
    );
        
    return convertedPartyData;
};

export const serviceDeletePartyData = async(party) => {
    await serviceFetch("DELETE", `http://localhost:4000/teams/${party.id}`)
};

export const servicePostPartyData = async(id, teamName, currentPartyData) => {
    const body = JSON.stringify({ id: `${id}`, name: teamName, team: currentPartyData })
    await serviceFetch("POST", "http://localhost:4000/teams", body)
};

export const servicePutPartyData = async(id, teamName, currentPartyData) => {
    const body = JSON.stringify({id: `${id}`, name: teamName, team: currentPartyData})
    await serviceFetch("PUT", `http://localhost:4000/teams/${id}`, body)
};