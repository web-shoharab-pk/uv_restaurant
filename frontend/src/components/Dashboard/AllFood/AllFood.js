import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FOOD_API } from '../../../apis/apis';
import TableLoader from '../../Skeleton/TableLoader';
import AllFoodTable from './AllFoodTable';

const AllFood = () => {

    const [foods, setFoods] = useState([])
    const handleFoodLoader = () => {
        axios.get(`${FOOD_API}/all`)
            .then((res) => {

                if(res.status === 200 && res.data.success) {
                    setFoods(res.data.foods)
                }
            })
            .catch((err) => {
                if(err) {
                    setFoods([])
                    toast.error("some thing is wrong!")
                }
            })
    }

    useEffect(() => {
        handleFoodLoader()
    }, [])
    return (
        <div>
            {
                foods.length > 0 
                ?
                <AllFoodTable foods={foods} handleFoodLoader={handleFoodLoader} />
                :
                <TableLoader />
            } 
        </div>
    );
};

export default AllFood;