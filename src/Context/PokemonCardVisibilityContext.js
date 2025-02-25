import { createContext, useState } from "react";

export const PokemonCardVisibilityContext = createContext();

export const PokemonCardVisibilityProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <PokemonCardVisibilityContext.Provider value={{ showModal, setShowModal }}>
            {children}
        </PokemonCardVisibilityContext.Provider>
    );
};
