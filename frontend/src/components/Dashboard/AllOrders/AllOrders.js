import React from 'react';
import { useQuery } from "react-query";
import { getAllOrder } from "../../../apis/fetcher";
import TableLoader from "../../Skeleton/TableLoader";
import AllOrdersTable from './AllOrdersTable';

const AllOrders = () => {
    
    const { data: allOrders, isLoading, refetch } = useQuery("orders", getAllOrder)

    return (
        <div>
            {
                isLoading ? <TableLoader />
                    :
                    allOrders.length > 0 ?
                        <AllOrdersTable allOrders={allOrders} handleOrderLoader={refetch} />
                        :
                        <h3>Order Data not found!</h3>
            }

        </div>
    );
};

export default AllOrders;