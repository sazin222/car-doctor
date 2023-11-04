// import { useEffect, useState } from "react";
import useServices from "../../../Hooks/useServices";
import ServiceCard from "./ServiceCard";

const Services = () => {
    // const [services, setServices]= useState([])

    // useEffect(()=>{
    //     fetch('https://car-doctor-server-v.vercel.app')
    //     .then(res=> res.json())
    //     .then(data=> setServices(data))
    // },[])
    const services= useServices()
    return (
        <div>
            <div className="text-center mt-5 space-y-3"> 
                <h2 className="text-3xl font-bold text-orange-600">Our services</h2>
                <h2 className="text-5xl">Our services Area</h2>
                <p>Offering recommendations for books, movies, and other media.</p>


            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                
                {
                    services.map(service=> <ServiceCard
                    key={service._id}
                    service={service}
                    >

                    </ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;