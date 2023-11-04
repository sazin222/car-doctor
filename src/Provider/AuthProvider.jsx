import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const AuthContext= createContext()

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(true)
   
    const createUser= (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const singIn= (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout=()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, currentUser=>{
        const userEmail= currentUser?.email || user?.email
        const loggedUser={email: userEmail}
            setUser(currentUser)
            console.log('currnt user', currentUser);
            setLoading(false)
            if(currentUser){
                axios.post('https://car-doctor-server-v.vercel.app/jwt' ,loggedUser, {withCredentials: true})
                .then(res=>{
                    console.log('token response',res.data);
                })
            }
            else{
                axios.post('https://car-doctor-server-v.vercel.app/logout', loggedUser, {withCredentials:true})
                .then(res=>{
                    console.log(res.data);
                })
            }

        })
        return ()=>{
            return unsubscribe()
        }
    },[])

    const AuthInfo={
      user,
      loading,
      createUser,
      singIn,
      logout
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;