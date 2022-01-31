import axios from "axios";
import {ORDER_API} from '../apis/apis';
import toast from 'react-hot-toast';

export const updateOrder = (id, refetch, data) => {

    axios.put(`${ORDER_API}/${id}`, {status: data})
        .then((res) => {
            if(res.data.success && res.status === 200) {
                toast.success(`${id} Order Updated!`)
                refetch()
            }
        })
        .catch((err) => {
            if(!!err) {
                toast.error("Some thing is wrong!")
            }
        })
}