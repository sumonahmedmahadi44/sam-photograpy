import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/firebase.config';
import axios from 'axios';



export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    };

    const userUpdateProfile = (name, photo) => {
        // setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
         


            if (currentUser) {
                axios.post('https://sam-photgrapy-server.vercel.app/jwt', { email: currentUser.email })
                    .then(data => {
                       
                        localStorage.setItem('access-token', data.data.token)
                        setLoading(false)
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }





        })

        return () => {
            unsubscribe();
        }

    }, [])

    const authinfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle,
        userUpdateProfile

    }
    return (
        <div>
            <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;