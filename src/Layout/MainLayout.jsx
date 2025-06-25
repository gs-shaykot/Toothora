import React from 'react';
import Navbar from './../component/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './../component/Footer';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const MainLayout = () => {
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
        <div>
            <Navbar />
            <Outlet />
            <Footer />

            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-12 bg-blue-600 text-white p-3 rounded-full shadow-lg animate-bounce hover:bg-blue-700 transition-all z-50"
                    aria-label="Go to top"
                >
                    <FaArrowUp className="text-xl" />
                </button>
            )}
        </div>
    );
};

export default MainLayout;