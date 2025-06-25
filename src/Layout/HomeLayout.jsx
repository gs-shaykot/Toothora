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

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <div className='font-roboto'>
            <Hero />
            <Services />
            <About />
            <Review />
            <Team />
            <WhyToChoose />
            <Blogs />

            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg animate-bounce hover:bg-blue-700 transition-all z-50"
                    aria-label="Go to top"
                >
                    <FaArrowUp className="text-xl" />
                </button>
            )}
        </div>
    );
};

export default HomeLayout;