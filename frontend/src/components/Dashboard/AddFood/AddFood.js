import { Button, Container, FormControl, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { FOOD_API, IMAGEBB_API } from '../../../apis/apis';

const AddFood = () => {
    const [category, setCategory] = React.useState('');
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async data =>{
        data.category = category; 
    
        if (data.photo[0]) {
            const imageData = new FormData();
            imageData.set('key', IMAGEBB_API);
            imageData.append('image', data.photo[0]);
            try {
                const res = await axios.post('https://api.imgbb.com/1/upload', imageData);
                toast.success('Successfully Photo Uploaded!')
                data.photo = res.data.data.display_url;   
            } catch (error) { 
                return toast.error('Failed to upload the image!');
            }
        } 

        axios.post(`${FOOD_API}/new`, data)
        .then((response) => { 
            if(response.status === 200 || response.data.success) {
                toast.success(`Successfully ${response.data.food.name} Added!`);
                reset();
            }
        })
        .catch((err) => {
            if(err) {
                toast.error(`Some thing Is Wrong`)
            }  
        })
    };

 

    const handleChange = (event) => {
      setCategory(event.target.value);
    };
    return (
        <Paper>

            <Container>

                <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                    <h3 style={{ textAlign: 'center', padding: '10px' }}>Add Food</h3>
                    <Grid container spacing={2}>
                        <Grid item xs={8} sm={12} md={6} lg={6}>
                            <TextField
                                error={errors.name ? true : false}
                                helperText={errors.name ? "Inter Valid Name" : ''} 
                                fullWidth
                                id="name"
                                label="Food Name"
                                name="name" 
                                {...register("name", { required: true,  minLength: 3})} 
                            />
                        </Grid>
                        <Grid item xs={8} sm={12} md={6} lg={6}>
                            <TextField
                                error={errors.photo ? true : false}
                                helperText={errors.photo ? "Inter Valid photo" : ''} 
                                fullWidth
                                id="photo"
                                label="Upload Food Image"
                                focused
                                name="photo"
                                type="file"
                                autoComplete="photo"
                                {...register("photo", { required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,5}$/g })}

                            />
                        </Grid>
                        <Grid item xs={8} sm={12} md={6} lg={6}>
                            <TextField
                                error={errors.price ? true : false}
                                helperText={errors.price ? "Inter Valid price" : ''} 
                                fullWidth
                                id="price"
                                label="Food Price"
                                name="price"
                                autoComplete="price"
                                {...register("price", { required: true, pattern: /^\d+$/ })} 
                            />
                        </Grid>
                        <Grid item xs={8} sm={12} md={6} lg={6}>
                            <TextField
                                error={errors.stock ? true : false}
                                helperText={errors.stock ? "Inter Valid stock" : ''} 
                                fullWidth
                                id="stock"
                                label="Stock"
                                name="stock"
                                autoComplete="stock"
                                {...register("stock", { required: true, pattern: /^\d+$/ })} 
                            />
                        </Grid>
                        <Grid item xs={8} sm={12} md={6} lg={6}>
                            <TextField
                                error={errors.description ? true : false}
                                helperText={errors.description ? "Inter Valid description" : ''} 
                                fullWidth
                                height={100}
                                id="description"
                                label="Description"
                                name="description"
                                autoComplete="description"
                                {...register("description", { required: true,  minLength: 10 })} 
                            />
                        </Grid>
                        <Grid item xs={8} sm={12} md={6} lg={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
                                <Select
                                     error={errors.category ? true : false}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select" 
                                    label="Select Category"
                                    value={category}
                                    onChange={handleChange}
                                    required
                                    // {...register("category", { required: true })} 
                                >
                                    <MenuItem value='today special'>Today's Special</MenuItem>
                                    <MenuItem value='breakfast'>BreakFast</MenuItem>
                                    <MenuItem value='lunch'>Lunch</MenuItem>
                                    <MenuItem value='dinner'>Dinner</MenuItem>
                                    <MenuItem value='drinks'>Drinks</MenuItem>
                                    <MenuItem value='dessert'>Dessert</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Add Food
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Paper>
    );
};

export default AddFood;