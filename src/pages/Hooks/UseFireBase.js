import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

import AuthInit from '../Firebase/FireBaseInit';
import { useState } from 'react';
import { useEffect } from 'react';


AuthInit();
const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

const UseFireBase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState(true)



    const googleSignIn  = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
          if (user) {
            setUser(user)
          }
          else {
            setUser({})
          }
          setLoading(false)
        })
      }, [])

    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        }, [])
    }

    return {
        user,
        googleSignIn,
        isLoading,
        logOut
    }
};

export default UseFireBase;