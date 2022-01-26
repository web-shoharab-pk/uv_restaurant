import React from 'react';
import spinner from './../../resources/image/animationLoading.gif';

const HomeLoader = () => {
    return (
        <section className="h-100 w-100 d-flex justify-content-center align-items-center">
        <img className="h-100 w-100" src={spinner} alt="" />
    </section>
    );
};

export default HomeLoader;