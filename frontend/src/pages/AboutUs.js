import { Container, Divider, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import React from 'react';
import Footer from '../components/home/Footer/Footer';
import NavBar from '../components/home/Header/NavBar';
import about1 from './../resources/image/about1.jpg';
import about2 from './../resources/image/about2.jpg';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));
 

const AboutUs = () => {
    return (
        <div>
            <NavBar />
            <br /><br /><br />
            <br />
            <Container>
                <Typography variant="h3" gutterBottom className="text-center" component="div">
                    ABOUT US
                </Typography>
                <Grid container sx={{ flexDirection: { xs: "column", md: "row" } }} spacing={2}>
                    <Grid item sm={12} md={6} lg={6} >
                        <Item>
                            <img
                                className="img-fluid"
                                src={about1}
                                srcSet={``}
                                alt={"about"}
                                loading="lazy"
                            />
                        </Item>
                    </Grid>
                    <Grid item sm={12} md={6} lg={6} >
                        <Item>
                            <Typography variant="h6" gutterBottom component="div">
                                About Restaurant
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                A restaurant is a business that prepares and serves food and drinks to customers.[1] Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models ranging from inexpensive fast food restaurants and cafeterias, to mid-priced family restaurants, to high-priced luxury establishments
                            </Typography>
                        </Item>
                    </Grid>

                </Grid>
                <br />
                <Divider />
                <br />
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container sx={{ flexDirection: { xs: "column", md: "row" } }} spacing={2}>
                        <Grid item sm={12} md={6} lg={6} >
                            <Item>
                                <Typography variant="h6" gutterBottom component="div">
                                    About Food
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant, animal or fungal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth. Different species of animals have different feeding behaviours that satisfy the needs of their unique metabolisms, often evolved to fill a specific ecological niche within specific geographical contexts.
                                </Typography>
                            </Item>
                        </Grid>

                        <Grid item sm={12} md={6} lg={6} >
                            <Item>
                                <img
                                    className="img-fluid"
                                    src={about2}
                                    srcSet={``}
                                    alt={"about"}
                                    loading="lazy"
                                />
                            </Item>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
            <br /><br />
            <Divider />
            <br />
            <Footer />
        </div>
    );
};

export default AboutUs;