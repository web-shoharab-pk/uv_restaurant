import {  useQueryClient } from 'react-query';
import {useAuth} from './useAuth';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {CART_API} from '../apis/apis';
import toast from 'react-hot-toast';
export const useAddToCart = (data) => {
    const navigate = useNavigate();
    const {currentUser} = useAuth();
    const queryClient = useQueryClient();
    console.log("currentUser", currentUser)
    if(!currentUser) {
        queryClient.setQueryData(`${currentUser?.uid}`, data)

        console.log("cartData", queryClient.getQueryData(`${currentUser?.uid}`))
    } else {
        navigate('/signin')
    }
}

export const addToCart =(data, userData) => {

    const cartData = {
        food: {
            foodId: data._id,
            name: data.name,
            photo: data.photo,
            price: data.price
        },
        userId: userData?.uid
    }

    axios.post(`${CART_API}/addToCart`, cartData)
        .then((res) => {
            if(res.data.success && res.status === 200) {
                toast.success('Food add in cart!')
            }
        })
        .catch((err) => {
            err && toast.error(err.message)
        })
};


export const deleteCartData = (id) => {
    axios.delete(`${CART_API}/user/${id}`)
    .then((res) => {
        if(res.data.success && res.status === 200) {
        }
    })
    .catch((err) => {
        err && toast.error(err.message)
    })
}