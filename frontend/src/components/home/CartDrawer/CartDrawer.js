import ClearIcon from '@mui/icons-material/Clear';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Badge, Button, Divider, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import axios from 'axios';
import * as React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { CART_API } from '../../../apis/apis';
import { OrderContext } from '../../../App';
import { useAuth } from '../../../utils/useAuth';

export default function CartDrawer() {

    const navigate = useNavigate()
    const { setFoodInfo } = React.useContext(OrderContext);
    const { currentUser  } = useAuth();
    const [cart, setCart] = React.useState([])
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    console.log("cart", cart)
    const handleCartDataLoader = React.useCallback(() => {
        if (!!currentUser?.uid) {
            axios.get(`${CART_API}/${currentUser?.uid}`)
                .then(res => {
                    if (res.status === 200 && res.data.success) {
                        setCart(res.data.cart)
                    }
                })
        }
    }, [currentUser?.uid])



    const toggleDrawer = (anchor, open) => (event) => {
        handleCartDataLoader()
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    React.useEffect(() => {
        handleCartDataLoader()
    }, [handleCartDataLoader, currentUser?.uid]);

    const handleDeleteFood = (id) => {

        axios.delete(`${CART_API}/${id}`)
            .then(res => {
                if (res.data.success && res.status) {
                    toast.dismiss("Deleted from cart");
                    handleCartDataLoader()
                }
            })
            .catch((err) => {
                toast.error("Some thing is wrong!");
            })
    }

    const handleCheckOut = (data) => {
        // if (!isUserLoading && !currentUser) {
        //     return navigate("/signin")
        // }
        setFoodInfo(data);
        navigate('/checkout')
    }

    const list = (anchor) => (
        <Box
            sx={{ width: 280, position: 'relative' }}
            role="presentation"

            onKeyDown={toggleDrawer(anchor, false)}
        >
            <IconButton color="error" onClick={toggleDrawer(anchor, false)}>
                <HighlightOffIcon />
            </IconButton>
            <br />
            <h4 style={{ textAlign: 'center' }}>Total food: {cart.length}</h4>
            <Divider />
            {
                cart.map((food) => (
                    <>
                        <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
                            <Box>
                                <img style={{ width: 80, height: 80 }} alt="Remy Sharp" src={food.food.photo} />
                                <IconButton onClick={() => handleDeleteFood(food._id)} color="error">
                                    <ClearIcon />
                                </IconButton>
                            </Box>
                            <Box>
                                <h6>{food.food.name}</h6>
                                <h6 style={{ margin: '8px 0' }}>Price : ${food.food.price}</h6>
                                <h6>Unit: {food.food.quantity}</h6>
                            </Box>
                        </Box>
                        <Divider />
                    </>
                ))
            }
            {
                cart?.length > 0 ?
                <Button onClick={() => handleCheckOut(cart[0].food)} style={{ position: "absolute", to: '20px', right: '50px' }} variant="contained">
                CheckOut Now
                </Button>
                : <h4>No Cart Data</h4>
            }
          
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Badge style={{ margin: '0 30px 0 5px', cursor: 'pointer' }} onClick={toggleDrawer(anchor, true)} badgeContent={cart.length} color="error">
                        <ShoppingCartCheckoutIcon />
                    </Badge>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}
