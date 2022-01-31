import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FOOD_API } from '../../../apis/apis';
import { OrderContext } from '../../../App';
import { useAuth } from '../../../utils/useAuth';
import { addToCart } from '../../../utils/useCart';
import CardLoader from '../../Skeleton/CardLoader';

const Drinks = () => {
    const [foods, setFoods] = useState([])
    const { setFoodInfo } = useContext(OrderContext);
    const { currentUser, isUserLoading } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        axios.post(`${FOOD_API}/category`, { category: "drinks" })
            .then((res) => {
                if (res.data.success) {
                    setFoods(res.data.foods)
                }
            })
            .catch((err) => {
                setFoods([])
            })
    }, []);




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
                                <Grid key={food._id} item xs={4} md={6} sm={12}>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={food?.photo}
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                                                    <Typography gutterBottom variant="h4" component="div">
                                                        {food?.name}
                                                    </Typography>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        ${food?.price}
                                                    </Typography>
                                                </Box>
                                                <Typography variant="body2" color="text.secondary">
                                                    {food?.description.slice(0, 100)}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions style={{ display: 'flex', justifyContent: 'space-around' }}>
                                        <Button variant="outlined" onClick={() => currentUser?.uid ? addToCart(food, currentUser) : navigate("/signin")}>Add to cart</Button>
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

export default Drinks;