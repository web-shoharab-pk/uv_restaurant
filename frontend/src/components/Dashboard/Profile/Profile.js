import { Container, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const tagStyle = {
    color: '#FFF',
    backgroundColor: '#1976D2',
    width: '100%',
    padding: '3px 6px',
    borderRadius: '25px',
    cursor: 'pointer'
}
const Profile = () => {
    const [userDetails, setUserDetails] = useState({});
    const navigate = useNavigate();
    const auth = getAuth();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) { 
                setUserDetails(user)
                user.getIdTokenResult()
                    .then((idTokenResult) => {
                        // Confirm the user is an Admin.
                        if (!!idTokenResult.claims.admin) {
                            // Show admin UI.
                            setIsAdmin(!!idTokenResult.claims.admin) 
                        } else {
                            // Show regular user UI.
                            setIsAdmin(false) 
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else {
                // User is signed out
                // ...
                toast.dismiss("signout");
            }
        });
    }, [auth])
   

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/signin')
            window.location.reload();
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <Paper sx={{ p: 3 }}>
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card sx={{ minWidth: 300, maxWidth: '100%', textAlign: 'center', p: 2 }}>
                    {
                        isAdmin ?
                            <h4 style={tagStyle}>Hello, ADMIN</h4>
                            :
                            <h4 style={tagStyle}>USER</h4>
                    }
                    <CardMedia
                        style={{ width: '150px', height: '150px', borderRadius: '50%', textAlign: 'center', margin: 'auto' }}
                        component="img"
                        image={userDetails.photoURL}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            {userDetails.displayName}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            USERID: {userDetails.uid}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            {userDetails.email}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => handleSignOut()} size="small">Logout</Button>
                    </CardActions>
                </Card>
            </Container>

        </Paper>
    );
};

export default Profile;