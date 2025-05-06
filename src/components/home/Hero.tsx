import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const slides = [
  {
    image: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg',
    title: 'Modern Farm Mechanization',
    description: 'Enhance your farming efficiency with our advanced agricultural machinery',
    link: '/products/tractors'
  },
  {
    image: 'https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg',
    title: 'Smart Harvesting Solutions',
    description: 'State-of-the-art harvesting equipment for maximum yield',
    link: '/products/harvesting'
  },
  {
    image: 'https://images.pexels.com/photos/7728082/pexels-photo-7728082.jpeg',
    title: 'Quality Seeds & Seedlings',
    description: 'Start strong with our premium selection of seeds and seedlings',
    link: '/products/seeds'
  }
];

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen snap-start">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} bg-white"></span>`;
          },
        }}
        loop={true}
        className="absolute inset-0"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen">
              {/* Background image with overlay */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
              </div>

              {/* Content */}
              <div className="container relative h-full flex items-center">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-gray-200">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to={slide.link}
                      className="btn-primary px-6 py-3 text-lg flex items-center"
                    >
                      Explore Now
                      <ChevronRight size={20} className="ml-2" />
                    </Link>
                    <Link
                      to="/contact"
                      className="btn-outline border-white text-white hover:bg-white hover:bg-opacity-10 px-6 py-3 text-lg"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;