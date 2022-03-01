import { Button, Container, Grid, Paper, Rating, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { addReview } from '../../../apis/poster';
import { useAuth } from '../../../utils/useAuth';

const MyReview = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [rate, setRate] = useState(0)
    const { currentUser } = useAuth();
    const { mutateAsync } = useMutation(addReview, {
        onSuccess: () => {
            reset()
            setRate(0)
        }
    });

    const onSubmit = async data => {
        data.rate = rate
        data.reviewedBy = {
            name: currentUser?.displayName,
            id: currentUser?.uid
        }
        await mutateAsync(data)
    }

    return (
        <Paper>
            <Container>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3, p: 3 }}>
                    <h3 style={{ textAlign: 'center', padding: '10px' }}>Add Your Review</h3>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <TextField
                                error={errors.text ? true : false}
                                helperText={errors.text ? "Inter Valid text" : ''}
                                fullWidth
                                id="name"
                                label="Review Text"
                                name="text"
                                {...register("text", { required: true, minLength: 3 })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <TextField
                                error={errors.image ? true : false}
                                helperText={errors.image ? "Inter Valid photo" : ''}
                                fullWidth
                                id="photo"
                                label="Upload Food Image"
                                focused
                                name="photo"
                                type="file"
                                autoComplete="image"
                                {...register("image", { required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,5}$/g })}

                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={2}>
                            <Typography component="legend">Rating</Typography>
                            <Rating
                                name="half-rating" value={rate}
                                onChange={(_, newValue) => {
                                    setRate(newValue)
                                }}
                                precision={0.5}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Add Review
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Paper>
    );
};

export default MyReview;