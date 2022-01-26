import { Box } from '@mui/system';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import image1 from './../../../resources/image/1.png';
import image2 from './../../../resources/image/2.png';
import './style.css';

const Testimonials = () => {
    return (
        <div className="testimonials">
            <div className="testimonial_div">
                <Box sx={{ width: 500, p: 2 }}>
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
                        <div className="review_card shadow border-1 card">
                            <img className="review_img" src={image1} alt="" />
                            <div className="myCarousel">
                                <p>
                                    It's freeing to be able to catch up on customized news and not be
                                    distracted by a social media element on the same site
                                </p>
                                <h3>Shirley Fultz</h3>
                            </div>
                        </div>

                        <div className="review_card shadow border-1 card">
                            <img className="review_img" src={image2} alt="" />
                            <div className="myCarousel">
                                <p>
                                    The simple and intuitive design makes it easy for me use. I highly
                                    recommend Fetch to my peers.
                                </p>
                                <h3>Daniel Keystone</h3>
                            </div>
                        </div>
                        <div className="review_card shadow border-1 card">
                            <img className="review_img" src={image2} alt="" />
                            <div className="myCarousel">
                                <p>
                                    The simple and intuitive design makes it easy for me use. I highly
                                    recommend Fetch to my peers.
                                </p>
                                <h3>Daniel Keystone</h3>
                            </div>
                        </div>
                    </Carousel>
                </Box>
            </div>
            <br />
        </div>
    );
};

export default Testimonials;