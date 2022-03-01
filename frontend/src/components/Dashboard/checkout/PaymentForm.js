import { Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { OrderContext } from '../../../App';


const PaymentMethodForm = ({ register, handleSubmit, onSubmit, errors, price, method }) => {

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      {/* Bkash */}
      <Typography variant="h6" style={{ color: '#42ba96' }} gutterBottom>
        You need to send us: {price}
      </Typography>
      <Typography variant="h6" style={{ color: '#42ba96' }} gutterBottom>
        Payment Method: {method}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Account Type: <strong>Personal</strong>
      </Typography>
      <Typography variant="h6" gutterBottom>
        Account Number: <strong>+8801701234568</strong>
      </Typography>
      <FormControl fullWidth sx={{ my: 2 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Inter Your {method} Account Number</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          label={`Inter Your ${method} Account Number`}
          error={errors?.cardName ? true : false}
          {...register("cardName", { required: true, minLength: 11, pattern: /^[0-9]*$/ })}
        />
      </FormControl>
      <br />
      <FormControl fullWidth>
        <InputLabel htmlFor="outlined-adornment-amount">Inter Transiction ID</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          label="Inter Transiction ID"
          error={errors?.cardNumber ? true : false}
          {...register("cardNumber", { required: true, minLength: 10, pattern: /^[a-z0-9]+$/i })}
        />
      </FormControl>
      <br />
      <Button
        variant="contained"
        sx={{ mt: 3 }}
        type="submit"
      >
        Next
      </Button>
    </Box>
  )
}

export default function PaymentForm({ handleNext, setOrderData, orderData }) {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [paymentMethod, setPaymentMethod] = React.useState('');
  const { foodInfo } = React.useContext(OrderContext);

  var yearReg = '(202[2-9])';            ///< Allows a number between 2014 and 2029
  var monthReg = '(0[0-1]|1[0-9])';               ///< Allows a number between 00 and 59
  var reg = new RegExp('^' + yearReg + '-' + monthReg);

  const onSubmit = data => {

    setOrderData({ ...orderData, ...data })
    handleNext()
  };

  const handleChangePaymentMethod = (method) => {
    setPaymentMethod(method)
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Select Payment method
      </Typography>
      <Box>
        <FormControl
          sx={{ m: 3, width: '95%' }}
          //  error={error}
          variant="standard">

          <RadioGroup
            aria-labelledby="demo-error-radios"
            name="quiz"
            // value={value}
            onChange={({ target }) => handleChangePaymentMethod(target.value)}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <FormControlLabel value="Bkash" control={<Radio />} label="Bkash" />
              <img style={{ height: '60px', width: '60px' }} alt="" src="https://www.logo.wine/a/logo/BKash/BKash-Icon2-Logo.wine.svg" />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <FormControlLabel value="Nagad" control={<Radio />} label="Nagad" />
              <img style={{ height: '50px', width: '60px' }} alt="" src="https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png" />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <FormControlLabel value="Rocket" control={<Radio />} label="Rocket" />
              <img style={{ height: '40px', width: '50px' }} alt="" src="https://iconape.com/wp-content/files/fy/184568/svg/184568.svg" />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <FormControlLabel value="VISA CARD" control={<Radio />} label="VISA CARD" />
              <img style={{ height: '60px', width: '55px' }} alt="" src="https://cdn1.iconfinder.com/data/icons/credit-card-icons/512/visa.png" />
            </Box>
          </RadioGroup>
        </FormControl>

        {
          paymentMethod === 'Bkash' ?
            <PaymentMethodForm handleSubmit={handleSubmit} onSubmit={onSubmit} errors={errors} register={register} method={paymentMethod} price={foodInfo?.price} />
            : paymentMethod === 'Nagad' ?
              <PaymentMethodForm handleSubmit={handleSubmit} onSubmit={onSubmit} errors={errors} register={register} method={paymentMethod} price={foodInfo?.price} />
              : paymentMethod === 'Rocket' ?
                <PaymentMethodForm handleSubmit={handleSubmit} onSubmit={onSubmit} errors={errors} register={register} method={paymentMethod} price={foodInfo?.price} />
                : paymentMethod === 'VISA CARD' ?
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
                        {...register("cvv", { required: true, minLength: 3, pattern: /^[0-9]*$/ })}
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
                  :
                  <Typography variant="h6" style={{ color: '#42ba96' }} gutterBottom>
                    Please Select Any Payment Method!
                  </Typography>
        }

      </Box>

    </React.Fragment>
  );
}
