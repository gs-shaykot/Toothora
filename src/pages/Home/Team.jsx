import React from 'react';

const Team = () => {
    const teamMembers = [
        {
            name: "Dr. Michael Thompson",
            image: 'https://i.ibb.co/wFV2BCn5/d3.jpg',
            position: "Chief Dentist",
            description: "With over 15 years of experience, Dr. Thompson specializes in cosmetic and restorative dentistry.",
            socialLinks: {
                linkedin: "#",
                twitter: "#",
                instagram: "#",
            }
        },
        {
            name: "Dr. Jennifer Lee",
            image: 'https://i.ibb.co/14Kkjrr/d2.jpg',
            position: "Orthodontist",
            description: "Dr. Lee is our orthodontics expert, helping patients achieve perfectly aligned smiles.",
            socialLinks: {
                linkedin: "#",
                twitter: "#",
                instagram: "#",
            }
        },
        {
            name: "Dr. Robert Garcia",
            image: 'https://i.ibb.co/cc7kbMH8/d1.jpg',
            position: "Periodontist",
            description: "Specializing in gum health, Dr. Garcia ensures the foundation of your smile is strong and healthy.",
            socialLinks: {
                linkedin: "#",
                twitter: "#",
                instagram: "#",
            }
        },
    ]
    return (
        <div>
            <section id="team" className="py-16 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-96 h-96">
                        <div className="w-full h-full bg-blue-50 rounded-bl-full opacity-30"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-80 h-80">
                        <div className="w-full h-full bg-blue-50 rounded-tr-full opacity-30"></div>
                    </div>
                </div>
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Skilled Hands, Caring Hearts</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Meet our team of experienced dental professionals dedicated to providing you with the best care possible.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {
                            teamMembers.map((member, index) => (
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                                    <div className="h-80 overflow-hidden relative">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

export default Team;