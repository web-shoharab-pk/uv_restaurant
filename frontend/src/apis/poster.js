import toast from "react-hot-toast";
import { FOOD_API, IMAGEBB_API, IMAGE_BB_URL, REVIEW_API } from "./apis";
import axios from "./axiosConfig";

export const uploadImage = async (image) => {
    try {
        const imageData = new FormData();
        imageData.set('key', IMAGEBB_API);
        imageData.append('image', image);

        const res = await axios.post("/upload", imageData, { baseURL: IMAGE_BB_URL });
        toast.success('Successfully Photo Uploaded!')
        const photo = res.data.data.display_url;
        return photo
    } catch (error) {
        toast.error('Failed to upload the image!')
        throw new Error(error.message)
    }
}



export const addFood = async (foodData) => {
    try {
        if (foodData.photo[0]) {
            foodData.photo = await uploadImage(foodData.photo[0])
        }
        const { data } = await axios.post(`${FOOD_API}/new`, foodData)

        toast.success(data.food.name + " added successfully!")

        return data.food;
    } catch (error) {
        throw new Error(error.message)
    }
};


export const addReview = async (reviewData) => {
    try {
        if (reviewData.image[0]) {
            reviewData.image = await uploadImage(reviewData.image[0]);
        }
        const { data } = await axios.post(`${REVIEW_API}/new`, reviewData)

        toast.success(`Successfully ${data.review.text} Added!`);
        return data.review;
    } catch (error) {
        throw new Error(error.message)
    }
}