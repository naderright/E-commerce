'use client'
import  { useEffect } from "react";
import ProductImage from "@/components/product details page/ProductImage";
import ProductDetails from "@/components/product details page/ProductDetails";
import Reviews_Comment from "@/components/product details page/Reviews&Comment";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "@/API/actions/ProductActions";
import { cleanUpSingleProduct } from "@/API/slices/SingleProductSlice";

// const product = {
//     name: "Elegant Shirt",
//     description: "This shirt is made from the finest materials.",
//     images: [
//         "https://via.placeholder.com/400",
//         "https://via.placeholder.com/400/ff0000",
//         "https://via.placeholder.com/400/00ff00",
//     ],
//     rating: 4,
//     reviews: [
//         { name: "John", comment: "Great product!" },
//         { name: "Alex", comment: "The quality is amazing." },
//     ],
//     colors: ["#ff0000", "#00ff00", "#0000ff"],
//     sizes: ["S", "M", "L", "XL"],
// };



const SingleProductPage = ({ params }) => {
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.singleProduct);



    useEffect(() => {
        if ( data?.id != params.slug) {
             dispatch(getSingleProduct(params.slug))
        };

        return ()=> dispatch(cleanUpSingleProduct());
    }, [ params,dispatch]);

    



    return (
        <div>
            {loading == 'succeded' && data ?<div className="container mx-auto px-4 pt-[8rem]">
                {console.log(data)}
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
