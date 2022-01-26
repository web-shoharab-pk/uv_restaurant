// import DateTimePicker from '@mui/lab/DateTimePicker';
// import DesktopDateTimePicker from '@mui/lab/DesktopDateTimePicker';
import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import { useForm } from "react-hook-form";
import Footer from '../components/home/Footer/Footer';
import NavBar from '../components/home/Header/NavBar';
import styles from './styles.module.css';


const Reservation = () => {

    // const [value, setValue] = React.useState(new Date('2018-01-01T00:00:00.000Z'));
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"), register, errors.email);
    return (
        <div className={styles.reservation_page}>
            <NavBar />
            <br /><br /><br />
            <Container>
                <Box style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box sx={{ width: 450, backgroundColor: 'white', p: 3, m: 3, borderRadius: 3 }} lg={{ width: 450 }}>
                        <h3 className="text-center">Reservation Form</h3>
                        <Grid component="form" onSubmit={handleSubmit(onSubmit)} spacing={2}>
                            <Grid item lg={12} md={12} sm={12}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item lg={12} md={12} sm={12}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="subject"
                                    label="Subject"
                                    name="subject"
                                    autoComplete="subject"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item lg={12} md={12} sm={12}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
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
                            {/* <Grid>
                                <DesktopDateTimePicker
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                                <DateTimePicker
                                    renderInput={(params) => <TextField {...params} />}
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                            </Grid> */}
                            <Grid item lg={12} md={12} sm={12}>
                                <TextField
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
            </Container>
            <Footer />
        </div>
    );
};

export default Reservation;