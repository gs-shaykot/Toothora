import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import { FaUserDoctor } from 'react-icons/fa6';

const About = () => {
    return (
        // make it responsive
        <div className="px-4 py-12 sm:px-8 md:px-16">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-y-8 gap-x-12 flex-wrap">

                    {/* Image Section */}
                    <div className="flex-1 w-full md:w-auto">
                        <img className="rounded-lg w-full" src="https://i.ibb.co/NG4YVVY/a1.jpg" alt="Dental care" />
                    </div>

                    {/* Text + Features Section */}
                    <div className="flex-1 w-full md:w-auto">
                        <h1 className="font-ubuntu text-3xl font-extrabold mb-5 text-lekha">
                            Dedicated to Your Smile, Committed to Your Care
                        </h1>
                        <p className="text-gray-600 mb-6">
                            At Flossy Dental, we're committed to providing exceptional dental care in a comfortable and welcoming environment...
                        </p>

                        {/* Features */}
                        <div className="flex flex-col sm:flex-row gap-6 mb-6">
                            {/* Feature 1 */}
                            <div className="flex items-start">
                                <div className="bg-[#dbeafe] p-4 rounded-full shadow-md h-12 w-12 text-lg mr-4 flex items-center justify-center">
                                    <FaShieldAlt />
                                </div>
                                <div>
                                    <h3 className="text-lekha font-bold text-lg mb-1">Insurance Support</h3>
                                    <p className="text-gray-700">
                                        We work with most major insurance providers to ensure affordable care.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex items-start">
                                <div className="bg-[#dbeafe] p-4 rounded-full shadow-md h-12 w-12 text-lg mr-4 flex items-center justify-center">
                                    <FaUserDoctor />
                                </div>
                                <div>
                                    <h3 className="text-lekha font-bold text-lg mb-1">Experienced Dentists</h3>
                                    <p className="text-gray-700">
                                        Our team has decades of combined experience in all areas of dentistry.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all whitespace-nowrap cursor-pointer">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;