import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import { FaUserDoctor } from 'react-icons/fa6';

const About = () => {
    return (
        <div className='p-16'>
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row items-center gap-8'>
                    <div className='basis-1/2'>
                        <img className='rounded-lg' src="https://i.ibb.co/NG4YVVY/a1.jpg" alt="" />
                    </div>
                    <div className='basis-1/2'>
                        {/* content */}
                        <h1 className='font-ubuntu text-3xl font-extrabold mb-5 text-lekha'>Dedicated to Your Smile, Committed to Your Care</h1>
                        <p className='text-gray-600 mb-4'>At Flossy Dental, we're committed to providing exceptional dental care in a comfortable and welcoming environment. Our team of experienced professionals uses the latest technology and techniques to ensure you receive the highest quality treatment tailored to your unique needs.</p>
                        <div className='flex mb-4'>
                            <div className='flex justify-between'>
                                <div className='bg-[#dbeafe] p-4 rounded-full shadow-md h-12 w-12 text-lg mr-3'>
                                    <FaShieldAlt />
                                </div>
                                <div>
                                    <h3 className='text-lekha font-bold text-lg mb-1'>Insurance Support</h3>
                                    <p className='text-gray-700'>We work with most major insurance providers to ensure affordable care.</p>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='bg-[#dbeafe] p-4 rounded-full shadow-md h-12 w-12 text-lg mr-3'>
                                    <FaUserDoctor />
                                </div>
                                <div>
                                    <h3 className='text-lekha font-bold text-lg mb-1'>Experienced Dentists</h3>
                                    <p className='text-gray-700'>Our team has decades of combined experience in all areas of dentistry.</p>
                                </div>
                            </div>
                        </div>
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all !rounded-button whitespace-nowrap cursor-pointer">
                            Learn More About Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;