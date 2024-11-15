import { Link } from "react-router-dom";
import userIcn from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import icon from '../assets/user.png'


const Navbar = () => {
    const {user, signOutUser} = useContext(AuthContext)
    return (
        <div className="flex justify-between">
           <div>{user && user.email}</div> 
           
           <div className="nav space-x-5">
                <Link to = '/'>Home</Link>
                <Link to = '/'>Carrier</Link>
                <Link to = '/'>About</Link>
            </div>
            <div className="flex items-center gap-2">
              <div>
              {
                    user && user?.email? <div className="flex items-center gap-2">
                     <img src={user?.photoURL} className="w-10 rounded-full" alt="" />
                     <p>{user?.displayName}</p>
                    </div> : <img src={icon} alt="" />
                }
                 </div>
                
               {
                user && user?.email ?  <Link onClick={signOutUser} to = '/auth/login' className="btn btn-ghost py-3">Log Out</Link> :  <Link to = '/auth/login' className="btn btn-ghost py-3">Login</Link>
               }
             
            </div>
        </div>
    );
};

export default Navbar;