import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../Firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);


    const createUser = (email,password)=>{    setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    };

    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    };

    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }
    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    };

    

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            setLoading(false)
        });
        return()=>{
            return unsubscribe();
        }
    },[])

    const authinfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle
        
    }
    return (
        <div>
           <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;