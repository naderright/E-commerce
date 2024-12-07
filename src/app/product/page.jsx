'use client'
import { useState } from "react";
import Product from "./product";
import Filter from "@/components/FilterProduct";

const products = [
  { id: 1, name: "طلاء أظافر أحمر", category: "nail-polish", color: "red", price: 50 },
  { id: 2, name: "عناية بالأظافر - زيت", category: "nail-care", color: "blue", price: 70 },
  { id: 3, name: "طلاء أظافر وردي", category: "nail-polish", color: "pink", price: 30 },
  { id: 4, name: "كريم مرطب للأظافر", category: "nail-care", color: "white", price: 100 },
  { id: 5, name: "طلاء أظافر بنفسجي", category: "nail-polish", color: "purple", price: 40 },
];

export default function Home() {



  const [filters, setFilters] = useState({
    category: [],
    color: "",
    maxPrice: 100,
    sort: "default",
    showFilter: false,
  });

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFilters((prev) => ({
        ...prev,
        category: checked
          ? [...prev.category, value]
          : prev.category.filter((cat) => cat !== value),
      }));
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }));
    }
  };

  const filteredProducts = products
    .filter((product) => {
      if (filters.category.length > 0) {
        return filters.category.includes(product.category);
      }
      return true;
    })
    .filter((product) => {
      if (filters.color !== "") return product.color === filters.color;
      return true;
    })
    .filter((product) => product.price <= filters.maxPrice)
    .sort((a, b) => {
      if (filters.sort === "lowToHigh") return a.price - b.price;
      if (filters.sort === "highToLow") return b.price - a.price;
      return 0;
    });

  return (
    <div className="container mx-auto px-4 py-[6rem]">
      <h1 className="text-3xl font-bold text-center mb-10">Our Products</h1>


      

        {/* Products Section */}
        <div className="products">
          <Product />
        </div>





      {/* </div> */}
    </div>
  );
}
