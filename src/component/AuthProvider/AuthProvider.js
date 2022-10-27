import React, { createContext, useEffect, useState } from 'react';
import app from '../../fairebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

 const auth =getAuth(app)
 export const AuthContext =createContext()

const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null)
    const[loding,setLoding]=useState(true)
    const [them,setThems]=useState("dark")
  const themeTogoole=()=>{
    setThems((cur)=>cur =="light"? 'dark':"light")
  }
    // Registion
    const createPasswordWithEmail =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)

    }
    // singup With Google
    const singInWithGoogle=(provider)=>{
        return signInWithPopup(auth, provider)

    }

    // logOut
    const logOut =()=>{
        return signOut(auth)
    }
    // loginWith github
    const singInWithGithub=(provider)=>{
        return signInWithPopup(auth, provider)
        

    }
    // profile update
    const profileUpdata=(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }

    // sing in


    const login =(email,password)=>{
        setLoding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // some changess
    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser)
            setuser(currentUser)
            setLoding(false)

        })
        return ()=>unsubscribe
    },[])

    
    const authInfo ={user,
        createPasswordWithEmail,
        logOut,
        singInWithGithub,
        loding,
        profileUpdata,
        login,
        themeTogoole,
        them,setThems,
        
        singInWithGoogle}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;