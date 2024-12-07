'use client'
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Image from 'next/image';
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
      imageUrl: "https://images.pexels.com/photos/975250/pexels-photo-975250.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "New Collection",
      description: "Discover our latest collection for the season.",
      imageUrl: "https://images.pexels.com/photos/318236/pexels-photo-318236.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Exclusive Offers",
      description: "Don't miss out on our exclusive offers!",
      imageUrl: "https://images.pexels.com/photos/2309235/pexels-photo-2309235.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="overflow-hidden pt-[4.4rem]">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="relative">
            <Image
              width={400}
              height={400}
              priority
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
                <Link href={'/product'}>
                  <button className="px-6 py-2 bg-slate-900 text-white rounded-full hover:bg-slate-800">
                    Shop Now
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
