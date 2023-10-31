 import { Link, useLocation } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import useAuth from '../../Hooks/useAuth';
// import { useContext } from 'react';
// import { AuthContext } from '../../Provider/AuthProvider';
// import axios from 'axios';

const Login = () => {
  // const {singIn}= useContext(AuthContext)
  const {singIn}= useAuth()
  const location= useLocation()
  console.log(location);
  // const navigate= useNavigate()
 const handelLogin= e=>{
    e.preventDefault()
    const form=e.target
    const email= form.email.value 
    const password= form.password.value 

    singIn(email,password)
    .then(res=>{
      console.log(res.user);
      const loggedInUser= res.user
      console.log(loggedInUser);
      // const user ={email}
     
      // get access token
    //   axios.post('http://localhost:5000/jwt', user,{withCredentials:true})
    //   .then(res=>{
    //     console.log(res.data);
    //     if(res.data.success){
    //       navigate(location?.state ?location?.state: '/')
    //     }
    //   })

    // }
 })
    .catch(error=>{
      console.log(error);
    })


 }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" mr-8 w-1/2">
         <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelLogin} className="card-body">
          <h1 className="text-3xl text-center font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name='email'
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
                placeholder="password"
                name='password'
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type='submit' className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className='text-center p-3'>New to Cars doctors <Link className='text-orange-600' to={"/singup"}>Sing Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
