import React from 'react';
import Chef from '../components/home/Chef/Chef';
import FoodMenu from '../components/home/FoodMenu/FoodMenu';
import Footer from '../components/home/Footer/Footer';
import Header from '../components/home/Header/Header';
import PhotoGallery from '../components/home/PhotoGallery/PhotoGallery';
import Testimonials from '../components/home/Testimonials/Testimonials';
import styles from'./styles.module.css';

const Home = () => {
    return (
        <div className={styles.home_page}>
             <Header /> 
             <div style={{background: '#343738'}} className={styles.food_menu}>
             <FoodMenu /> 
             </div>
             <Chef />
             <PhotoGallery /> 
             <Testimonials />
             <Footer /> 
        </div>
    );
};

export default Home;