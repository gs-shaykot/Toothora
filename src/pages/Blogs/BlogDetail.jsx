import React, { useState } from 'react';
// Import react-icons for font awesome
import { FaArrowLeft, FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BlogDetail = () => {
  // Icon mapping for social buttons
  const socialIconComponents = {
    'facebook-f': <FaFacebookF />,
    'twitter': <FaTwitter />,
    'linkedin-in': <FaLinkedinIn />,
    'envelope': <FaEnvelope />,
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to='/blog'
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <FaArrowLeft className="mr-2" /> Back to Blog
        </Link>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            {/* Article Header */}
            <div className="mb-8">
              <div className="rounded-xl overflow-hidden mb-6">
                <img
                  src="https://i.ibb.co/svQ8VLSP/bbd.jpg"
                  alt="The Latest Advancements in Dental Technology"
                  className="w-full h-auto object-cover"
                />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                The Latest Advancements in Dental Technology
              </h1>

              <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6">
                <span>June 20, 2025</span>
                <span className="mx-2">•</span>
                <span>8 min read</span>
                <span className="mx-2">•</span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs">
                  Dental Technology
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-b border-gray-200 py-4">
                <div className="flex items-center mb-4 sm:mb-0">
                  <img
                    src="https://i.ibb.co/B59DHpKL/bbd1.jpg"
                    alt="Dr. Sarah Johnson"
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <p className="font-medium text-gray-800">Dr. Sarah Johnson</p>
                    <p className="text-xs text-gray-500">Dental Technology Specialist</p>
                  </div>
                </div>

                <div className="flex space-x-3">
                  {['facebook-f', 'twitter', 'linkedin-in', 'envelope'].map((icon) => (
                    <button
                      key={icon}
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      {socialIconComponents[icon]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose max-w-none mb-12 text-gray-700">
              <p className="mb-6 leading-relaxed">
                The field of dentistry has undergone remarkable transformations in recent years, with technological innovations revolutionizing how dental professionals diagnose, treat, and manage patient care. These advancements are not only improving the accuracy and efficiency of dental procedures but also enhancing the overall patient experience by making treatments less invasive, more comfortable, and increasingly personalized.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-8 mb-4">
                Digital Imaging and 3D Scanning
              </h2>
              <p className="mb-6 leading-relaxed">
                Traditional dental X-rays have been largely replaced by digital radiography, which
                exposes patients to significantly less radiation while providing dentists with
                instant, high-resolution images.
              </p>
              <p className="mb-6 leading-relaxed">
                Intraoral scanners create detailed 3D digital models of a patient's teeth and gums in
                minutes, eliminating the need for uncomfortable traditional impression materials.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
                <p className="italic">
                  "Digital scanning technology has completely transformed our practice." — Dr.
                  Michael Chen, Prosthodontist
                </p>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-8 mb-4">
                CAD/CAM and Same-Day Dentistry
              </h2>
              <p className="mb-6 leading-relaxed">
                Computer-aided design and computer-aided manufacturing (CAD/CAM) technology has made
                same-day dental restorations a reality.
              </p>
              <ul className="list-disc pl-6 mb-6">
                {[
                  'Digital scanning of the prepared tooth',
                  'Computer-assisted design of the restoration',
                  'Milling of the restoration from a ceramic block',
                  'Characterization and glazing for aesthetic enhancement',
                  'Final bonding to the tooth',
                ].map((item, index) => (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="rounded-xl overflow-hidden my-8">
                <img
                  src="https://i.ibb.co/B59DHpKL/bbd1.jpg"
                  alt="CAD/CAM technology in modern dentistry"
                  className="w-full h-auto"
                />
                <p className="text-sm text-gray-500 italic mt-2">
                  A dentist designing a crown using CAD/CAM technology.
                </p>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-8 mb-4">
                Laser Dentistry
              </h2>
              <p>Dental lasers have expanded treatment possibilities while making many procedures less invasive and more comfortable. Different types of lasers are used for specific applications:</p>
              <table className="min-w-full border border-gray-200 my-6">
                <thead>
                  <tr>
                    {['Laser Type', 'Applications', 'Benefits'].map((header) => (
                      <th
                        key={header}
                        className="border border-gray-200 px-4 py-2 bg-gray-50 text-left text-sm"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      type: 'Diode Lasers',
                      apps: 'Soft tissue procedures, periodontal therapy',
                      benefits: 'Minimal bleeding, faster healing',
                    },
                    {
                      type: 'Er:YAG Lasers',
                      apps: 'Hard tissue procedures, cavity preparation',
                      benefits: 'Often eliminates need for anesthesia',
                    },
                    {
                      type: 'CO2 Lasers',
                      apps: 'Oral surgery, lesion removal',
                      benefits: 'Precise cutting, sterilizes as it works',
                    },
                  ].map((row, index) => (
                    <tr key={index}>
                      <td className="border border-gray-200 px-4 py-2 text-sm">{row.type}</td>
                      <td className="border border-gray-200 px-4 py-2 text-sm">{row.apps}</td>
                      <td className="border border-gray-200 px-4 py-2 text-sm">{row.benefits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-8 mb-4">
                Artificial Intelligence in Dentistry
              </h2>
              <p className="mb-6 leading-relaxed">
                Artificial intelligence (AI) is beginning to transform dental diagnostics and treatment planning. AI algorithms can analyze radiographs to detect caries, identify potential pathologies, and even predict future dental issues based on pattern recognition. This technology serves as a valuable second opinion, helping dentists ensure nothing is overlooked during examinations.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-8 mb-4">
                Virtual Reality and Augmented Reality
              </h2>
              <p className="mb-6 leading-relaxed">
                Virtual reality (VR) and augmented reality (AR) are finding applications in both dental education and patient care. Dental students can practice procedures in virtual environments before working on actual patients, accelerating the learning curve while eliminating risk.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-8 mb-4">
                The Future of Dental Technology
              </h2>
              <ul className="list-decimal pl-6 mb-6">
                {[
                  '<strong>3D Bioprinting:</strong> Printing dental tissues using patient cells.',
                  '<strong>Nanotechnology:</strong> Nanoparticles to repair tooth decay.',
                  '<strong>Smart Materials:</strong> Self-healing dental materials.',
                  '<strong>Teledentistry:</strong> Remote monitoring and consultations.',
                ].map((item, index) => (
                  <li key={index} className="mb-2" dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
              </ul>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-8 mb-4">Conclusion</h2>
              <p className="mb-6 leading-relaxed">
                Technological advancements in dentistry are creating opportunities for more precise,
                efficient, and comfortable care.
              </p>
            </div>

            {/* Author Box */}
            <div className="bg-blue-50 rounded-xl p-6 mb-12">
              <div className="flex flex-col sm:flex-row items-start">
                <img
                  src="https://i.ibb.co/BH18PJNj/1.jpg"
                  alt="Dr. Sarah Johnson"
                  className="w-16 h-16 rounded-full object-cover mr-0 sm:mr-4 mb-4 sm:mb-0"
                />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">About Dr. Sarah Johnson</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Dr. Sarah Johnson is a Dental Technology Specialist with over 15 years of
                    experience.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-blue-600 text-sm hover:text-blue-500">
                      View all posts
                    </a>
                    <span className="text-gray-400">|</span>
                    <a href="#" className="text-blue-600 text-sm hover:text-blue-500 flex items-center">
                      <FaLinkedinIn className="mr-1" /> Connect
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            {/* Author Widget */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <div className="flex items-center mb-4">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520female%2520dentist%2520with%2520confident%2520smile%252C%2520wearing%2520white%2520lab%2520coat%252C%2520neutral%2520background%252C%2520warm%2520professional%2520lighting%252C%2520dental%2520professional%2520portrait%252C%2520clean%2520medical%2520setting&width=200&height=200&seq=131&orientation=squarish"
                  alt="Dr. Sarah Johnson"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-800">Dr. Sarah Johnson</h3>
                  <p className="text-sm text-gray-600">Dental Technology Specialist</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Dr. Johnson specializes in integrating advanced technology into everyday dental
                practice.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
              >
                View all articles by this author →
              </a>
            </div>

            {/* Table of Contents */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Table of Contents</h3>
              <ul className="space-y-2">
                {[
                  'Digital Imaging and 3D Scanning',
                  'CAD/CAM and Same-Day Dentistry',
                  'Laser Dentistry',
                  'Artificial Intelligence in Dentistry',
                  'Virtual Reality and Augmented Reality',
                  'The Future of Dental Technology',
                  'Conclusion',
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Share Widget */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Share This Article</h3>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <FaFacebookF className="mr-2" /> Facebook
                </button>
                <button className="flex-1 bg-blue-400 text-white py-2 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <FaTwitter className="mr-2" /> Twitter
                </button>
                <button className="flex-1 bg-blue-700 text-white py-2 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors">
                  <FaLinkedinIn className="mr-2" /> LinkedIn
                </button>
              </div>
            </div>

            {/* Related Articles */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Related Articles</h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'How Digital Impressions Are Changing Restorative Dentistry',
                    date: 'June 15, 2025',
                    time: '6 min read',
                    imgSrc: 'https://i.ibb.co/8DQdYGL3/p1.jpg',
                  },
                  {
                    title: 'Virtual Reality: A New Approach to Dental Anxiety Management',
                    date: 'June 10, 2025',
                    time: '5 min read',
                    imgSrc: 'https://i.ibb.co/WvZB8qQY/p2.jpg',
                  },
                  {
                    title: 'Laser Dentistry: Minimally Invasive Solutions',
                    date: 'June 5, 2025',
                    time: '7 min read',
                    imgSrc: 'https://i.ibb.co/8DQdYGL3/p1.jpg',
                  },
                ].map((article, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
                      <img
                        src={article.imgSrc}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm">{article.title}</h4>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <span>{article.date}</span>
                        <span className="mx-2">•</span>
                        <span>{article.time}</span>
                      </div>
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800 text-xs font-medium mt-1 inline-block transition-colors"
                      >
                        Read Article →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
              <ul className="space-y-2">
                {[
                  { name: 'Dental Technology', count: 8 },
                  { name: 'Oral Health', count: 12 },
                  { name: 'Dental Procedures', count: 9 },
                  { name: 'Cosmetic Dentistry', count: 7 },
                  { name: 'Pediatric Dentistry', count: 5 },
                ].map((category, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="flex items-center justify-between text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <span>{category.name}</span>
                      <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* More Articles Section */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-8 text-center">
            More Articles You Might Enjoy
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                category: 'Oral Health',
                title: '5 Ways to Prevent Tooth Decay Naturally',
                desc: 'Learn effective natural methods to keep your teeth healthy.',
                date: 'June 18, 2025',
                time: '5 min read',
                imgSrc: 'https://i.ibb.co/SD5nsRSj/bb1.jpg',
              },
              {
                category: 'Dental Procedures',
                title: 'Understanding Different Types of Dental Fillings',
                desc: 'A comprehensive guide to various filling materials.',
                date: 'June 15, 2025',
                time: '6 min read',
                imgSrc: 'https://i.ibb.co/Fqb6wNzz/bb2.jpg',
              },
              {
                category: 'Health Research',
                title: 'The Connection Between Oral Health and Heart Disease',
                desc: 'New research reveals links between dental hygiene and heart health.',
                date: 'June 12, 2025',
                time: '7 min read',
                imgSrc: 'https://i.ibb.co/Z6H3GYHd/bb3.jpg',
              },
            ].map((article, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm overflow-hidden transition-transform hover:shadow-md hover:scale-[1.02]"
              >
                <div className="overflow-hidden h-48">
                  <img src={article.imgSrc} alt={article.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="text-xs text-blue-600 font-semibold mb-2">{article.category}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{article.desc}</p>
                  <div className="flex items-center text-xs text-gray-500 mb-4">
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.time}</span>
                  </div>
                  <a
                    href="#"
                    className="text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;