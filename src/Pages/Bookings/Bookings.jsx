/* eslint-disable no-undef */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingsRow from "./BookingsRow";
// import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure= useAxiosSecure()

  // const URL = `http://localhost:5000/bookings?email=${user?.email}`;
  const URL = `/bookings?email=${user?.email}`;
  useEffect(() => {
    axiosSecure.get(URL)
    .then(res=>{
      setBookings(res.data)
    })
    // fetch(URL,{credentials:'include'})
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setBookings(data);
    //   });
  }, [URL,axiosSecure]);

  const handelDelete= id=>{
    const procedd= confirm('are you want to delete')
    if(procedd){
      fetch(`http://localhost:5000/bookings/${id}`,{
        method: 'DELETE',

      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if(data.deletedCount>0){
            alert('Deleted Successfully')
            const remaining= bookings.filter(booking=> booking._d !== id) 
            setBookings(remaining)
        }
      })
    }
  }

  const handelConfirm = id=>{
    fetch(`http://localhost:5000/bookings/${id}`,{
        method: 'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({status:'confirm'})
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount>0){
            const remaing= bookings.filter(booking=>booking._id!==id)
            const updated= bookings.find(booking=>booking._id===id)
            updated.status= 'confirm'
            const newBookings= [updated,...remaing]
            setBookings(newBookings)
        }
    })
  }


  return (
    <div>
      <h2 className="text-4xl">Your Bookings: {bookings.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Services</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            
           {
            bookings.map(booking=> <BookingsRow
            key={booking._id} booking={booking}
            handelDelete={handelDelete}
            handelConfirm={handelConfirm}
            ></BookingsRow>)
           }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
