import axios from "axios";
import toast from "react-hot-toast";
import { FOOD_API, IMAGEBB_API } from "./apis";

// axios.defaults.baseURL = baseURL;

export const getFoods = () => axios.get(`${FOOD_API}/all`).then((res) => res.data.foods);

export const addFood = async (data) => {
    try {
        if (data.photo[0]) {
            const imageData = new FormData();
            imageData.set('key', IMAGEBB_API);
            imageData.append('image', data.photo[0]);

            const res = await axios.post('https://api.imgbb.com/1/upload', imageData);
            toast.success('Successfully Photo Uploaded!')
            data.photo = res.data.data.display_url;
        }

        const response = await axios.post(`${FOOD_API}/new`, data)

        return response.data.food;
    } catch (error) {
        throw new Error(error.message)
    }
}