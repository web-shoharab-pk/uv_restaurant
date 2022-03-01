import React from 'react';
import { useQuery } from "react-query";
import { getMyOrder } from "../../../apis/fetcher";
import { useAuth } from "../../../utils/useAuth";
import TableLoader from "../../Skeleton/TableLoader";
import MyOrdersTable from './MyOrdersTable';

const MyOrders = () => {
    const { currentUser, isUserLoading } = useAuth();
    const { isLoading, data } = useQuery("allOrders", () => getMyOrder(currentUser), { enabled: !isUserLoading })

    return (
        <div>
            {
                isLoading ? <TableLoader /> : data?.length ? <MyOrdersTable allOrders={data} />: <h2>Order Not found!</h2>
            }
        </div>
    );
};

export default MyOrders;