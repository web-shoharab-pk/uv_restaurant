import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthenticatedRoute = ({ Component }) => {

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            return uid ? <Component /> : <Navigate to="/signin" />
        }
    });
};

export default AuthenticatedRoute;