import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Loading";


const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, loading} = useContext(AuthContext)
    if(user && user.email){
        return children
    }
    if(loading){
        return <Loading></Loading>
    }
    return (
       <Navigate state={location.pathname} to = '/auth/login'></Navigate>
    );
};

export default PrivateRoute;