import React from 'react';
import { useQuery } from 'react-query';
import { getFoods } from '../../../apis/fetcher';
import TableLoader from '../../Skeleton/TableLoader';
import AllFoodTable from './AllFoodTable';

const AllFood = () => {
    const { data: foods, isLoading, refetch } = useQuery("foods", getFoods)
  
 

    return (
        <div>
            {
                isLoading ? <TableLoader />
                : !!foods?.length ?  <AllFoodTable foods={foods} handleFoodLoader={refetch} /> : <h3>Foods data not found!</h3>
            }
        </div>
    );
};

export default AllFood;