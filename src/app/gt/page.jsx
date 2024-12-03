'use client'
import React, { useState } from "react";

const ProductsPage = () => {
  const [filtersOpen, setFiltersOpen] = useState(false); // للتحكم بعرض الفلاتر على الشاشات الصغيرة
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 6;

  const categories = ["Clothing", "Accessories", "Footwear"];
  const colors = ["red", "blue", "green", "black"];

  const products = [
    { id: 1, name: "Elegant Shirt", price: 50, category: "Clothing", color: "red", image: "https://via.placeholder.com/200/ff0000" },
    { id: 2, name: "Stylish Hat", price: 20, category: "Accessories", color: "blue", image: "https://via.placeholder.com/200/0000ff" },
    { id: 3, name: "Running Shoes", price: 80, category: "Footwear", color: "green", image: "https://via.placeholder.com/200/00ff00" },
    { id: 4, name: "Fancy Watch", price: 100, category: "Accessories", color: "red", image: "https://via.placeholder.com/200/ff0000" },
    { id: 5, name: "Casual Jacket", price: 70, category: "Clothing", color: "blue", image: "https://via.placeholder.com/200/0000ff" },
    { id: 6, name: "Running Shorts", price: 30, category: "Clothing", color: "green", image: "https://via.placeholder.com/200/00ff00" },
    { id: 7, name: "Leather Boots", price: 120, category: "Footwear", color: "black", image: "https://via.placeholder.com/200/000000" },
    { id: 8, name: "Denim Jeans", price: 60, category: "Clothing", color: "blue", image: "https://via.placeholder.com/200/0000ff" },
    { id: 9, name: "Sunglasses", price: 40, category: "Accessories", color: "black", image: "https://via.placeholder.com/200/000000" },
  ];

  // Filtered products
  const filteredProducts = products
    .filter(
      (product) =>
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category)
    )
    .filter(
      (product) =>
        selectedColors.length === 0 || selectedColors.includes(product.color)
    )
    .filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="flex min-h-screen bg-gray-100 py-[4rem]">
      {/* Sidebar for large screens */}
      <div className="hidden lg:block w-1/4 bg-white p-4 shadow-md">
        <Filters
          categories={categories}
          colors={colors}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
      </div>

      {/* Filters for small screens */}
      {filtersOpen && (
        <div className="fixed top-0 left-0 w-3/4 h-full bg-white z-50 shadow-lg p-4 lg:hidden">
          <button
            onClick={() => setFiltersOpen(false)}
            className="text-gray-500 text-xl mb-4"
          >
            ✖
          </button>
          <Filters
            categories={categories}
            colors={colors}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            selectedColors={selectedColors}
            setSelectedColors={setSelectedColors}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        </div>
      )}

      {/* Main Content */}
      <div className="w-full lg:w-3/4 p-6">
        <button
          onClick={() => setFiltersOpen(true)}
          className="block lg:hidden bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
        >
          Filters
        </button>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="mt-4 font-medium text-gray-800">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="mt-6 flex justify-center items-center space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Filters Component
const Filters = ({
  categories,
  colors,
  selectedCategories,
  setSelectedCategories,
  selectedColors,
  setSelectedColors,
  priceRange,
  setPriceRange,
}) => (
  <div>
    <h2 className="text-lg font-semibold text-gray-800">Filters</h2>

    {/* Categories */}
    <div className="mt-6">
      <h3 className="font-medium text-gray-800">Category</h3>
      {categories.map((cat) => (
        <label key={cat} className="flex items-center space-x-2 mt-2">
          <input
            type="checkbox"
            checked={selectedCategories.includes(cat)}
            onChange={() =>
              setSelectedCategories((prev) =>
                prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
              )
            }
          />
          <span>{cat}</span>
        </label>
      ))}
    </div>

    {/* Colors */}
    <div className="mt-6">
      <h3 className="font-medium text-gray-800">Color</h3>
      <div className="flex space-x-2 mt-2">
        {colors.map((color) => (
          <div
            key={color}
            onClick={() =>
              setSelectedColors((prev) =>
                prev.includes(color)
                  ? prev.filter((c) => c !== color)
                  : [...prev, color]
              )
            }
            className={`w-6 h-6 rounded-full cursor-pointer ${
              selectedColors.includes(color) ? "ring-2 ring-blue-500" : ""
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>

    {/* Price Range */}
    <div className="mt-6">
      <h3 className="font-medium text-gray-800">Price</h3>
      <input
        type="range"
        min="0"
        max="200"
        value={priceRange[0]}
        onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
        className="w-full mt-2"
      />
      <input
        type="range"
        min="0"
        max="200"
        value={priceRange[1]}
        onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
        className="w-full mt-2"
      />
      <p className="text-sm mt-2">${priceRange[0]} - ${priceRange[1]}</p>
    </div>
  </div>
);


export default ProductsPage;




// import React, { useState } from "react";

// const ProductsPage = () => {
//   const [filtersOpen, setFiltersOpen] = useState({
//     category: true,
//     color: true,
//     price: true,
//   });
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [priceRange, setPriceRange] = useState([0, 100]);
//   const [currentPage, setCurrentPage] = useState(1);

//   const productsPerPage = 6;

//   const categories = ["Clothing", "Accessories", "Footwear"];
//   const colors = ["red", "blue", "green", "black"];

//   const products = [
//     { id: 1, name: "Elegant Shirt", price: 50, category: "Clothing", color: "red", image: "https://via.placeholder.com/200/ff0000" },
//     { id: 2, name: "Stylish Hat", price: 20, category: "Accessories", color: "blue", image: "https://via.placeholder.com/200/0000ff" },
//     { id: 3, name: "Running Shoes", price: 80, category: "Footwear", color: "green", image: "https://via.placeholder.com/200/00ff00" },
//     { id: 4, name: "Fancy Watch", price: 100, category: "Accessories", color: "red", image: "https://via.placeholder.com/200/ff0000" },
//     { id: 5, name: "Casual Jacket", price: 70, category: "Clothing", color: "blue", image: "https://via.placeholder.com/200/0000ff" },
//     { id: 6, name: "Running Shorts", price: 30, category: "Clothing", color: "green", image: "https://via.placeholder.com/200/00ff00" },
//     { id: 7, name: "Leather Boots", price: 120, category: "Footwear", color: "black", image: "https://via.placeholder.com/200/000000" },
//     { id: 8, name: "Denim Jeans", price: 60, category: "Clothing", color: "blue", image: "https://via.placeholder.com/200/0000ff" },
//     { id: 9, name: "Sunglasses", price: 40, category: "Accessories", color: "black", image: "https://via.placeholder.com/200/000000" },
//   ];

//   // Toggle filter sections
//   const toggleFilter = (filter) => {
//     setFiltersOpen((prev) => ({ ...prev, [filter]: !prev[filter] }));
//   };

//   // Filtered products
//   const filteredProducts = products
//     .filter(
//       (product) =>
//         selectedCategories.length === 0 ||
//         selectedCategories.includes(product.category)
//     )
//     .filter(
//       (product) =>
//         selectedColors.length === 0 || selectedColors.includes(product.color)
//     )
//     .filter(
//       (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
//     );

//   // Pagination logic
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-white p-4 shadow-md">
//         <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
        
//         {/* Categories */}
//         <div className="mt-6">
//           <div
//             className="flex justify-between items-center cursor-pointer"
//             onClick={() => toggleFilter("category")}
//           >
//             <h3 className="font-medium text-gray-800">Category</h3>
//             <span>{filtersOpen.category ? "▲" : "▼"}</span>
//           </div>
//           {filtersOpen.category && (
//             <div className="mt-2">
//               {categories.map((cat) => (
//                 <label key={cat} className="flex items-center space-x-2 mt-2">
//                   <input
//                     type="checkbox"
//                     checked={selectedCategories.includes(cat)}
//                     onChange={() =>
//                       setSelectedCategories((prev) =>
//                         prev.includes(cat)
//                           ? prev.filter((c) => c !== cat)
//                           : [...prev, cat]
//                       )
//                     }
//                   />
//                   <span>{cat}</span>
//                 </label>
//               ))}
//             </div>
//           )}
//         </div>
        
//         {/* Colors */}
//         <div className="mt-6">
//           <div
//             className="flex justify-between items-center cursor-pointer"
//             onClick={() => toggleFilter("color")}
//           >
//             <h3 className="font-medium text-gray-800">Color</h3>
//             <span>{filtersOpen.color ? "▲" : "▼"}</span>
//           </div>
//           {filtersOpen.color && (
//             <div className="flex space-x-2 mt-2">
//               {colors.map((color) => (
//                 <div
//                   key={color}
//                   onClick={() =>
//                     setSelectedColors((prev) =>
//                       prev.includes(color)
//                         ? prev.filter((c) => c !== color)
//                         : [...prev, color]
//                     )
//                   }
//                   className={`w-6 h-6 rounded-full cursor-pointer ${
//                     selectedColors.includes(color)
//                       ? "ring-2 ring-blue-500"
//                       : ""
//                   }`}
//                   style={{ backgroundColor: color }}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
        
//         {/* Price Range */}
//         <div className="mt-6">
//           <div
//             className="flex justify-between items-center cursor-pointer"
//             onClick={() => toggleFilter("price")}
//           >
//             <h3 className="font-medium text-gray-800">Price</h3>
//             <span>{filtersOpen.price ? "▲" : "▼"}</span>
//           </div>
//           {filtersOpen.price && (
//             <div className="mt-4">
//               <input
//                 type="range"
//                 min="0"
//                 max="200"
//                 value={priceRange[0]}
//                 onChange={(e) =>
//                   setPriceRange([+e.target.value, priceRange[1]])
//                 }
//                 className="w-full"
//               />
//               <input
//                 type="range"
//                 min="0"
//                 max="200"
//                 value={priceRange[1]}
//                 onChange={(e) =>
//                   setPriceRange([priceRange[0], +e.target.value])
//                 }
//                 className="w-full mt-2"
//               />
//               <p className="text-sm mt-2">
//                 ${priceRange[0]} - ${priceRange[1]}
//               </p>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Products */}
//       <div className="w-3/4 p-6">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-6">Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {currentProducts.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-48 object-cover rounded"
//               />
//               <h3 className="mt-4 font-medium text-gray-800">{product.name}</h3>
//               <p className="text-gray-600">${product.price}</p>
//             </div>
//           ))}
//         </div>
//         {/* Pagination */}
//         <div className="mt-6 flex justify-center items-center space-x-2">
//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentPage(index + 1)}
//               className={`px-4 py-2 rounded-md ${
//                 currentPage === index + 1
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200 text-gray-800 hover:bg-gray-300"
//               }`}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;
