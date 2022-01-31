import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import * as React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ORDER_API } from '../../../apis/apis';
import { OrderContext } from '../../../App';
import { useAuth } from '../../../utils/useAuth';
import { deleteCartData } from '../../../utils/useCart';


export default function Review({ orderData }) {
  const { currentUser } = useAuth();
  const { foodInfo } = React.useContext(OrderContext); 
  const navigate = useNavigate()
  const orderedBy = {
    name: currentUser?.displayName,
    userId: currentUser?.uid
  }
  const foodDetails = {
    name: foodInfo.name,
    price: foodInfo.price,
    foodId: foodInfo._id
  }
  const data = {
    shipmentDetails: orderData,
    foodDetails, orderedBy
  }

  const handleOrder = () => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Order it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post(`${ORDER_API}/new`, data)
          .then((res) => {
            if (res.data.success && res.status === 200) {
              toast.success(`${foodInfo.name} Your Order success!`);
              deleteCartData(currentUser?.uid)
              navigate('/dashboard/dashboard')
            }
          })
          .catch((err) => {
            if (err) {
              toast.error('Some thing is wrong in the server site!')
            }
          })
      } else {
        navigate('/')
      }
    })



  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      {/* {
        foodInfo?.map((food) => ( */}
          <List disablePadding>
            <ListItem key={foodInfo?.name} sx={{ py: 1, px: 0 }}>
              <ListItemText primary={foodInfo?.name} secondary={foodInfo?.description?.slice(0, 25)} />
              <Typography variant="body2">{foodInfo.price}</Typography>
            </ListItem>
            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Total" />
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                {foodInfo?.price}
              </Typography>
            </ListItem>
          </List>
        {/* ))
      } */}

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{orderData?.firstName} {orderData?.lastName}</Typography>
          <Typography gutterBottom>{orderData?.addresses} {orderData?.zip}, {orderData?.city}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>{orderData.cardName}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>***{orderData?.cardNumber.slice(11, 16)}</Typography>
              </Grid>
            </React.Fragment>
          </Grid>
          <Button onClick={handleOrder} variant="contained" type="submit" sx={{ mt: 3, ml: 1 }}>
            Place order
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
