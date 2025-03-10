import pokeball from "../Icons/pokeball.png"

const TeamviewerBanner = ({ party }) => {
    return (
        <div className="col-12 px-0">
            <div className="border border-dark my-1" style={{backgroundColor: "#E8EEEA"}}>
                <div className="d-flex justify-content-between">
                    <h3 className="m-2 text-center w-100">{party.name}</h3>
                    <div className="ms-auto">test</div>
                    <div className="ms-auto">test2</div>
                </div>
                <div className="container-fluid px-0">
                    <div className="row g-2 m-2">
                        {party.team.map((team) => {
                            return <img className="col-2" src={team.imageUrl || pokeball} loading="lazy" alt=""/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamviewerBanner