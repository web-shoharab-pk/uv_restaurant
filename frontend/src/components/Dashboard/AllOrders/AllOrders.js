import axios from "axios";
import React, { useEffect, useState } from 'react';
import toast from "react-hot-toast";
import { ORDER_API } from '../../../apis/apis';
import TableLoader from "../../Skeleton/TableLoader";
import AllOrdersTable from './AllOrdersTable';

const AllOrders = () => {

    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        axios.get(`${ORDER_API}/all`)
            .then((response) => {
                if (response.data.success) {
                    setAllOrders(response.data.order); 
                }
            })
            .catch((err) => {
                if(err) {
                    setAllOrders([])
                    toast.error('Some thing is wrong!')
                }
            })
    }, [])

    return (
        <div>
            {
                allOrders.length > 0 ?
                    <AllOrdersTable allOrders={allOrders} />
                    :
                    <TableLoader />
            }

        </div>
    );
};

export default AllOrders;