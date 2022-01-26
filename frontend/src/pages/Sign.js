import { Box } from '@mui/material';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import SignIn from './../components/SignIn/SignIn';
import SignUp from './../components/SignUp/SignUp';
import style from './styles.module.css';

const Sign = () => {
    const [newUser, setNewUser] = useState(true);
    const [userDetails, setUserDetails] = useState('');
    const auth = getAuth();
    console.log("userDetails", userDetails);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                setUserDetails(uid)

            } else {
                // User is signed out 
                toast.dismiss("signout");
            }
        });
    }, [auth])

    return (
        <div style={{ background: 'black' }} className={style.sign_page}>
            {
                userDetails ?
                    <Navigate to="/" />
                    :
                    <Box sx={{ background: '#fff', width: '100%' }}>
                        {
                            newUser ?
                                <SignIn setNewUser={setNewUser} />
                                :
                                <SignUp setNewUser={setNewUser} />
                        }
                    </Box>
            }

        </div>
    );
};

export default Sign;