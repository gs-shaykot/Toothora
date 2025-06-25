import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Flossy Dental</h3>
                        <p className="mb-4">Creating beautiful smiles with expert care since 2010.</p>
                        <div className="flex space-x-4 text-lg">
                            <a href="#" className="text-white hover:text-blue-300 cursor-pointer">
                                <FaFacebookF/>
                            </a>
                            <a href="#" className="text-white hover:text-blue-300 cursor-pointer">
                                <FaXTwitter/>
                            </a>
                            <a href="#" className="text-white hover:text-blue-300 cursor-pointer">
                                <FaInstagram/>
                            </a>
                            <a href="#" className="text-white hover:text-blue-300 cursor-pointer">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                        <p className="mb-2 flex items-start">
                            <i className="fas fa-map-marker-alt mr-2 mt-1"></i>
                            123 Smile Avenue, Dental City, DC 12345
                        </p>
                        <p className="mb-2 flex items-start">
                            <i className="fas fa-phone-alt mr-2 mt-1"></i>
                            (555) 123-4567
                        </p>
                        <p className="mb-2 flex items-start">
                            <i className="fas fa-envelope mr-2 mt-1"></i>
                            info@flossydental.com
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Working Hours</h3>
                        <p className="mb-2">Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p className="mb-2">Saturday: 9:00 AM - 4:00 PM</p>
                        <p className="mb-2">Sunday: Closed</p>
                        <p className="mt-4 text-blue-300">Emergency services available 24/7</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#services" className="hover:text-blue-300 cursor-pointer">Our Services</a></li>
                            <li><a href="#about" className="hover:text-blue-300 cursor-pointer">About Us</a></li>
                            <li><a href="#team" className="hover:text-blue-300 cursor-pointer">Our Team</a></li>
                            <li><a href="#blog" className="hover:text-blue-300 cursor-pointer">Blog</a></li>
                            <li><a href="#" className="hover:text-blue-300 cursor-pointer">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm">
                    <p>&copy; 2025 Flossy Dental. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;