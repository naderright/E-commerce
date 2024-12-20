'use client'
import Image from "next/image";
import React from "react";
import TitleSec from "./TiltleSec";
import Link from "next/link";

const categories = [
    {
        id: 1,
        name: "Electronics",
        image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Find the latest gadgets and devices.",
    },
    {
        id: 2,
        name: "Fashion",
        image: "https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Trendy clothing and accessories.",
    },
    {
        id: 3,
        name: "Home & Kitchen",
        image: "https://images.pexels.com/photos/29628233/pexels-photo-29628233/free-photo-of-rustic-wooden-doorway-with-cat-in-a-cozy-kitchen.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Essentials for your home and kitchen.",
    },
    {
        id: 4,
        name: "Sports & Outdoors",
        image: "https://images.pexels.com/photos/29644932/pexels-photo-29644932/free-photo-of-casual-urban-fashion-with-soccer-ball-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Gear up for your outdoor adventures.",
    },
];

const Categories = () => {
    return (
        <>
            <TitleSec name={'Categories'} />
            <div className="container mx-auto px-4 py-8  ">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categories.map((category,key) => (
                        <Link href={'/product'} key={key}>
                            <div
                                key={key}
                                className="bg-white rounded-lg shadow-md p-4 h-[4rem] text-center cursor-pointer hover:bg-slate-50 "
                            >
                                <Image
                                    width={100}
                                    height={100}
                                    priority
                                    src={category.image}
                                    alt={category.name}
                                    className="w-32 h-32 mx-auto mb-4 rounded-full"
                                />
                                <h3 className="text-lg font-semibold">{category.name}</h3>
                                <p className="text-gray-500">{category.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Categories;
