import { FOOD_API, ORDER_API, REVIEW_API } from "./apis";
import axios from "./axiosConfig";

export const getFoods = () => axios.get(`${FOOD_API}/all`).then((res) => res.data.foods);

export const getAllOrder = () => axios.get(`${ORDER_API}/all`).then((res) => res.data.order);

export const getAllReview = () => axios.get(`${REVIEW_API}/all`).then((res) => res.data.reviews)

export const getMyOrder = async (currentUser) => {
    const res = await axios.post(`${ORDER_API}/user`, {
        orderedBy: {
            name: currentUser?.displayName,
            userId: currentUser?.uid
        }
    })
    return res.data.order;
};