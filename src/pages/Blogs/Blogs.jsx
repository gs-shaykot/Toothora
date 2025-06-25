import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaSearch, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Blogs = () => {
    const [activeTab, setActiveTab] = useState("recent");
    const blogs = [
        {
            title: "5 Ways to Prevent Tooth Decay Naturally",
            category: "Oral Health",
            date: "June 18, 2025",
            readTime: "5 min read",
            excerpt: "Learn effective natural methods to keep your teeth healthy and prevent cavities without harsh chemicals.",
            image: "https://i.ibb.co/SD5nsRSj/bb1.jpg"
        },
        {
            title: "Understanding Different Types of Dental Fillings",
            category: "Dental Procedures",
            date: "June 15, 2025",
            readTime: "6 min read",
            excerpt: "A comprehensive guide to various filling materials and how to choose the right one for your needs.",
            image: "https://i.ibb.co/Fqb6wNzz/bb2.jpg"
        },
        {
            title: "The Connection Between Oral Health and Heart Disease",
            category: "Health Research",
            date: "June 12, 2025",
            readTime: "7 min read",
            excerpt: "New research reveals the surprising links between your dental hygiene and cardiovascular health.",
            image: "https://i.ibb.co/Z6H3GYHd/bb3.jpg"
        },
        {
            title: "Children's Dental Care: A Parent's Guide",
            category: "Pediatric Dentistry",
            date: "June 10, 2025",
            readTime: "6 min read",
            excerpt: "Essential tips for maintaining your child's oral health from infancy through adolescence.",
            image: "https://i.ibb.co/yFzM5knR/bb4.jpg"
        },
        {
            title: "Teeth Whitening: Professional vs. At-Home Options",
            category: "Cosmetic Dentistry",
            date: "June 8, 2025",
            readTime: "5 min read",
            excerpt: "Compare the effectiveness, cost, and safety of different teeth whitening methods available today.",
            image: "https://i.ibb.co/C3G7wLhm/bb5.jpg"
        },
        {
            title: "Managing Dental Anxiety: Tips and Techniques",
            category: "Patient Care",
            date: "June 5, 2025",
            readTime: "4 min read",
            excerpt: "Practical strategies to overcome fear and anxiety before and during dental appointments.",
            image: "https://i.ibb.co/whLkJwGz/bb6.jpg"
        }
    ];

    const categories = [
        "Oral Health",
        "Dental Procedures",
        "Cosmetic Dentistry",
        "Pediatric Dentistry",
        "Health Research",
        "Patient Care"
    ];

    const popularPosts = [
        {
            title: "How Often Should You Really Replace Your Toothbrush?",
            date: "May 28, 2025",
            views: "2.4k views"
        },
        {
            title: "The Truth About Fluoride: Benefits and Myths",
            date: "May 15, 2025",
            views: "1.8k views"
        },
        {
            title: "Why Flossing Is Just As Important As Brushing",
            date: "May 3, 2025",
            views: "1.5k views"
        }
    ];

    return (
        <div>
            <div className="min-h-screen bg-white">
                {/* Header */}
                <section className="bg-blue-50 py-16 text-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Dental Health Insights & News</h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Stay informed with the latest dental care tips, industry updates, and expert advice to maintain your perfect smile.
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row gap-8">
                    {/* Blog Body */}
                    <div className="w-full md:w-3/4"> 

                        {/* Featured Post */}
                        <div className="mb-12">
                            <div className="bg-white rounded-xl shadow-md overflow-hidden md:flex">
                                <img
                                    src="https://i.ibb.co/qLjqV21G/bb7.jpg"
                                    alt="Featured Dental Tech"
                                    className="md:w-1/2 h-full object-cover"
                                />
                                <div className="p-8 md:w-1/2">
                                    <span className="uppercase text-xs text-blue-600 font-semibold">Featured Article</span>
                                    <h2 className="text-2xl font-bold text-gray-800 my-2">The Latest Advancements in Dental Technology</h2>
                                    <p className="text-gray-600 mb-4">
                                        Discover how cutting-edge technology is revolutionizing dental care and improving patient experiences across the globe.
                                    </p>
                                    <div className="flex items-center text-sm text-gray-500 mb-6 gap-2">
                                        <span>June 20, 2025</span> • <span>8 min read</span>
                                    </div>
                                    <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">Read Article</button>
                                </div>
                            </div>
                        </div>

                        {/* Blog Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogs.map((post, i) => (
                                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-transform hover:scale-[1.02] overflow-hidden">
                                    <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
                                    <div className="p-6">
                                        <div className="text-xs text-blue-600 font-semibold mb-2">{post.category}</div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">{post.title}</h3>
                                        <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                                        <div className="flex items-center text-xs text-gray-500 mb-4 gap-2">
                                            <span>{post.date}</span> • <span>{post.readTime}</span>
                                        </div>
                                        <a href="#" className="text-blue-600 font-medium text-sm">Read More →</a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 flex justify-center">
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">Load More Articles</button>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="w-full md:w-1/4 space-y-8">
                        {/* Search */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Search Articles</h3>
                            <div className="relative">
                                <input type="text" placeholder="Search..." className="w-full px-4 py-2 border rounded-lg text-sm" />
                                <FaSearch className="absolute top-2.5 right-3 text-gray-400" />
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="bg-white rounded-xl shadow-sm p-6 pt-0">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
                            <ul className="space-y-2">
                                {categories.map((cat, i) => (
                                    <li key={i}>
                                        <a href="#" className="flex justify-between text-gray-600 hover:text-blue-600">
                                            <span>{cat}</span>
                                            <span className="text-gray-400 text-sm">(12)</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Popular Posts */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Popular Posts</h3>
                            <div className="space-y-4">
                                {popularPosts.map((post, i) => (
                                    <div key={i} className="flex items-start space-x-3">
                                        <div className="bg-blue-100 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center">{i + 1}</div>
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-800">{post.title}</h4>
                                            <div className="flex text-xs text-gray-500 gap-2">
                                                <span>{post.date}</span> • <span>{post.views}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="bg-blue-50 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-2">Subscribe to Our Newsletter</h3>
                            <p className="text-gray-600 text-sm mb-4">Get the latest dental health tips and news delivered to your inbox.</p>
                            <input type="email" placeholder="Your email" className="w-full px-4 py-2 mb-3 border rounded-lg text-sm" />
                            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg">Subscribe</button>
                        </div>
                    </aside>
                </section>
 
            </div>
        </div>
    );
};

export default Blogs;