import React from 'react';
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Iframe from 'react-iframe';
import ContactForm from './ContactForm';
import Additional from './Additional';

const Contact = () => {
    return (
        <section className="contact mt-16">
            <div className='bg-[#eff6ff] flex flex-col items-center justify-center'>
                <div className="pt-20 flex flex-col items-center  justify-center">
                    <h1 className='font-ubuntu font-extrabold text-4xl mb-4'>Contact Us</h1>
                    <p className='text-xl text-center text-[#4b5563]'>We're here to answer your questions and provide the dental care you deserve. Reach out to our <br /> friendly team today.</p>
                </div>
                <div className='flex gap-8 mt-5 mb-10'>
                    <div className='flex items-center gap-2 text-lg'>
                        <FaPhoneAlt className='text-primary' />
                        <p>+8801515267655</p>
                    </div>
                    <div className='flex items-center gap-2 '>
                        <MdEmail className='text-primary' />
                        <p>shaykotkhan1916@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-2 '>
                        <FaClock className='text-primary' />
                        <p>Mon-Fri: 8AM-6PM</p>
                    </div>
                </div>
                <button
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all !rounded-button whitespace-nowrap cursor-pointer mb-20">
                    Book an Appointment
                </button>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-4 py-14">
                {/* Address Card */}
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-100 text-blue-600 w-10 h-10 flex items-center justify-center rounded-full text-lg">
                            <FaMapMarkerAlt />
                        </div>
                        <h2 className="text-lg font-semibold">Address & Directions</h2>
                    </div>
                    <p>123 Smile Avenue</p>
                    <p>Dental District, NY 10001</p>
                    <p>United States</p>
                    <a href="#" className="text-blue-600 mt-3 inline-block hover:underline">Get Directions →</a>
                </div>

                {/* Phone Card */}
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-100 text-blue-600 w-10 h-10 flex items-center justify-center rounded-full text-lg">
                            <FaPhoneAlt />
                        </div>
                        <h2 className="text-lg font-semibold">Phone & Emergency</h2>
                    </div>
                    <p>Main: (555) 123-4567</p>
                    <p>Emergency: (555) 987-6543</p>
                    <p>Fax: (555) 123-4568</p>
                    <a href="#" className="text-blue-600 mt-3 inline-block hover:underline">
                        Call Now <FaPhoneAlt className="inline ml-1" />
                    </a>
                </div>

                {/* Working Hours Card */}
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-100 text-blue-600 w-10 h-10 flex items-center justify-center rounded-full text-lg">
                            <FaClock />
                        </div>
                        <h2 className="text-lg font-semibold">Working Hours</h2>
                    </div>
                    <p>Monday - Friday: 8AM - 6PM</p>
                    <p>Saturday: 9AM - 2PM</p>
                    <p>Sunday: Closed</p>
                    <a href="#" className="text-blue-600 mt-3 inline-block hover:underline">
                        Book Appointment 📅
                    </a>
                </div>
            </div>

            <div className='bg-[#f9fafb] py-10'>
                <div className="container mx-auto flex flex-col items-center justify-center ">
                    <h1 className='font-ubuntu font-extrabold text-4xl mb-10'>Find Our Location</h1>
                    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24790.226868118523!2d91.1573824918271!3d23.46707634673446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37547f26759e8171%3A0x66e643556d5d8d8c!2sCumilla%20Trauma%20Centre!5e1!3m2!1sen!2sbd!4v1750860560277!5m2!1sen!2sbd"
                        width="100%"
                        height="420px"
                        id=""
                        className="rounded-lg shadow-md"
                        display="block"
                        position="relative" />
                </div>
            </div>

            <ContactForm />
            <Additional />
        </section>
    );
};

export default Contact;