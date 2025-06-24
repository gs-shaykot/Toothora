import React from 'react';
import Navbar from '../component/navbar';
import Hero from '../pages/Home/Hero';
import Services from '../pages/Home/Services';

const MainLayout = () => {
    return (
        <div className='font-roboto'>
            <Navbar />
            <Hero />
            <Services />
        </div>
    );
};

export default MainLayout;