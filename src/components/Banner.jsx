'use client'
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
// الإعدادات الأساسية لشريط التمرير
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

export default function BannerSlider() {
  const banners = [
    {
      id: 1,
      title: "Welcome to Our Store",
      description: "Find the best products just for you!",
      imageUrl: "/images/banner1.jpg",
    },
    {
      id: 2,
      title: "New Collection",
      description: "Discover our latest collection for the season.",
      imageUrl: "/images/banner2.jpg",
    },
    {
      id: 3,
      title: "Exclusive Offers",
      description: "Don't miss out on our exclusive offers!",
      imageUrl: "/images/banner3.jpg",
    },
  ];

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="relative">
            <img
              src={banner.imageUrl}
              alt={banner.title}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center text-white"
              >
                <h2 className="text-4xl font-bold mb-4">{banner.title}</h2>
                <p className="text-lg mb-4">{banner.description}</p>
                <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                  Learn More
                </button>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
