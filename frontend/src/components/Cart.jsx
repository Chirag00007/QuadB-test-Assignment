import React, { useState } from "react";
import benchImg from "../assets/images/bench.png";
import redTable from "../assets/images/redtable.jpg";
import tableLamp from "../assets/images/tablelamp.jpg";
const Cart = () => {
  const [step, setStep] = useState(1);
  const [shipping, setShipping] = useState("Free shipping");

  const calculateTotal = (subtotal, shippingCost) => {
    return (subtotal + shippingCost).toFixed(2);
  };

  const shippingOptions = [
    { label: "Free shipping", cost: 0 },
    { label: "Express shipping", cost: 15 },
    { label: "Pick Up", cost: 21 }, // Assuming the %21.00 is a mistake and it should be 0 cost for pick up
  ];

  const selectedShipping = shippingOptions.find(
    (option) => option.label === shipping
  );
  const subtotal = 1234.0;
  const total = calculateTotal(subtotal, selectedShipping.cost);
  return (
    <div className="pt-[30px] w-full max-w-[1200px] mx-auto text-center px-4">
      <h1 className="heading text-4xl">Cart</h1>

      <div className="w-full items-center justify-between max-w-[650px] mx-auto flex gap-[15px] my-6">
        <div
          className={`flex items-center justify-center gap-3  pb-3 px-3 ${
            step !== 1 ? "opacity-[0.3]" : " border-b-2 border-black"
          }`}
        >
          <div className="w-[40px] h-[40px] bg-black rounded-full flex items-center justify-center text-white">
            1
          </div>
          <p className="text-md text-black font-semibold ">Shopping Cart</p>
        </div>
        <div
          className={`flex gap-3 items-center justify-center  pb-3 px-3 ${
            step !== 2 ? "opacity-[0.3]" : "border-b-2 border-black"
          }`}
        >
          <div className="w-[40px] h-[40px] bg-black rounded-full flex items-center justify-center text-white">
            2
          </div>
          <p className="text-md text-black font-semibold ">Checkout details</p>
        </div>
        <div
          className={`flex gap-3 items-center justify-center  pb-3 px-3 ${
            step !== 3 ? "opacity-[0.3]" : " border-b-2 border-black"
          }`}
        >
          <div className="w-[40px] h-[40px] bg-black rounded-full flex items-center justify-center text-white">
            3
          </div>
          <p className="text-md text-black font-semibold ">Order Complete</p>
        </div>
      </div>

      <div className="mt-14 flex justify-between">
        <div style={{ width: "643px" }}>
          <div className="flex justify-between font-semibold ">
            <div>Product</div>
            <div className="flex gap-12">
              <div>Quantity</div>
              <div>Price</div>
              <div>Subtotal</div>
            </div>
          </div>
          <hr className="mt-6 h-[2px] bg-gray-400 " />
          <div>
            <div className="flex flex-col   mt-5">
              <div className="flex  justify-between  border-b border-gray-100 pb-5 mb-5">
                <div className="flex items-center justify-center">
                  {/* Image  */}
                  <div className="h-[96px] w-[80px] bg-greyish object-contain flex items-center justify-center rounded-md">
                    <img src={benchImg} alt="bench" className="w-full" />
                  </div>
                  <div className="flex flex-col h-full  ml-3">
                    <h2 className=" text-gray-900 font-semibold">Tray Table</h2>
                    <p className="text-gray-400 text-sm my-2">Color : Black</p>
                    <button className="text-gray-600 flex gap-2 text-2xl font-semibold">
                      <ion-icon name="close-outline"></ion-icon>{" "}
                      <div className="text-sm">Remove</div>
                    </button>
                  </div>
                </div>
                <div className=" flex gap-12 items-center">
                  {/* Quantity */}
                  <div className="flex border-[0.4px] border-gray-600 h-[32px] w-[80px]  rounded-[5px] items-center justify-center gap-[3px]">
                    {/* Add - Funtionality  */}
                    <button className="outline-none text-gray-600 ">
                      <ion-icon name="remove-outline"></ion-icon>
                    </button>
                    <div className="text-sm w-[20px]">2</div>
                    {/* Add + Funtionality  */}
                    <button className="outline-none text-gray-600 ">
                      <ion-icon name="add-outline"></ion-icon>
                    </button>
                  </div>
                  <p className="text-lg text-gray-700 mb-2 ">$19.00</p>
                  <p className="text-lg text-gray-700 mb-2 font-semibold">
                    $38.00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col   mt-5">
              <div className="flex  justify-between  border-b border-gray-100 pb-5 mb-5">
                <div className="flex items-center justify-center">
                  {/* Image  */}
                  <div className="h-[96px] w-[80px] bg-greyish object-contain flex items-center justify-center rounded-md">
                    <img src={tableLamp} alt="bench" className="w-full" />
                  </div>
                  <div className="flex flex-col h-full  ml-3">
                    <h2 className=" text-gray-900 font-semibold">Tray Table</h2>
                    <p className="text-gray-400 text-sm my-2">Color : Red</p>

                    <button className="text-gray-600 flex gap-2 text-2xl font-semibold">
                      <ion-icon name="close-outline"></ion-icon>{" "}
                      <div className="text-sm">Remove</div>
                    </button>
                  </div>
                </div>
                <div className=" flex gap-12 items-center">
                  {/* Quantity */}
                  <div className="flex border-[0.4px] border-gray-600 h-[32px] w-[80px]  rounded-[5px] items-center justify-center gap-[3px]">
                    {/* Add - Funtionality  */}
                    <button className="outline-none text-gray-600 ">
                      <ion-icon name="remove-outline"></ion-icon>
                    </button>
                    <div className="text-sm w-[20px]">2</div>
                    {/* Add + Funtionality  */}
                    <button className="outline-none text-gray-600 ">
                      <ion-icon name="add-outline"></ion-icon>
                    </button>
                  </div>
                  <p className="text-lg text-gray-700 mb-2 ">$19.00</p>
                  <p className="text-lg text-gray-700 mb-2 font-semibold">
                    $38.00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col   mt-5">
              <div className="flex  justify-between  border-b border-gray-100 pb-5 mb-5">
                <div className="flex items-center justify-center">
                  {/* Image  */}
                  <div className="h-[96px] w-[80px] bg-greyish object-contain flex items-center justify-center rounded-md">
                    <img src={redTable} alt="bench" className="w-full" />
                  </div>
                  <div className="flex flex-col h-full  ml-3">
                    <h2 className=" text-gray-900 font-semibold">Tray Table</h2>
                    <p className="text-gray-400 text-sm my-2">Color : Gold</p>

                    <button className="text-gray-600 flex gap-2 text-2xl font-semibold">
                      <ion-icon name="close-outline"></ion-icon>{" "}
                      <div className="text-sm">Remove</div>
                    </button>
                  </div>
                </div>
                <div className=" flex gap-12 items-center">
                  {/* Quantity */}
                  <div className="flex border-[0.4px] border-gray-600 h-[32px] w-[80px]  rounded-[5px] items-center justify-center gap-[3px]">
                    {/* Add - Funtionality  */}
                    <button className="outline-none text-gray-600 ">
                      <ion-icon name="remove-outline"></ion-icon>
                    </button>
                    <div className="text-sm w-[20px]">2</div>
                    {/* Add + Funtionality  */}
                    <button className="outline-none text-gray-600 ">
                      <ion-icon name="add-outline"></ion-icon>
                    </button>
                  </div>
                  <p className="text-lg text-gray-700 mb-2 ">$19.00</p>
                  <p className="text-lg text-gray-700 mb-2 font-semibold">
                    $38.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" " style={{ width: "413px" }}>
          <div className="flex flex-col  p-6 border border-gray-400  rounded-lg ">
            <h2 className="text-xl font-semibold text-left mb-4">Cart summary</h2>
            {shippingOptions.map((option) => (
              <label
                key={option.label}
                className={`p-4 flex px-5 justify-between border rounded-sm mb-3  cursor-pointer ${
                  shipping === option.label ? "bg-gray-100" : ""
                }`}
              >
                <div>
                  <input
                    type="radio"
                    name="shipping"
                    value={option.label}
                    checked={shipping === option.label}
                    onChange={(e) => setShipping(e.target.value)}
                    className=" mr-2"
                  />
                  {option.label}
                </div>

                <span className="float-right ">
                  {option.cost === 0 ? "$0.00" : `+${option.cost.toFixed(2)}`}
                </span>
              </label>
            ))}
            <div className="mt-4 pt-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
               
                <span>${subtotal.toFixed(2)}</span>
              </div>
               <hr className="mt-6 h-[2px] bg-gray-400 " />
              <div className="flex mt-5 justify-between font-bold text-lg mb-3">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>
            <button className="mt-4 w-full bg-black text-white py-2 rounded-md">
              Checkout
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex text-left flex-col max-w-sm mt-8 mb-8 p-4">
          <h2 className="text-lg font-semibold mb-2">Have a coupon?</h2>
          <p className="text-gray-500 mb-4">
            Add your code for an instant cart discount
          </p>
          <div className="flex items-center border  overflow-hidden">
            <span className="flex items-center px-1 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 3H9a2 2 0 00-2 2v1H5a2 2 0 00-2 2v6a2 2 0 002 2h2v1a2 2 0 002 2h6a2 2 0 002-2v-1h2a2 2 0 002-2V8a2 2 0 00-2-2h-2V5a2 2 0 00-2-2zM9 7h6M9 11h6"
                />
              </svg>
            </span>
            <input
              id="coupon-code"
              type="text"
              placeholder="Coupon Code"
              className="flex-grow px-4 py-2 border-none focus:ring-0 focus:outline-none"
            />
            <button className="px-4 py-2  text-black hover:bg-gray-300 focus:outline-none">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
