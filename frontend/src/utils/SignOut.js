import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
    const navigate = useNavigate()
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      toast.dismiss("Sign Out Done");
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });
    return (
        <>
            
        </>
    );
};

export default SignOut;