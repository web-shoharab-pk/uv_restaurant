import { CardMedia, Container } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import deep from './../../../resources/image/deep.png';
import reju from './../../../resources/image/reju.png';
import ripa from './../../../resources/image/ripa.png';
import rupon from './../../../resources/image/rupon.png';
import styles from './styles.module.css';


const chefData = [
    {
        name: "Rifti Rupon",
        label: "Korean Master Chef",
        img: rupon,
        alt: 'Rupon Image'
    },
    {
        name: "Chef Name",
        label: "Mater Chef",
        img: deep,
        alt: 'Rupon Image'
    },
    {
        name: "Chef Name",
        label: "Mater Chef",
        img: reju,
        alt: 'Rupon Image'
    },
    {
        name: "Chef Name",
        label: "Mater Chef",
        img: ripa,
        alt: 'Rupon Image'
    },
]

const Chef = () => {
    return (
        <section>
            <div className={styles.chef_section}>
                <div>
                    <h4 className={styles.chef_title_h4}>Ready to serve our talented chefs</h4>
                    <Container>
                        <div className="text-center w-100 h-100 mt-5 d-flex justify-content-center ">
                            <Carousel
                                showArrows={true}
                                infiniteLoop={true}
                                showThumbs={false}
                                showStatus={false}
                                autoPlay={true}
                                interval={3000}
                            >
                                {
                                    chefData.map((data) => (
                                        <div className={styles.chef_card}>
                                            <div className="text-center shadow ">
                                                <CardMedia
                                                    component="img"
                                                    className={styles.chef_card_image}
                                                    src={data.img}
                                                    alt="Deep"
                                                    // width={200}
                                                    height={200}
                                                />
                                                <h5 className={styles.chef_name}>{data.name}</h5>
                                                <p className={styles.chef_title}>{data.label}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Carousel>
                        </div>
                    </Container>
                </div>
            </div>
        </section>
    );
};

export default Chef;