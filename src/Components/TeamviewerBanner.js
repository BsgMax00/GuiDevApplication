const TeamviewerBanner = ({ party }) => {
    return (
        <div className="col-12 px-0">
            <div className="border border-dark my-1" style={{backgroundColor: "#E8EEEA"}}>
                <div className="d-flex justify-content-between">
                    <div className="mb-2 text-center w-100">{party.name}</div>
                    <div className="ms-auto">test</div>
                    <div className="ms-auto">test2</div>
                </div>
                <div className="row">
                    {party.team.map((team) => {
                        return <img className="col-2" src={team.imageUrl} loading="lazy" alt=""/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default TeamviewerBanner