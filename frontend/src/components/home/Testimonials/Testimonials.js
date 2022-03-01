import Rating from '@mui/material/Rating';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { REVIEW_API } from '../../../apis/apis';
import './style.css';

const Testimonials = () => {

    const [reviews, setReviews] = useState([])


    useEffect(() => {
        axios.get(`${REVIEW_API}/all`)
            .then((res) => {
                if (res.data.success) {
                    setReviews(res.data.reviews)
                }
            })
            .catch((err) => {
                setReviews([])
            })
    }, []);

    return (
        <div className="testimonials">
            <div className="testimonial_div">
                <Box sx={{ width: '100%', p: 2 }}>
                    <div className="review-title text-center">
                        <br />
                        <span>What Our Clients Says</span>
                    </div>
                    <Carousel
                        showArrows={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        showStatus={false}
                        autoPlay={true}
                        interval={3000}
                    >
                        {
                            reviews?.length > 0 ?
                                reviews?.map((review) => (
                                    <div key={review._id} className="review_card shadow border-1 card">
                                        <img className="review_img" src={review.image} alt="" />
                                        <div className="myCarousel">
                                            <p>
                                                {review.text}
                                            </p>
                                            <h3>{review?.reviewedBy?.name}</h3>
                                            <Rating name="read-only"
                                                value={review?.rate}
                                                readOnly />
                                        </div>
                                    </div>
                                )

                                )
                                : ''
                        }
                    </Carousel>
                </Box>
            </div>
            <br />
        </div>
    );
};

export default Testimonials;