
import React, { createContext, useContext } from 'react'

const AppContext = createContext()

const AppContextProvider = ({ children }) => {
    return (
        <AppContext.Provider value={{ name: "vikas" }}>{children}</AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContextProvider, AppContext, useGlobalContext }