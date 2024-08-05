import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productsData } from '../../utils/data';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';

const responsive = { 
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 750 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mode: {
        breakpoint: { max: 750, min: 620 },
        items: 3,
        slidesToSlide: 1
    },
    modeAgain: {
        breakpoint: { max: 620, min: 480 },
        items: 3,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const ProductsCarousel = ({ title }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
            const response = await axios.get("/api/products/getAllProducts");
            console.log(response.data)
          setProducts(response.data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching the products:", error);
          setError("Error fetching the products");
          setLoading(false);
        }
      };

      fetchProducts();
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    // Fetching Products Via Redux and Showing it here in carousel

    return (
        <Fragment>
            <div className='flex w-full items-end justify-between mb-[30px]'>
                <h1 className="heading">
                    {title}
                </h1>
                <Link to="/products" className='text-md text-black border-b border-gray-800 font-semibold'>More Products {"-->"}</Link>
            </div>
            <div className="flex  w-full px-5 mx-auto sm:mt-[20px] mt-[10px]  ">
                <Carousel containerClass="w-full container-class "
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    infinite={true}
                    autoPlaySpeed={1000}
                    autoPlay={true}
                    keyBoardControl={true}
                    customTransition="transform 0.5s ease-in-out" // Smooth transition
                    transitionDuration={3000} // Transition duration in milliseconds
                    arrows={true}
                    renderButtonGroupOutside
                >
                    {
                        products && products?.map(e => (
                            <ProductsCard key={e._id} products={e} />
                        )
                        )
                    }
                </Carousel>
            </div>


        </Fragment>
    )
}

export default ProductsCarousel