import React, { useContext, useState, useEffect } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null)

    export const AuthProvider = ({children}) => {
        const [authUser, setAuthUser] = useState(null)

        // const getLocalStorageItems = () => {
        //     return JSON.parse(localStorage.getItem('userContext'))
        // }

        // useEffect(() => {
        //     console.log(getLocalStorageItems());
        //     if(getLocalStorageItems()){
        //         setAuthUser(getLocalStorageItems())
        //     }
        // }, [])
        
        return (
            <AuthContext.Provider value={{authUser, setAuthUser}}>
                {children}
            </AuthContext.Provider>
        ) 
    }
    // const value = {
    //     authUser,
    //     setAuthUser,
    //     isLoggedIn, 
    //     setLoggedIn,
    // }    