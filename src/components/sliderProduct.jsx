'use client'
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight, FaHeart, FaShoppingCart} from "react-icons/fa";
import { motion } from "framer-motion";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const products = [
    {
      id: 1,
      name: "منتج 1",
      price: "25.00",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "منتج 2",
      price: "30.00",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      name: "منتج 3",
      price: "15.00",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 4,
      name: "منتج 4",
      price: "50.00",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 5,
      name: "منتج 5",
      price: "40.00",
      image: "https://via.placeholder.com/300",
    },
  ];
  

const ProductSlider = () => {
    const CustomPrevArrow = ({ onClick }) => (
        <button
          className="absolute w-[2.2rem] top-[-5%] left-[75%]  sm:left-[85%] md:left-[87%] lg:left-[91%] transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-md shadow-lg hover:bg-gray-700 z-10"
          onClick={onClick}
        >
          <FaChevronLeft />
        </button>
      );
      
      const CustomNextArrow = ({ onClick }) => (
        <button
          className="absolute w-[2.2rem] top-[-5%] right-[1%] transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-md shadow-lg hover:bg-gray-700 z-10"
          onClick={onClick}
        >
          <FaChevronRight />
        </button>
        )
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />, // استخدام السهم المخصص للتالي
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-[4rem]">
      <Slider {...settings}>
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="relative p-4 bg-white rounded-lg shadow-lg group hover:cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            {/* صورة المنتج */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover group-hover:opacity-75"
              />
            </div>

            {/* تفاصيل المنتج */}
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600">${product.price}</p>
            </div>

            {/* أزرار التفاعل */}
            <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                className="bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-600"
                title='add to favourits'
              >
                <FaHeart />
              </button>
              <button
                className="bg-green-500 text-white p-2 rounded-full shadow-md hover:bg-green-600"
                title='add to cart'
              >
                <FaShoppingCart />
              </button>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
