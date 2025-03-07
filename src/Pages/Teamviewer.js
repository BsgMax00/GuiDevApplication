import { useContext } from "react";
import { PartyContext } from "../Context/PartyContext";
import TeamviewerBanner from "../Components/TeamviewerBanner";

const Teamviewer = () => {
    const { allPartyData } = useContext(PartyContext)

    return (
        <div>
            <div className="mx-4" style={{ height: "90vh" }}>
                <div className="d-flex">
                    <div className="container-fluid">
                        <div className="row">
                            {allPartyData.map((party, index) => {
                                return <TeamviewerBanner party={party}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teamviewer;