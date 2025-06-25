import React from 'react';

const Blogs = () => {
    const Blogs = [
        {
            title: "5 Flossing Techniques You Need to Know",
            descrption: "Learn the proper way to floss your teeth to prevent gum disease and maintain optimal oral health.",
            image: "https://i.ibb.co/CKwX10jm/b1.jpg",
            date: "June 15, 2025",
        },
        {
            title: "Making Dental Visits Fun for Kids",
            descrption: "Discover how to turn dental appointments into positive experiences for your children.",
            image: "https://i.ibb.co/WNJtRhJs/b2.jpg",
            date: "June 10, 2025",
        },
        {
            title: "Top Foods That Strengthen Your Teeth",
            descrption: "Explore the best foods to include in your diet for stronger teeth and healthier gums.",
            image: "https://i.ibb.co/LTqntmQ/b3.jpg",
            date: "June 5, 2025",
        }
    ]
    return (
        <div>
            <section id="blog" className="py-16 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-0 w-72 h-72 transform -translate-x-1/2">
                        <div className="w-full h-full bg-red-200 rounded-r-full opacity-30"></div>
                    </div>
                    <div className="absolute bottom-1/4 right-0 w-72 h-72 transform translate-x-1/2">
                        <div className="w-full h-full bg-red-200 rounded-l-full opacity-30"></div>
                    </div>
                </div>
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Insights For A Healthier Smile</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Stay informed with the latest dental tips, news, and advice from our expert team.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 relative z-10">
                        {
                            Blogs.map((blog, index) => (
                                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="text-sm text-gray-500 mb-2">{blog.date}</div>
                                        <h3 className="text-xl font-bold mb-2">{blog.date}</h3>
                                        <p className="text-gray-600 mb-4">{blog.descrption}</p>
                                        <a href="#" className="text-blue-500 font-medium hover:underline cursor-pointer">Read More</a>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                    <div className="text-center mt-10">
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all !rounded-button whitespace-nowrap cursor-pointer">
                            View All Articles
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;