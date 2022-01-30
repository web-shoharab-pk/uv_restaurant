import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Badge, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import * as React from 'react';

export default function CartDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 280 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <br />
            <h4 style={{ textAlign: 'center' }}>Total food: 3</h4>
            <Divider />
            {
                [...new Array(3)].map((food) => (
                    <>
                        <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
                            <Box>
                                <img style={{ width: 80, height: 80 }} alt="Remy Sharp" src='https://www.pexels.com/photo/1640777/download/' />
                            </Box>
                            <Box>
                                <h5>Food 1</h5>
                                <h6 style={{ margin: '8px 0' }}>Price : $50</h6>
                                <h6>Unit: 1</h6>
                            </Box>
                        </Box>
                        <Divider />
                    </>
                ))
            }
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Badge style={{ margin: '0 30px 0 5px', cursor: 'pointer' }} onClick={toggleDrawer(anchor, true)} badgeContent={3} color="error">
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
