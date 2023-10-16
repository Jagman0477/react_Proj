import React, { useContext, useState, useEffect } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null)

const getInitState = () => {
    const authUser = localStorage?.getItem('userContext')
    return authUser ? JSON.parse(authUser) : null
}

    export const AuthProvider = ({children}) => {
        const [authUser, setAuthUser] = useState(getInitState)

        const login = (authUser) => {
            setAuthUser(authUser)
        }

        const logout = () => {
            setAuthUser(null)
        } 
        
        return (
            <AuthContext.Provider value={{authUser, setAuthUser, login, logout}}>
                {children}
            </AuthContext.Provider>
        ) 
    }

    export const useAuth = () => {
        return useContext(AuthContext)
    } 