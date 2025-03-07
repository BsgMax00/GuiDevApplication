import { useContext } from "react";
import { PartyContext } from "../Context/PartyContext";
import TeamviewerBanner from "../Components/TeamviewerBanner";

const Teamviewer = () => {
    const { allPartyData } = useContext(PartyContext)

    return (
        <div>
            <div className="mx-4" style={{ height: "90vh" }}>
                <div className="d-flex h-100">
                    <div className="container-fluid">
                        <div className="row w-100">
                            {allPartyData.map((party, index) => {
                                return <div className="col-6" style={{ height: "25vh"}} key={index}>{party.name}</div>
                            })}
                            <TeamviewerBanner/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teamviewer;