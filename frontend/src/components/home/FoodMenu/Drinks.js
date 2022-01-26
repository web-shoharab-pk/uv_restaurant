import React from 'react';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Drinks = () => {
    return (
        <div>
           <Box sx={{ flexGrow: 1 }} style={{ width: '100%' }}>
                <Grid container spacing={3} style={{ padding: '20px' }}>
                    {
                        [...new Array(4)].map((food, index) =>
                            <Grid key={index} item xs={4} md={6} sm={12}>
                                <Card>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h4" component="div">
                                                Drinks
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions style={{ display: 'flex', justifyContent: 'space-around' }}>
                                        <Button variant="outlined">Add to cart</Button>
                                        <Button variant="contained">Order Now</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    }
                </Grid>
            </Box>
        </div>
    );
};

export default Drinks;