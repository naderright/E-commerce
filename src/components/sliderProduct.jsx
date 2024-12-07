'use client'
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from "./productCard";
import TitleSec from "./TiltleSec";

// const products = [
//   {
//     id: 1,
//     name: "منتج 1",
//     price: "25.00",
//     image: "https://via.placeholder.com/300",
//   },
//   {
//     id: 2,
//     name: "منتج 2",
//     price: "30.00",
//     image: "https://via.placeholder.com/300",
//   },
//   {
//     id: 3,
//     name: "منتج 3",
//     price: "15.00",
//     image: "https://via.placeholder.com/300",
//   },
//   {
//     id: 4,
//     name: "منتج 4",
//     price: "50.00",
//     image: "https://via.placeholder.com/300",
//   },
//   {
//     id: 5,
//     name: "منتج 5",
//     price: "40.00",
//     image: "https://via.placeholder.com/300",
//   },
// ];


const ProductSlider = ({ products, section }) => {


  const CustomPrevArrow = ({ onClick }) => (
    <button
      className="absolute z-1 w-[2.2rem] top-[-5%] left-[75%]  sm:left-[85%] md:left-[87%] lg:left-[91%] transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-md shadow-lg hover:bg-gray-700 z-10"
      onClick={onClick}
    >
      <FaChevronLeft />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      className="absolute z-1 w-[2.2rem] top-[-5%] right-[1%] transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-md shadow-lg hover:bg-gray-700 z-10"
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
    <>
      <div className="Tilte ">
      <TitleSec name={section} />
      </div>
      <div className="container mx-auto px-4 py-[4rem] relative">

        <Slider {...settings} className="relative">
          {products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ProductSlider;
