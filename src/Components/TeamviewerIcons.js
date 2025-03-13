const TeamviewerIcon = ({ Icon, onClick }) => {
    return (
        <div className="ms-auto px-2 d-flex align-items-center">
            <img src={Icon} loading="lazy" alt="" style={{ height: "2em", width: "auto"}} onClick={() => onClick()}/>
        </div>
    )
}

export default TeamviewerIcon