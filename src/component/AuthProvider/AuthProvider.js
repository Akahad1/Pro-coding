import React, { createContext, useEffect, useState } from 'react';
import app from '../../fairebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'

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
    // some changess
    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser)
            setuser(currentUser)

        })
        return ()=>unsubscribe
    },[])

    
    const authInfo ={user,createPasswordWithEmail,singInWithGoogle}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;