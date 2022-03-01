import { Container } from '@mui/material';
import React from 'react';
import { useQuery } from 'react-query';
import { getAllReview } from '../../../apis/fetcher';
import TableLoader from '../../Skeleton/TableLoader';
import AllReviewsTable from './AllReviewsTable';

const AllReviews = () => {

    const { data, isLoading, refetch } = useQuery("reviews", getAllReview)

    return (
        <Container>
            {
                isLoading ? <TableLoader />
                    :
                    data.length > 0 ?
                        <AllReviewsTable reviews={data} handleLoadReview={refetch} />
                        :
                        <h3>No Found Any Review!</h3>
            }

        </Container>
    );
};

export default AllReviews;