import React, { useContext, useEffect, useState } from 'react';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardLoader from '../../Skeleton/CardLoader';
import { FOOD_API } from '../../../apis/apis';
import axios from 'axios';
import { OrderContext } from '../../../App';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../utils/useAuth';
import { addToCart } from '../../../utils/useCart';

const Dessert = () => {
    const { currentUser, isUserLoading  } = useAuth();
    const [foods, setFoods] = useState([]) 
    useEffect(() => {
        axios.post(`${FOOD_API}/category`, { category: "dessert" })
            .then((res) => {
                if (res.data.success) {
                    setFoods(res.data.foods)
                }
            })
            .catch((err) => {
                setFoods([])
            })
    }, []);

    const { setFoodInfo } = useContext(OrderContext);
    const navigate = useNavigate()
    const handleOrder = (data) => {
        if (!isUserLoading && !currentUser) {
            return navigate("/signin")
        }
        setFoodInfo(data);
        navigate('/checkout')
    }

    return (
        <div>
           <Box sx={{ flexGrow: 1 }} style={{ width: '100%' }}>
                <Grid container spacing={3} style={{ padding: '20px' }}>
                    {
                        foods.length > 0 ?
                            foods.map(food => (
                                <Grid key={food._id} item xs={12} md={6} sm={12}>
                                    <Card style={{backgroundColor: '#FC521D', color: 'white'}}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={food?.photo}
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Box>
                                                    <Typography gutterBottom variant="h4" component="div">
                                                        {food?.name}
                                                    </Typography>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        ${food?.price}
                                                    </Typography>
                                                </Box>
                                                <Typography variant="body2"  style={{color: 'white'}}>
                                                    {food?.description.slice(0, 50)}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions style={{ display: 'flex', justifyContent: 'space-around' }}>
                                        <Button variant="contained" onClick={() => currentUser?.uid ? addToCart(food, currentUser) : navigate("/signin")}>Add to cart</Button>
                                            <Button onClick={() => handleOrder(food)} variant="contained">Order Now</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))
                            :
                            <CardLoader />
                    }
                </Grid>
            </Box>
        </div>
    );
};

export default Dessert;