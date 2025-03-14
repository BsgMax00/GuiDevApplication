import TeamviewerBanner from "../Teamviewer/TeamviewerBanner";

import { useContext } from "react";
import { PartyContext } from "../../Context/PartyContext";

const TeamviewerBody = () => {
    const { allPartyData } = useContext(PartyContext)

    return (
        <div className="m-4">
            <div className="d-flex">
                <div className="container-fluid">
                    <div className="row">
                        {allPartyData.length !== 0 ? (
                            allPartyData.map((party, index) => {
                                return <TeamviewerBanner key={index} party={party}/>
                            })
                        ) : (
                            <center>
                                <h3>You currently have no teams saved.</h3>
                            </center>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamviewerBody;