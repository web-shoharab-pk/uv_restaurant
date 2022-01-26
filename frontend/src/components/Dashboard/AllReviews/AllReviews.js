import { Container } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { REVIEW_API } from '../../../apis/apis';
import TableLoader from '../../Skeleton/TableLoader';
import AllReviewsTable from './AllReviewsTable';

const AllReviews = () => {
    const [reviews, setReviews] = useState([])

    const handleLoadReview = () => {
        axios.get(`${REVIEW_API}/all`)
        .then((res) => {
            if (res.data.success) {
                setReviews(res.data.reviews)
            }
        })
        .catch((err) => {
            setReviews([])
        })
    }

    useEffect(() => {
        handleLoadReview()
    }, [])

    return (
        <Container>
            {
                reviews.length > 0 ?
                    <AllReviewsTable reviews={reviews} handleLoadReview={handleLoadReview} />
                    :
                    <TableLoader />
            }

        </Container>
    );
};

export default AllReviews;