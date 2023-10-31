import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const CheakOut = () => {
  const services = useLoaderData();
  const { title, _id, price,img } = services;
  const {user}= useContext(AuthContext)
  const handelBookServices= e=>{
    e.preventDefault()

    const form= e.target
    const name= form.name.value 
    const date= form.date.value 
    const email= user?.email
    const amount= form.amount.value

    const order={
        coustomerName: name,
        email,
        img,
        date,
        services: title,
        services_id: _id,
        price: amount

    }
       console.log(order);

       fetch('http://localhost:5000/bookings',{
        method: 'POST',
        headers:
           {
            "Content-Type":"application/json"
           },
         body: JSON.stringify(order)
       })
       .then(res=> res.json())
       .then(data=>{
        console.log(data);
        if(data.insertedId){
            alert('order confirm successfully ')
        }
       })
  }

  return (
    <div>
      <h2 className="text-center text-3xl font-semibold">Book Services: {title}</h2>
        
        <div>
        <form onSubmit={handelBookServices} className="card-body grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Due Amount</span>
                </label>
                <input
                  type="text"
                  name="amount"
                 defaultValue={'$'+price}
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
                <button type="submit" className="btn btn-primary">Order Confirm</button>
              </div>
            </form>
        </div>
          
          </div>
        
  );
};

export default CheakOut;
