import React from 'react'
import { singleProduct } from '../../utils/data'
import ReactStars from "react-rating-stars-component";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom'
import ProductCarousel from "./ProductsCarousel"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

// FOR ACCORDIANS
function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

const ProductPage = () => {
      const { id } = useParams();
      const [product, setProduct] = useState(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
    const [open, setOpen] = useState(1);
    const [colors, setColors] = useState([]);
    const [category, setCategory] = useState("");

      useEffect(() => {
        const fetchProduct = async () => {
          try {
            const response = await axios.get(`/api/products/getProducts/${id}`);
            setProduct(response.data);
          } catch (error) {
            setError("Error fetching the product details");
          } finally {
            setLoading(false);
          }
          };
          
          const fetchColors = async () => {
              try {
                  const response = await axios.get("/api/getColors");
                  setColors(response.data);
              } catch (error) {
                  setError("Error fetching colors");
              }
          };
            fetchColors();

        fetchProduct();
      }, [id]);

      const handleOpen = (value) => setOpen(open === value ? 0 : value);

      if (loading) {
        return <div>Loading...</div>;
      }

      if (error) {
        return <div>{error}</div>;
      }

      if (!product) {
        return <div>Product not found</div>;
      }

    

    return (
      <div className="w-full px-4 max-w-[1200px] mx-auto">
        <h3 className="text-md text-gray-500 my-4">
          Home <span className="mx-2">{">"}</span> Shop{" "}
          <span className="mx-2">{">"}</span> Living Room{" "}
          <span className="mx-2">{">"}</span>{" "}
          <span className="font-bold text-gray-700">Product</span>
        </h3>

        {/* Product Information Div  */}
        <div className="box-condition w-full my-5">
          {/* Render the images here  */}
          <div className="w-[50%] flex flex-wrap items-center justify-center gap-[10px] relative">
            {singleProduct.img.map((e, index) => (
              <div className="w-[47%]">
                <img src={e} alt={index} className="w-full object-cover" />
              </div>
            ))}
            <p className="text-xs text-black font-semibold bg-white px-2 py-1 absolute top-[30px] left-6 uppercase w-[44px]">
              New
            </p>
            <p className="text-xs text-white font-semibold bg-green-500 px-2 py-1 absolute top-[60px] left-6 uppercase w-[44px]">
              {product.discountPercentage}%
            </p>
          </div>
          {/* Render the details here  */}
          <div className="w-[50%] flex flex-col px-4">
            <div className="flex gap-[15px] items-center">
              <ReactStars
                value={5} // Put ratings out of 5
                size={24}
                activeColor="#141718"
              />
              <p className="text-md text-gray-400 font-medium">11 Reviews</p>
            </div>
            <h1 className="heading text-5xl my-3 font-medium">
              {product.name}
            </h1>
            <p className="text-md text-gray-600 my-1 ">{product.description}</p>
            <h5 className="heading text-4xl my-4 flex items-center font-medium">
              ${product.price}{" "}
              <span className="ml-3 text-3xl text-gray-500">
                ${product.discountPrice}
              </span>
            </h5>
            <hr />

            <h3 className="heading text-lg text-gray-500 my-3">Measurements</h3>
            <p className="text-2xl mb-4 text-gray-900 font-medium">
              {product.dimensions}
            </p>
            <h3 className="heading text-lg text-gray-500 my-3">Choose Color</h3>
            <p className="text-2xl mb-4 text-gray-900 font-medium">
              {colors.map((color) => color.name || "Unknown Color").join(", ")}
            </p>

            {/* Color boxes with images  */}
            <div className="flex items-center justify-start w-full my-3 gap-[10px]">
              {colors.map((color) => (
                <div
                  key={color.id}
                  className="w-[60px] h-[80px] rounded-[4px]"
                  style={{ backgroundColor: color.name }}
                >
                
                </div>
              ))}
            </div>

            {/* Buttons  */}
            <div className="w-full my-3">
              <div className="w-full flex items-center justify-between gap-[10px]">
                {/* Implement functionality of increasing/decreasing stocks  */}
                <div className="flex bg-greyish h-[45px] px-2 rounded-[5px] items-center justify-center gap-[3px]">
                  {/* Add - Funtionality  */}
                  <button className="outline-none text-gray-800 w-[40px]">
                    <ion-icon name="remove-outline"></ion-icon>
                  </button>
                  <input
                    type="number"
                    className="outline-none border-none w-[30px] bg-transparent"
                    value={0}
                  />
                  {/* Add + Funtionality  */}
                  <button className="outline-none text-gray-800 w-[30px]">
                    <ion-icon name="add-outline"></ion-icon>
                  </button>
                </div>
                {/* Wishlist button  */}
                <button className="w-full border border-gray-900 h-[45px] text-md text-center rounded-md flex items-center justify-center font-medium hover:text-white hover:bg-black">
                  <ion-icon name="heart-outline"></ion-icon>{" "}
                  <span className="ml-2 ">Wishlist</span>
                </button>
              </div>
              <button className="w-full py-2 bg-black my-2  text-white rounded-md h-[50px] text-md hover:bg-gray-900">
                Add to Cart
              </button>
            </div>

            <p className="text-md text-gray-600 mt-[15px] w-[300px] items-center justify-between flex">
              SKU{" "}
              <span className=" text-gray-800 font-medium">{product.sku}</span>
            </p>
            <p className="text-md text-gray-600 mt-[10px] mb-[15px] w-[300px] items-center justify-between flex">
              CATEGORY : Living Room , Bed Room , Kitchen
            </p>

            {/* ACCORDIAN DIV  */}
            <div className="w-full mt-[15px]">
              <Accordion
                placeholder={"Keypoints!"}
                open={open === 1}
                icon={<Icon id={1} open={open} />}
              >
                <AccordionHeader
                  placeholder={"I dont know!"}
                  onClick={() => handleOpen(1)}
                  className="text-gray-700 py-4 text-xl font-semibold px-4 "
                  style={{ letterSpacing: "1px" }}
                >
                  Additional Information
                </AccordionHeader>
                <AccordionBody>
                  <p className="text-lg text-gray-600 font-semibold">Details</p>
                  <p className="text-md my-2 text-gray-700">
                    {product.additionalInfo}
                  </p>
                  <p className="text-lg text-gray-600 font-semibold mt-3 mb-2">
                    Packaging
                  </p>
                  <p className="text-md my-1 text-gray-700">
                    {product.packaging}
                  </p>
                  <p className="text-lg text-gray-600 font-semibold mt-3 mb-2">
                    weight: {product.weight}
                  </p>
                </AccordionBody>
              </Accordion>
              <Accordion
                placeholder={"Keypoints!"}
                open={open === 2}
                icon={<Icon id={2} open={open} />}
              >
                <AccordionHeader
                  placeholder={"I dont know!"}
                  onClick={() => handleOpen(2)}
                  className="text-gray-700 py-4 text-xl font-semibold px-4 "
                  style={{ letterSpacing: "1px" }}
                >
                  Questions
                </AccordionHeader>
                <AccordionBody className="text-gray-800 font-poppins py-4 text-md">
                  Not Available
                </AccordionBody>
              </Accordion>
              <Accordion
                placeholder={"Keypoints!"}
                open={open === 3}
                icon={<Icon id={3} open={open} />}
              >
                <AccordionHeader
                  placeholder={"I dont know!"}
                  onClick={() => handleOpen(3)}
                  className="text-gray-700 py-4 text-xl font-semibold px-4 "
                  style={{ letterSpacing: "1px" }}
                >
                  Reviews (11)
                </AccordionHeader>
                <AccordionBody className="text-gray-800 font-poppins py-4 text-md">
                  Not Available
                </AccordionBody>
              </Accordion>
            </div>
          </div>
        </div>

        <ProductCarousel title="You may also like" />
      </div>
    );
}

export default ProductPage