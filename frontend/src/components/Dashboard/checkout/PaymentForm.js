import { Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useForm } from 'react-hook-form';

export default function PaymentForm({ handleNext, setOrderData, orderData }) {

  const { register, handleSubmit, formState: { errors } } = useForm();

  var yearReg = '(202[2-9])';            ///< Allows a number between 2014 and 2029
  var monthReg = '(0[1-9]|1[0-9])';               ///< Allows a number between 00 and 59
  var reg = new RegExp('^' + yearReg + '-' + monthReg); 

  const onSubmit = data => {
 
    setOrderData({...orderData, ...data}) 
    handleNext()
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid component="form" onSubmit={handleSubmit(onSubmit)} container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            error={errors.cardName ? true : false}
            helperText={errors.cardName ? "Inter Valid Name on card" : ''}
            {...register("cardName", { required: true, minLength: 5 })}
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            error={errors.cardNumber ? true : false}
            helperText={errors.cardNumber ? "Inter Valid Card number" : ''}
            {...register("cardNumber", { required: true, minLength: 16, pattern: /^[0-9]*$/ })}
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            error={errors.expDate ? true : false}
            helperText={errors.expDate ? "Inter Valid Expiry date" : ''}
            {...register("expDate", { required: true, pattern: reg })}
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            placeholder="2022-01"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            error={errors.cvv ? true : false}
            helperText={errors.cvv ? "Last three digits on signature strip" : ''}
            {...register("cvv", { required: true, minLength: 3, pattern: /^[0-9]*$/})}
            id="cvv"
            label="CVV"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
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
    </React.Fragment>
  );
}
