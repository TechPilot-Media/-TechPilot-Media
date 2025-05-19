import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Jordan White',
    text: 'Quality you can feel from the first use. Truly impressive!',
    avatar: 'https://via.placeholder.com/40',
    rating: 5,
  },
  {
    name: 'Emily Smith',
    text: 'Exceptional service and support throughout the process.',
    avatar: 'https://via.placeholder.com/40',
    rating: 4,
  },
  {
    name: 'James Wilson',
    text: 'Highly recommend to anyone looking for quality.',
    avatar: 'https://via.placeholder.com/40',
    rating: 5,
  },
  {
    name: 'Sofia Brown',
    text: 'Fast, friendly, and reliable. Couldn’t ask for more.',
    avatar: 'https://via.placeholder.com/40',
    rating: 5,
  },
];

const TestimonialSection = () => {
  return (
    <div className="relative bg-gray-300 pt-24 md:px-8 overflow-x-visible min-h-[800px]">
     
      <div className="absolute top-0 left-0 w-full h-28 sm:h-36 bg-[#1f24ff] overflow-hidden z-10">
        <div className="marketing-marque whitespace-nowrap flex items-center h-full">
          <h2 className="text-white text-4xl sm:text-6xl lg:text-8xl font-extrabold mt-4 sm:mt-7 px-4">
            SEO • PPC • SMM • GROWTH • SEO • PPC • SMM • GROWTH • SEO • PPC • SMM • GROWTH • SEO • PPC • SMM • GROWTH • SEO • PPC • SMM • GROWTH •
          </h2>
        </div>
      </div>

      
      <div className="absolute inset-0 flex top-30 flex-col items-center justify-center pointer-events-none z-0">
        {[...Array(4)].map((_, i) => (
          <h1
            key={i}
            className="text-6xl sm:text-8xl md:text-[10rem] font-extrabold text-[#0D007E] leading-none"
            style={{ fontFamily: 'Impact, sans-serif' }}
          >
            TESTIMONIALS
          </h1>
        ))}
      </div>

     
      <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 z-20 w-full max-w-2xl px-4 sm:px-6">
        <Swiper
          modules={[EffectFade, Pagination]}
          effect="fade"
          pagination={{ clickable: true }}
          loop={true}
          slidesPerView={1}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-[#1f24ff] text-white rounded-[6rem] p-6 sm:p-10 min-h-[300px] sm:min-h-[350px] flex flex-col space-y-6 transition-all duration-500 shadow-2xl">
                <div className="flex items-start sm:items-center gap-4 flex-col sm:flex-row">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full bg-white object-cover border-2 border-white shadow-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-semibold">{t.name}</h3>
                    <div className="text-yellow-400 text-2xl sm:text-3xl leading-none">
                      {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
                    </div>
                  </div>
                  <div className="text-6xl sm:text-9xl text-white/50 font-serif">“”</div>
                </div>
                <p className="text-xl sm:text-2xl italic leading-relaxed">{t.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      
      <style jsx>{`
        .marketing-marque {
          display: inline-block;
          animation: marketingMarquee 50s linear infinite;
        }

        @keyframes marketingMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .font-[impact] {
          font-family: Impact, Charcoal, sans-serif;
        }
      `}</style>
    </div>
  );
};

export default TestimonialSection;
