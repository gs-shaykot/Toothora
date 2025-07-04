import Navbar from '../component/Navbar'
import Hero from '../pages/Home/Hero';
import Services from '../pages/Home/Services';
import About from '../pages/Home/About';
import Review from '../pages/Home/Review';
import Team from '../pages/Home/Team';
import WhyToChoose from '../pages/Home/WhyToChoose';
import Blogs from '../pages/Home/Blogs';
import Footer from '../component/Footer';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const HomeLayout = () => {
    return (
        <div className='font-roboto'>
            <Hero />
            <Services />
            <About />
            <Review />
            <Team />
            <WhyToChoose />
            <Blogs />
        </div>
    );
};

export default HomeLayout;