import { useContext } from "react";
import { PartyContext } from "../Context/PartyContext";
import TeamviewerBanner from "../Components/TeamviewerBanner";

const Teamviewer = () => {
    const { allPartyData } = useContext(PartyContext)

    return (
        <div className="m-4">
            <div className="d-flex">
                <div className="container-fluid">
                    <div className="row">
                        {allPartyData.map((party) => {
                            return <TeamviewerBanner party={party}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teamviewer;