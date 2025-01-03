'use client'
import  { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "@/API/actions/ProductActions";
import { cleanUpSingleProduct } from "@/API/slices/SingleProductSlice";
import ProductImage from "./product details page/ProductImage";
import ProductDetails from "./product details page/ProductDetails";
import Reviews_Comment from "./product details page/Reviews&Comment";





const SingleProductPage = ({ params }) => {
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.singleProduct);



    useEffect(() => {
        
             dispatch(getSingleProduct(params))
       

        return ()=> dispatch(cleanUpSingleProduct());
    }, [ params,dispatch]);

    



    return (
        <div>
            {loading == 'succeded' && data ?<div className="container mx-auto px-4 pt-[8rem]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Product Images */}
                    <ProductImage product={data} />

                    {/* Product Details */}
                    <ProductDetails product={data} />
                </div>

                {/* Reviews and Add Comment */}
                <Reviews_Comment product={data} />
            </div>:'loading.........' }
            
        </div>
    );
};

export default SingleProductPage;
