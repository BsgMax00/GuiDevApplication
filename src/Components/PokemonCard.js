import PlusIcon from "../icons/PlusIcon.png"

import { useContext } from "react";
import { ModalContext } from "../Context/ModalContext";

const PokemonCard = ({ imageUrl = "" }) => {
    const { setShowModal } = useContext(ModalContext);

    return (
        <div className="col-2">
            <div onClick={(e) => {e.preventDefault(); setShowModal(true);}}>
                <div className="card">
                    {imageUrl ? (
                        <div style={{height: "286px", backgroundColor: "#E8EEEA"}}>
                            <img className="card-img-top" src={imageUrl} alt=""/>
                        </div>
                    ) : (
                        <div className="d-flex justify-content-center align-items-center" style={{height: "339px", backgroundColor: "#E8EEEA"}}>
                            <img style={{height: "50%", width: "60%"}} src={PlusIcon} alt=""/>
                        </div>
                    )}
                    {imageUrl && (
                        <div style={{backgroundColor: "#DCE5DF"}}>
                            <div className="card-title text-center border-top pt-1 mb-0">
                                title
                            </div>
                            <div className="card-Test text-center">
                                test / test
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;