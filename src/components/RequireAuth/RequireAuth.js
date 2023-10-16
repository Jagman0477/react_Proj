import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom"
import { AuthContext, useAuth } from "../../context/AuthContext"
import { useContext, useEffect } from "react"

const RequireAuth = ({ allowedRoles }) => {

    const { authUser, setAuthUser } = useContext(AuthContext)
    const location = useLocation() 
    const navigate = useNavigate()
    console.log(authUser);

    // const refreshContext = async() => {
    //     if(authUser === null){
    //         if(JSON.parse(localStorage.getItem('userContext')) !== undefined || JSON.parse(localStorage.getItem('userContext')) !== null){
    //             await setAuthUser(JSON.parse(localStorage.getItem('userContext')))
    //         } else {
    //             navigate('/login')
    //         }
    //     }
    // }

    // useEffect(() => {
    //     refreshContext()
    // }, [])

    return(
        allowedRoles?.includes(authUser?.role)
        ?<Outlet/>
        :authUser === null || authUser === undefined
            ?<Navigate to='/login' state={{from: location}} replace />
            :<Navigate to='/missing' state={{from: location}} replace />
    )

}

export default RequireAuth;