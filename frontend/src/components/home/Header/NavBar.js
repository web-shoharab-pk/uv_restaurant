import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink, useNavigate } from "react-router-dom";
import CartDrawer from '../CartDrawer/CartDrawer';
import logo from './../../../resources/image/food_logo.png';
import style from './style.module.css';

const NavBar = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({});
    const auth = getAuth();



    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                // ...
                user.getIdTokenResult()
                    .then((idTokenResult) => {
                        // Confirm the user is an Admin.
                        if (!!idTokenResult.claims.admin) {
                            // Show admin UI.
                            setUserDetails({ uid, admin: idTokenResult.claims.admin })
                        } else {
                            // Show regular user UI.
                            setUserDetails({ uid, admin: false })
                        }
                    })
            } else {
                // User is signed out 
                toast.dismiss("signout");
            }
        });
    }, [auth])


    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
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
        <div>
            <nav id={style.navbar} className="navbar navbar-expand-lg  navbar-light bg-light">
                <div className="container-fluid navbar" id={style.nav_wrapper}>
                    <Link to="/">
                        <Avatar style={{ width: 90, height: 90 }} alt="Remy Sharp" src={logo} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"> </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul id={style.nav_item_ul} className="navbar-nav  mx-auto mb-lg-0 bg-light">
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? style.nav_item_link_active : style.nav_item_link
                                    }
                                    aria-current="page" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? style.nav_item_link_active : style.nav_item_link
                                    } to="/aboutUs">About Us</NavLink>
                            </li>

                            <li>
                                <NavLink className={({ isActive }) =>
                                    isActive ? style.nav_item_link_active : style.nav_item_link
                                } to="/reservation">Reservation</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) =>
                                    isActive ? style.nav_item_link_active : style.nav_item_link
                                } to="/blog" >Blog</NavLink>
                            </li>
                            {
                                userDetails?.uid ?
                                    <li>
                                        <CartDrawer />
                                    </li>
                                    : ''
                            }

                            {
                                userDetails?.uid ?
                                    <li>

                                        <Box sx={{ flexGrow: 0 }}>
                                            <Tooltip title="Open settings">
                                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                    <Avatar alt="Remy Sharp" src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" />
                                                </IconButton>
                                            </Tooltip>
                                            <Menu
                                                sx={{ mt: '35px' }}
                                                id="menu-appbar"
                                                anchorEl={anchorElUser}
                                                anchorOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                                keepMounted
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                                open={Boolean(anchorElUser)}
                                                onClose={handleCloseUserMenu}
                                            >
                                                <MenuItem to="/dashboard/me" state={{ path: "/dashboard/me" }} component={Link}>
                                                    <Typography textAlign="center">Account</Typography>
                                                </MenuItem>
                                                <MenuItem to="/dashboard/dashboard" state={{ path: "/dashboard/dashboard" }} component={Link}>
                                                    <Typography textAlign="center">DashBoard</Typography>
                                                </MenuItem>
                                                <MenuItem onClick={() => handleSignOut()}>
                                                    <Typography textAlign="center">Logout</Typography>
                                                </MenuItem>
                                            </Menu>
                                        </Box>
                                    </li>
                                    :
                                    <li>
                                        <Stack spacing={2} direction="row">
                                            <NavLink className={style.nav_item_link} to="/signin">
                                                <Button variant="outlined">Sign Up</Button>
                                            </NavLink>
                                        </Stack>
                                    </li>
                            }

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default NavBar; 