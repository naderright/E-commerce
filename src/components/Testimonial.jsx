'use client'
import Image from "next/image";
import Slider from "react-slick";

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        role: "CEO, Example Inc.",
        quote:
            "This product has completely transformed our business. Highly recommended!",
        image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 2,
        name: "Jane Smith",
        role: "Marketing Head, ABC Co.",
        quote:
            "The team behind this product is incredibly talented. Great work!",
        image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 3,
        name: "Robert Brown",
        role: "Freelancer",
        quote: "A must-have tool for anyone looking to grow their business.",
        image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
];

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-6">Testimonials</h2>
            <Slider {...settings}>
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="p-6 bg-white rounded-lg shadow-md text-center"
                    >
                        <Image
                            width={100}
                            height={100}
                            priority
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="mx-auto rounded-full w-20 h-20 mb-4"
                        />
                        <p className="italic text-gray-700 mb-4">&quot;{testimonial.quote}&quot;</p>
                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                        <span className="text-gray-500">{testimonial.role}</span>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TestimonialSlider;
