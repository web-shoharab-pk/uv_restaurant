import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useForm } from 'react-hook-form';
import {Button} from '@mui/material';

export default function AddressForm({handleNext, setOrderData, orderData}) {
  const { register, handleSubmit,   formState: { errors } } = useForm();


  const onSubmit = data => {
    
    setOrderData({...orderData, ...data}) 

    handleNext()
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid  component="form" onSubmit={handleSubmit(onSubmit)} container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            error={errors.firstName ? true : false}
            helperText={errors.firstName ? "Inter Valid First name" : ''} 
            // required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            {...register("firstName", { required: true, minLength: 3 })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={errors.lastName ? true : false}
            helperText={errors.lastName ? "Inter Valid Last name" : ''} 
            // required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            {...register("lastName", { required: true, minLength: 2 })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={errors.address ? true : false}
            helperText={errors.address ? "Inter Valid Address" : ''} 
            // required
            id="address1"
            name="address1"
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            {...register("address", { required: true, minLength: 5 })}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            error={errors.city ? true : false}
            helperText={errors.city ? "Inter Valid City" : ''} 
            // required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            {...register("city", { required: true, minLength: 3 })}
          />
        </Grid>
      
        <Grid item xs={12} sm={6}>
          <TextField
            error={errors.zip ? true : false}
            helperText={errors.zip ? "Inter Valid Zip / Postal code" : ''}  
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
  {...register("zip", { required: true, minLength: 4, pattern: /[0-9/]*/ })}
          />
        </Grid>
 
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
          <Grid item xs={12}>
          <Button
                  variant="contained" 
                  sx={{ mt: 3, ml: 1 }}
                  type="submit" 
                >
                  Next
                </Button>
            </Grid> 
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
