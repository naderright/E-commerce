'use client'
import { getAllProducts } from "@/API/actions/ProductActions";
import { dataCleanUp } from "@/API/slices/ProductSlice";
import BannerSlider from "@/components/Banner";
import Categories from "@/components/Category";
import ProductSlider from "@/components/sliderProduct";
import TestimonialSlider from "@/components/Testimonial";
import TitleSec from "@/components/TiltleSec";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function PageHome() {
    const dispatch = useDispatch()
    

     useEffect(()=>{
           dispatch(getAllProducts());
           return()=>{dispatch(dataCleanUp())}
     },[dispatch])
     
     const products = useSelector((state)=>state.products.data);

  return (
    <div>
       <BannerSlider/>
       <Categories/>
       <ProductSlider products={products} section={'Product Sale'}/>
       <TestimonialSlider/>
    </div>
  )
}

export default PageHome
