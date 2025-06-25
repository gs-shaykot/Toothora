import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaStar } from 'react-icons/fa';

const Review = () => {
  const reviews = [
    {
      name: "Emily Chen",
      review:
        "I've been terrified of dentists my whole life, but Flossy Dental changed that completely. Their gentle approach and caring attitude made all the difference.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      name: "James Wilson",
      review:
        "Dr. Thompson and his staff are incredible! They took the time to explain everything and made sure I was comfortable throughout my procedure.",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      rating: 5,
    },
    {
      name: "Sarah Miller",
      review:
        "The team at Toothora Dental made my dental experience pleasant and painless. I couldn’t be happier with my new smile!",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5,
    },
  ];

  return (
    <div className="bg-[#f9fafb] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Happy Patients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our patients have to say about their experience at Flossy Dental.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          className="max-w-5xl mx-auto"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-md px-0 py-10 text-center relative">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                /> 
                <h3 className="text-lg font-semibold">{review.name}</h3>
                {/* explain the code. */}
                <div className="flex justify-center mb-4 text-yellow-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-600 italic max-w-xl mx-auto">
                  "{review.review}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
