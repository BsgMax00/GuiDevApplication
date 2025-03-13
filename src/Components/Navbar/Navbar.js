import PokeIcon from '../../Icons/PokeBallIcon.svg'

const Navbar = () => {
    return (
        <nav className="navbar bg-dark py-2">
            <div className="container justify-content-start mx-4">
                <a className="navbar-brand" href="/">
                    <img src={PokeIcon} alt="" width={30} height={30}/>
                </a>
                <div>
                    <a className="nav-link d-inline me-2 text-white" href="/">TeamBuilder</a>
                    <a className="nav-link d-inline mx-2 text-white" href="/TeamViewer">TeamViewer</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;