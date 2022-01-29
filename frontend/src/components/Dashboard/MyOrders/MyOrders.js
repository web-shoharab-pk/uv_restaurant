import axios from "axios";
import React, { useEffect, useState } from 'react';
import { ORDER_API } from '../../../apis/apis';
import { useAuth } from "../../../utils/useAuth";
import TableLoader from "../../Skeleton/TableLoader";
import MyOrdersTable from './MyOrdersTable';

const MyOrders = () => {

    const [allOrders, setAllOrders] = useState([]);
    const { currentUser } = useAuth();

    useEffect(() => {

    }, [])
    // const data = {
    //     orderedBy: {
    //         name: currentUser?.displayName,
    //         userId: currentUser?.uid
    //     }
    // }
    useEffect(() => {

        axios.post(`${ORDER_API}/user`, {
            orderedBy: {
                name: currentUser?.displayName,
                userId: currentUser?.uid
            }
        })
            .then((response) => {
                if (response.data.success) {
                    setAllOrders(response.data.order);
                }
            })
            .catch((err) => {
                if (err) {
                    setAllOrders([])
                    // toast.error(err.message)
                }
            })
    }, [currentUser?.displayName, currentUser?.uid])

    return (
        <div>
            {
                allOrders.length > 0 ?
                    <MyOrdersTable allOrders={allOrders} />
                    :
                    <TableLoader />
            }

        </div>
    );
};

export default MyOrders;