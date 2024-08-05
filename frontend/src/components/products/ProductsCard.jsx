import React, { Fragment } from "react";
import lampImg from "../../assets/images/lamp.png";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ProductsCard = ({ products }) => {
  return (
    <Fragment>
      {/* Put _id in link for redirection  */}
      <div className="flex flex-col w-[280px] h-[440px] onhover-card cursor-pointer mx-2">
        <div className="relative bg-greyish h-[70%] flex items-center justify-center">
          <Link to={`/product/${products._id}`}>
            <img
              src={products.images}
              alt="lamp"
              className="object-contain w-[85%]"
            />
          </Link>

          {/* Too Render On Hover Buttons  */}
          <button className="absolute top-[10px] right-[10px] w-[30px] h-[30px] rounded-full bg-white shadow-lg hidden text-gray-500 hovered-buttons">
            <ion-icon name="heart-outline"></ion-icon>
          </button>
          <button className="py-3 rounded-md bg-black text-center text-white absolute bottom-[10px] w-[90%] hover:text-gray-200 hidden hovered-buttons">
            Add to Cart
          </button>
        </div>
        <Link to={`/product/${products._id}`} className="h-[30%] pt-2">
          <ReactStars
            value={5} //hardcoded for now
            size={24}
            activeColor="#141718"
          />
          <h2 className="text-lg font-semibold text-gray-900 mt-1">
            {products.name}
          </h2>
          <h5 className="text-gray-800 text-md font-semibold">
            ${products.discountPrice}{" "}
            <strike className="ml-2 text-gray-400 font-normal">
              ${products.price}
            </strike>
          </h5>
        </Link>
      </div>
    </Fragment>
  );
};

export default ProductsCard;
