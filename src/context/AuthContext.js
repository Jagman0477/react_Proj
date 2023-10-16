import React, { useContext, useState, useEffect } from "react";
import { createContext } from "react";

const AuthContext = createContext(null)

export const AuthUpdateContext = createContext(null)

    export const AuthProvider = ({children}) => {
        const [authUser, setAuthUser] = useState(null)

        const login = (authUser) => {
            setAuthUser(authUser)
        }

        const logout = () => {
            setAuthUser(null)
        } 
        
        return (
            <AuthContext.Provider value={{authUser, setAuthUser}}>
                {children}
            </AuthContext.Provider>
        ) 
    }

    export const useAuth = () => {
        return useContext(AuthContext)
    } 