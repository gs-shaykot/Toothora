import React from 'react';
import { FaStar } from 'react-icons/fa';

const Hero = () => {
    return (
        <div>
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://i.ibb.co/VWG6wwG7/e4e42014b3a47c4a89f9614fd64dda71.jpg"
                        alt="Dental hero"
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 h-screen bg-gradient-to-r from-white via-white/90 to-transparent"></div>
                </div>
                <div className="container mx-auto px-6 py-20 relative z-10">
                    <div className="max-w-xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Creating Beautiful Smiles With Expert Care</h1>
                        <p className="text-lg text-gray-700 mb-8">At Flossy, we believe in combining comfort, confidence, and care with expert service and advanced technology.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all !rounded-button whitespace-nowrap cursor-pointer">
                                Book an Appointment
                            </button>
                            <a href='#services' className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-50 transition-all !rounded-button whitespace-nowrap cursor-pointer">
                                Our Services
                            </a>
                        </div>
                        <div className="mt-8 flex items-center">
                            <div className="bg-blue-50 px-3 py-1 rounded-full flex items-center">
                                <FaStar className="text-yellow-500 mr-1" />
                                <span className="font-semibold">4.9/5</span>
                            </div>
                            <span className="ml-2 text-gray-600">based on 200+ reviews</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;