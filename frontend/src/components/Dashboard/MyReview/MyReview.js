import { Button, Container, Grid, Paper, Rating, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { IMAGEBB_API, REVIEW_API } from '../../../apis/apis';
import { useAuth } from '../../../utils/useAuth';

const MyReview = () => {
    const [value, setValue] = React.useState(2);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { currentUser } = useAuth();

    // const reviewedBy = {
    //     name: currentUser?.displayName,
    //     id: currentUser?.uid
    // }

    const onSubmit = async data => {
        data.rate = value;
        data.reviewedBy = {
            name: currentUser?.displayName,
            id: currentUser?.uid
        }

        if (data.image[0]) {
            const imageData = new FormData();
            imageData.set('key', IMAGEBB_API);
            imageData.append('image', data.image[0]);
            try {
                const res = await axios.post('https://api.imgbb.com/1/upload', imageData);
                toast.success('Successfully Photo Uploaded!')
                data.image = res.data.data.display_url;
            } catch (error) {
                return toast.error('Failed to upload the image!');
            }
        }

        axios.post(`${REVIEW_API}/new`, data)
            .then((response) => {
                if (response.status === 200 || response.data.success) {
                    toast.success(`Successfully ${response.data.review.text} Added!`);
                    reset();
                }
            })
            .catch((err) => {
                if (err) {
                    toast.error(`Some thing Is Wrong`)
                }
            })
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
                                name="half-rating" value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }} precision={0.5} />
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