import Party from "../Classes/Party"

export const serviceGetPartyData = async() => {
    try{
        const response = await fetch("http://localhost:4000/teams");
        if (!response.ok) {throw new Error("something went wrong in fetching all pokemon. (http://localhost:4000/teams)")};
        const data = await response.json();

        const convertedPartyData = data.map(party => 
            new Party(party.id, party.name, party.team)
        );
        
        return convertedPartyData;
    }
    catch (error){
        console.log(error)
    };
};

export const serviceDeletePartyData = async(party) => {
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
    }
    catch (error){
        throw error;
    };
};

export const servicePostPartyData = async(id, teamName, currentPartyData) => {
    try{
        const settings = {
            method: "POST",
            headers: {
                'Accept': 'applicatiosn/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                id: `${id}`,
                name: teamName,
                team: currentPartyData
            })
        };
        const response = await fetch("http://localhost:4000/teams", settings);
        if (!response.ok) {throw new Error("something went wrong in the post request.")};
    }
    catch(error){
        throw error;
    };
};

export const servicePutPartyData = async(id, teamName, currentPartyData) => {
    try{
        const settings = {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                id: `${id}`,
                name: teamName,
                team: currentPartyData
            })
        };
        const response = await fetch(`http://localhost:4000/teams/${id}`, settings);
        if (!response.ok) {throw new Error("something went wrong in the post request.")};
    }
    catch(error){
        throw error;
    };
};