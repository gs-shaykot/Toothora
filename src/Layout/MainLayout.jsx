import React from 'react';
import Navbar from '../component/navbar';
import Hero from '../pages/Home/Hero';
import Services from '../pages/Home/Services';
import About from '../pages/Home/About';
import Review from '../pages/Home/Review';
import Team from '../pages/Home/Team';

const MainLayout = () => {
    return (
        <div className='font-roboto'>
            <Navbar />
            <Hero />
            <Services />
            <About />
            <Review />
            <Team />
        </div>
    );
};

export default MainLayout;