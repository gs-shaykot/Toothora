import React from 'react';
import Navbar from '../component/navbar';
import Hero from '../pages/Home/Hero';

const MainLayout = () => {
    return (
        <div className='font-roboto'>
            <Navbar />
            <Hero />
        </div>
    );
};

export default MainLayout;