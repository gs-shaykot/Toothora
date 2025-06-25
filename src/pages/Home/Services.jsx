import React from 'react';

const Services = () => {
    const services = [
        {
            title: 'Teeth Whitening',
            description: 'Achieve a brighter, more confident smile with our professional whitening treatments that are safe and effective.',
            image: 'https://i.ibb.co/QjrRYWqy/s3.jpg',
        },
        {
            title: 'Dental Implants',
            description: 'Replace missing teeth with our state-of-the-art implants that look, feel, and function just like natural teeth.',
            image: 'https://i.ibb.co/0yFBbF5p/s2.jpg',
        },
        {
            title: 'Cosmetic Dentistry',
            description: 'Transform your smile with our comprehensive cosmetic services including veneers, bonding, and smile makeovers.',
            image: 'https://i.ibb.co/1tB3ckp8/s1.jpg',
        },
    ]

    return (
        <div>
            <section id="services" className="py-16 bg-gray-50 relative overflow-hidden">
                <div className="absolute -top-36 -right-20 w-64 h-64 z-0">
                    <div className="w-full h-full bg-blue-100 rounded-full opacity-80"></div>
                </div>
                <div className="absolute -bottom-40 -left-32 w-96 h-96 ">
                    <div className="w-full h-full bg-blue-100 rounded-full opacity-80"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Comprehensive Dental Care For Every Smile</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">We offer a wide range of dental services to meet all your oral health needs in one convenient location.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {
                            services.map((service, index) => (
                                <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer">
                                    <div className="h-64 overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                        <p className="text-gray-600">{service.description}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;