// import DateTimePicker from '@mui/lab/DateTimePicker';
// import DesktopDateTimePicker from '@mui/lab/DesktopDateTimePicker';
import { Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { useForm } from "react-hook-form";
import Footer from '../components/home/Footer/Footer';
import NavBar from '../components/home/Header/NavBar';
import styles from './styles.module.css';
const theme = createTheme();
const Reservation = () => {

    // const [value, setValue] = React.useState(new Date('2018-01-01T00:00:00.000Z'));
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
 
    return (
        <div className={styles.reservation_page}>
            <NavBar />
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: 'url(https://source.unsplash.com/random)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Box sx={{ width: 450, backgroundColor: 'white', p: 3, m: 3, borderRadius: 3 }} lg={{ width: 450 }}>
                                <h3 className="text-center">Reservation Form</h3>
                                <Grid component="form" onSubmit={handleSubmit(onSubmit)} spacing={2}>
                                    <Grid item lg={12} md={12} sm={12}>
                                        <TextField
                                            error={errors.name ? true : false}
                                            helperText={errors.name ? "Inter Valid Name" : ''}
                                            {...register("name", { required: true, minLength: 3 })}
                                            margin="normal"
                                            fullWidth
                                            id="name"
                                            label="Name"
                                            name="name"
                                            autoComplete="name"
                                        />
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12}>
                                        <TextField
                                            margin="normal"
                                            error={errors.subject ? true : false}
                                            helperText={errors.subject ? "Inter Valid Subject" : ''}
                                            {...register("subject", { required: true, })}
                                            fullWidth
                                            id="subject"
                                            label="Subject"
                                            name="subject"
                                            autoComplete="subject"
                                        />
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12}>
                                        <TextField
                                            error={errors.email ? true : false}
                                            helperText={errors.email ? "Inter Valid Email Address" : ''}
                                            {...register("email", { required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,5}$/g })}
                                            margin="normal"
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                        />
                                    </Grid>
                                    <br />
                                    <Grid item lg={12} md={12} sm={12}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Select Table</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                //   value={age}
                                                label="Select Table"
                                            //   onChange={handleChange}
                                            >
                                                <MenuItem value={10}>Table 1</MenuItem>
                                                <MenuItem value={20}>Table 2</MenuItem>
                                                <MenuItem value={30}>Table 3</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12}>
                                        <TextField
                                            error={errors.note ? true : false}
                                            helperText={errors.note ? "Inter Valid Special Note" : ''}
                                            {...register("note", { required: true, minLength: 5 })}
                                            margin="normal"
                                            fullWidth
                                            id="note"
                                            label="Special Note"
                                            name="note"
                                        />
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12}>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                        >
                                            Sign In
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
            <Footer />
        </div>
    );
};

export default Reservation;