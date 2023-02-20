import React, {createContext} from "react";

export const AnchorsContext = createContext()

const AnchorsProvider = ({children}) => {
    const allAnchors = []

    return (
        <AnchorsContext.Provider value={{allAnchors}}>{children}</AnchorsContext.Provider>
    )
}

export default AnchorsProvider