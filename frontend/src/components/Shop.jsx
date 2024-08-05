import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductsCard from "./products/ProductsCard";
import axios from "axios";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products/getAllProducts");
        setProducts(response.data);
      } catch (error) {
        setError("Error fetching the products");
      } finally {
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/getCategories");
        setCategories(response.data);
      } catch (error) {
        setError("Error fetching categories");
      }
    };

    fetchProducts();
    fetchCategories();
  }, []);

  const fetchFilteredProducts = async () => {
    setLoading(true);
    try {
      let params = {};
      if (selectedCategory) {
        params.category = selectedCategory;
      }
      if (selectedPrice !== "all") {
        const [minPrice, maxPrice] = selectedPrice.split("-");
        params.minPrice = minPrice;
        params.maxPrice = maxPrice;
      }
      const response = await axios.get(
        selectedCategory || selectedPrice !== "all"
          ? `/api/products/getProductByCategoryAndPrice`
          : `/api/products/getAllProducts`,
        { params }
      );
      setProducts(response.data);
    } catch (error) {
      setError("Error fetching the filtered products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFilteredProducts();
  }, [selectedCategory, selectedPrice]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      {/* Page Upper Static Layout */}
      <div className="background-image relative">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col text-center">
          <div>
            <Link to={"/"} className="text-gray-600 font-medium text-md">
              Home
            </Link>{" "}
            <span className="mx-3">{">"}</span>{" "}
            <Link to={"/shop"} className="text-gray-900 font-semibold text-md">
              Shop
            </Link>
          </div>
          <h1 className="heading text-5xl my-4 font-medium">Shop Page</h1>
          <p className="text-lg text-gray-800 ">
            Let’s design the place you always imagined.
          </p>
        </div>
      </div>
      {/* Main Shop Layout  */}
      <div className="flex flex-col mt-[40px] w-full">
        {/* Filters Layout  */}
        <div className="w-full flex flex-col justify-between">
          {/* Category and Price Filters  */}
          <div className="flex gap-[10px] mb-[30px]">
            <div>
              <p className="text-md uppercase text-gray-600 mb-2">Categories</p>
              <select
                name="category"
                className="outline-none py-3 px-6 text-black border text-md border-gray-700 rounded-[8px] font-medium"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p className="text-md uppercase text-gray-600 mb-2">Prices</p>
              <select
                name="prices"
                className="outline-none py-3 px-6 text-gray-800 border text-md border-gray-500 rounded-[8px] font-medium"
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
              >
                <option value="all">All Prices</option>
                <option value="0-100">$0 - 100$</option>
                <option value="100-300">$100 - $300</option>
                <option value="300-500">$300 - $500</option>
              </select>
            </div>
          </div>
          {/* All Products */}
          <div className="flex flex-wrap items-center justify-center">
            {Array.isArray(products) && products.length > 0 ? (
              products.map((product) => (
                <ProductsCard key={product._id} products={product} />
              ))
            ) : (
              <div>No products found</div>
            )}
          </div>
        </div>
        <button className="w-[200px] mx-auto border border-gray-600 text-black py-4 font-semibold mb-5 hover:text-white hover:bg-black">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Shop;
