import React, { createContext, useEffect, useState } from 'react';
import app from '../../fairebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

 const auth =getAuth(app)
 export const AuthContext =createContext()

const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null)
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

    // some changess
    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser)
            setuser(currentUser)

        })
        return ()=>unsubscribe
    },[])

    
    const authInfo ={user,
        createPasswordWithEmail,
        logOut,
        singInWithGithub,
        profileUpdata,
        
        singInWithGoogle}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;