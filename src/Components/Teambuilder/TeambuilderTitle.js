import { useContext } from "react";
import { PartyContext } from "../../Context/PartyContext"

const TeambuilderTitle = () => {
    const { isEditing } = useContext(PartyContext)

    return (
        <div className="row">
            <center className="col-12 mb-3">
                {isEditing ? (
                    <h2>Edit your team</h2>
                ) : (
                    <h2>Pick your pokemon for your team</h2>
                )}
            </center>
        </div>
    );
};

export default TeambuilderTitle;