import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true ,
})



const useAxiosSecure = () => {
    const {logout} =useAuth()
    const navigate = useNavigate()
   useEffect(()=>{
    axiosSecure.interceptors.response.use(res=>{
        return res
    }, error=>{
        console.log('error in the interceptor', error);
        if(error.response.status=== 401 ||error.response.status===403){
            // console.log('log out the user');
            logout()
    .then(res=>{
      console.log(res.user)
      navigate('/login')
    }) 
    .catch(error=>{
        console.log(error);
      })
        }
    }
    )
   },[navigate,logout])
    return axiosSecure
};

export default useAxiosSecure;