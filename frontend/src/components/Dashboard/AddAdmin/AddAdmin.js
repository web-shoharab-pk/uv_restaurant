import { Button, Container, Paper, TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ADMIN_API } from '../../../apis/apis';
import toast from 'react-hot-toast';

const AddAdmin = () => {
 
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post(`${ADMIN_API}/new`, data)
            .then((res) => {
                if(res.data.success && res.status) {
                    reset();
                    toast.success(res.data.message);
                }
            })
            .catch((err) => {
                toast.error('Some thing is wrong please try again')
            })
    }
    return (
        <Container>
            <Box sx={{ justifyContent: 'center', p: 3 }}>
                <Paper>
                    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1, p: 3 }}>
                        <h3 style={{ textAlign: 'center', padding: '10px' }}>Add Admin</h3>
                        <TextField
                            error={errors.uid ? true : false}
                            helperText={errors.uid ? "Inter Valid UID" : ''}
                            required
                            fullWidth
                            label="USER UID"
                            name="uid"
                            autoComplete="email"
                            {...register("uid", { required: true, })}
                            variant="outlined" />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Add Admin
                        </Button>
                    </Box>


                </Paper>

            </Box>

        </Container>
    );
};

export default AddAdmin;