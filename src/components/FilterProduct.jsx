import { useState } from "react";

export default function Filter({ onFilterApply }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(50);

  const categories = ["Electronics", "Clothing", "Books", "Furniture"];

  // Handle category checkbox changes
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  // Handle price slider change
  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
  };

  // Apply filters
  const applyFilters = () => {
    onFilterApply({ categories: selectedCategories, price: priceRange });
    setIsOpen(false); // Close the filter on small screens
  };

  return (
    <div className="p-4">
      {/* Button for small screens */}
      <button
        className="lg:hidden bg-blue-500 text-white px-4 py-2 rounded-lg mb-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Hide Filters" : "Show Filters"}
      </button>

      {/* Filter container */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block bg-white p-4 rounded-lg shadow-md`}
      >
        {/* Category Filter */}
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Category</h3>
          {categories.map((category) => (
            <label
              key={category}
              className="block text-gray-700 mb-2 cursor-pointer"
            >
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              {category}
            </label>
          ))}
        </div>

        {/* Price Filter */}
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Price Range</h3>
          <input
            type="range"
            className="w-full"
            min="0"
            max="100"
            step="10"
            value={priceRange}
            onChange={handlePriceChange}
          />
          <p className="text-gray-700 mt-2">Up to: ${priceRange}</p>
        </div>

        {/* Apply Filters Button */}
        <button
          className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
          onClick={applyFilters}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}
