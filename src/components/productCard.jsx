import ButtonCard from "@/utilts/ButtonCard";
import { Navigate } from "@/utilts/Navigate";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function ProductCard({ product}) {




  const handleSingleProduct = () => {
    Navigate(`/product/${product.id}`)
  }
  return (
    <div  className="max-w-sm bg-white border space-x-2 border-gray-200 rounded-lg shadow-lg overflow-hidden hover:bg-slate-100 transition-transform duration-300">
      <div onClick={handleSingleProduct}>
        {/* Image product */}
        <div className="relative hover:cursor-pointer flex items-center justify-center">
          <Image
            width={200}
            height={200}
            priority
            property="true"
            src={product?.thumbnail}
            alt={product?.title}
            className=" text-center align-middle  "
          />
          <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md">
            <button
              aria-label="Add to favorites"
              className="text-red-500 hover:text-red-600 hover:scale-75 transition-colors text-xl"
            >
              ❤️
            </button>
          </div>
        </div>
        {/* information Product */}
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-800 truncate">
            {product?.title}
          </h3>
          {/* <p className="text-gray-500 text-sm mt-1">{product?.description}</p> */}
          <div className="flex flex-col  justify-between mt-4">
            <p className="text-green-600 font-bold text-lg">${product?.price}</p>
            <div className="flex items-center space-x-2 ">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={index < product.rating ? "text-yellow-400" : "text-gray-300"}
                />
              ))}
              <span className="text-gray-500 text-sm">({product?.rating})</span>
            </div>
          </div>
        </div>
      </div>
      {/* buttons controlsc */}
      <div className="flex  flex-row-reverse justify-between items-center px-4 md:px-1 py-4 bg-gray-50 border-t">
        <span className="text-gray-400 text-sm">In Stock({product?.stock}) </span>
        <ButtonCard item={product} />

      </div>
    </div>
  );
}
