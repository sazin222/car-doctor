import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const SIngUp = () => {
  const {createUser}= useContext(AuthContext)

    const handelSingUp= e=>{
        e.preventDefault()
        const form= e.target 
        const name= form.name.value 
        const email= form.email.value 
        const password= form.password.value 

        console.log(name,email,password);
        createUser(email,password)
        .then(result=>{
            const user= result.user
            console.log(user);
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
            <form onSubmit={handelSingUp} className="card-body">
            <h1 className="text-3xl text-center font-bold">Sing up!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name='name'
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
                  placeholder="email"
                  name='email'
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
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
                <button type='submit' className="btn btn-primary">Sing Up</button>
              </div>
            </form>
            <p className='text-center p-3'>Already have an account?<Link className='text-orange-600' to={"/login"}>Log In</Link></p>
          </div>
        </div>
      </div>
    );
};

export default SIngUp;