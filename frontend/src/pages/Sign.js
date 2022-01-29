import { Box } from '@mui/material';
import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import SignIn from './../components/SignIn/SignIn';
import SignUp from './../components/SignUp/SignUp';
import { useAuth } from './../utils/useAuth';
import style from './styles.module.css';

const Sign = () => {
    const [newUser, setNewUser] = useState(true);
    const { currentUser } = useAuth();
    const location = useLocation()
    const path = location.state?.path || "/";

    return (
        <div style={{ background: 'black' }} className={style.sign_page}>
            {
                currentUser ?
                    <Navigate to={path} />
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