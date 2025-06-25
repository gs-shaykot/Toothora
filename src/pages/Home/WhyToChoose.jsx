import React from 'react';

const WhyToChoose = () => {
    const Reasons = [
        {
            title: "Expert & Caring Team",
            description: "Our highly trained professionals are committed to providing gentle, compassionate care tailored to your needs.",
            image: "https://i.ibb.co/Y7RvknKp/r1.jpg"
        },
        {
            title: "Advanced Technology & Treatments",
            description: "We invest in the latest dental technology to ensure precise diagnoses and comfortable, efficient treatments.",
            image: "https://i.ibb.co/pr2SjGQD/r2.jpg"
        },
        {
            title: "Patient-Centered Approach",
            description: "We take the time to listen to your concerns and involve you in decisions about your dental health.",
            image: "https://i.ibb.co/bMMfy1yk/r3.jpg"
        },
    ]
    return (
        <div>
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Why Choose Flossy For Your Dental Care?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">We combine advanced technology with personalized care to provide an exceptional dental experience.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {
                            Reasons.map((reason, index) => (
                                <div className="bg-white p-6 rounded-xl shadow-md">
                                    <div className="mb-4">
                                        <img
                                            src={reason.image}
                                            alt={reason.title}
                                            className="w-full h-48 object-cover object-top rounded-lg"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                                    <p className="text-gray-600">{reason.description}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyToChoose;