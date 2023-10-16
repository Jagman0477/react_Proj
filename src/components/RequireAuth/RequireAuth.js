import { useLocation, Navigate, Outlet } from "react-router-dom"
import useAuth from "../../AuthUse/useAuth"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const RequireAuth = ({ allowedRoles }) => {

    const { authUser } = useContext(AuthContext)
    const location = useLocation() 
    console.log(authUser);

    return(
        allowedRoles?.includes(authUser?.role)
        ?<Outlet/>
        :authUser
            ?<Navigate to='/missing' state={{from: location}} replace />
            :<Navigate to='/login' state={{from: location}} replace />
    )

}

export default RequireAuth;