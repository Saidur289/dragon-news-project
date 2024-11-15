import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const [err, setError] = useState({})
  const navigate = useNavigate()
  const {signUpUser, setUser, updateUser} = useContext(AuthContext)
  const handleRegister = e => {
    e.preventDefault()
    const form = e.target 
    const email = form.email.value
    const password = form.password.value
    const name = form.name.value 
    const photo = form.photo.value
    if(name.length < 5){
      setError({...err, name:'name must be 5 character'})
      return;
    }
    if(password.length < 6){
      return setError({...err, password: 'password must be more than 6 character'})
    }

    // console.log(email, password, name, photo);
    // create user function from authProvider
    signUpUser(email, password)
    .then((result) => {
      const user = result.user;
      setUser(user)
      // console.log(user);
      // update profile 
    updateUser({displayName: name, photoURL: photo})
    .then(() => {
      navigate('/')
    })
    .catch((error) => {
      console.log(error);
    })
    })
    .catch((error) => console.log(error))
    

  }
    return (
        <div className="flex min-h-screen justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none shadow-lg p-10">
           <h1 className="font-semibold text-center">Register Your Account</h1>
         <form onSubmit={handleRegister} className="card-body">
           <div className="form-control">
             <label className="label">
               <span className="label-text">Your Name</span>
             </label>
             <input
               type="text"
               placeholder="Name"
               name="name"
               className="input input-bordered"
               required
             />
           </div>
           {err.name && ( <label className="label text-red-500 text-sm">
               <span className="label-text">{err.name}</span>
             </label>
             )}
           <div className="form-control">
             <label className="label">
               <span className="label-text">Photo URL</span>
             </label>
             <input
               type="text"
               name="photo"
               placeholder="photo-url"
               className="input input-bordered"
               required
             />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Email</span>
             </label>
             <input
               type="email"
               name="email"
               placeholder="email"
               className="input input-bordered"
               required
             />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Password</span>
             </label>
             <input
               type="password"
               name="password"
               placeholder="password"
               className="input input-bordered"
               required
             />
              {err.password && ( <label className="label text-red-500 text-sm">
               <span className="label-text">{err.password}</span>
             </label>
             )}
             <label className="label">
               <a href="#" className="label-text-alt link link-hover">
                 Forgot password?
               </a>
             </label>
           </div>
           <div className="form-control mt-6">
             <button className="btn btn-primary">Register</button>
           </div>
         </form>
         <p className="text-center font-semibold">Already Have An Account? <Link className="text-red-500 " to = '/auth/login'>Login</Link></p>
       </div>
      </div>
    );
};

export default Register;