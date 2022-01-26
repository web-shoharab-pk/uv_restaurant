import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/">
                Restaurant
            </Link>
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

const SignUp = ({ setNewUser }) => {
    const navigate = useNavigate()

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, data.email, data.password, data.name)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: data.name,
                    photoURL: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png"
                }).then((res) => {
                    // Profile updated!
                    // ... 
                    toast.success(`${user.email} sign up successfully`)
                    navigate('/dashboard/me')
                }).catch((error) => {
                    // An error occurred
                    // ...
                    const errorMessage = error.message;
                    // ..
                    toast.error(errorMessage)
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                // ..
                toast.error(errorMessage)
            });

        console.log(data)
        reset()
    };



    const [values, setValues] = React.useState({
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        error={errors.name ? true : false}
                                        helperText={errors.name ? "Inter Valid Name, Minimum length 3!" : ''}
                                        autoComplete="given-name"
                                        name="name"
                                        required
                                        fullWidth
                                        id="name"
                                        label="Name"
                                        {...register("name", { required: true, minLength: 3 })}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        error={errors.email ? true : false}
                                        helperText={errors.email ? "Inter Valid Email" : ''}
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        {...register("email", { required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,5}$/g })}
                                        type="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <InputLabel error={errors.password ? true : false} htmlFor="outlined-adornment-password">{errors.password ? "Inter Valid Password, Minimum length 6!" : "Password"}</InputLabel>
                                        <OutlinedInput
                                            error={errors.password ? true : false}
                                            id="outlined-adornment-password"
                                            type={values.showPassword ? 'text' : 'password'}
                                            {...register("password", { required: true, minLength: 6 })}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Password"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label="I want to receive inspiration."
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link onClick={() => setNewUser(true)} href="#" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 5 }} />
                </Container>
            </ThemeProvider>
        </div>
    );
};

export default SignUp;