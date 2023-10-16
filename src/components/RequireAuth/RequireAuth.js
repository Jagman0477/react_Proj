import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

const RequireAuth = ({ allowedRoles }) => {

    const authUser = useAuth()
    const location = useLocation() 
    console.log(authUser);

    return(
        allowedRoles?.includes(authUser?.role)
        ?<Outlet/>
        :authUser
            ?<Navigate to='/login' state={{from: location}} replace />
            :<Navigate to='/missing' state={{from: location}} replace />
    )

}

export default RequireAuth;