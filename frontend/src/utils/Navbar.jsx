import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Drawer } from "@mui/material";
import benchImg from "../assets/images/bench.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutMenu, setShowLogoutMenu] = useState(false);

  // Check if the user is logged in by looking for a JWT token
  const isLoggedIn = !!localStorage.getItem("token");

    console.log("isLoggedIn", isLoggedIn);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the JWT token
    navigate("/login"); // Redirect to the login page
  };

  return (
    <nav className="w-full px-3 flex items-center justify-between max-w-[1200px] h-[70px] mx-auto border-b border-gray-200">
      <div className="max-h-[70px] w-[105px]">
        <img
          src={logo}
          alt="logo-image"
          className="w-full object-contain h-full"
        />
      </div>
      <div className="flex items-center justify-between gap-[30px] nav-list">
        <Link
          to={"/"}
          className={`${
            location.pathname === "/" ? "text-[#141718] font-semibold" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to={"/shop"}
          className={`${
            location.pathname === "/shop" ? "text-[#141718] font-semibold" : ""
          }`}
        >
          Shop
        </Link>
        <Link
          to={"/products"}
          className={`${
            location.pathname === "/products"
              ? "text-[#141718] font-semibold"
              : ""
          }`}
        >
          Products
        </Link>
        <Link
          to={"/contact"}
          className={`${
            location.pathname === "/contact"
              ? "text-[#141718] font-semibold"
              : ""
          }`}
        >
          Contact Us
        </Link>
      </div>

      <div className="flex items-center justify-center gap-[15px]">
        <button className="text-2xl text-gray-900 font-light">
          <ion-icon name="search-outline"></ion-icon>
        </button>
        <button
          onClick={toggleDrawer(true)}
          className="text-2xl text-gray-900 font-light"
        >
          <ion-icon name="bag-handle-outline"></ion-icon>
        </button>
        {isLoggedIn && (
          <div className="relative">
            <button
              onClick={() => setShowLogoutMenu(!showLogoutMenu)}
              className="text-2xl text-gray-900 font-light"
            >
              <ion-icon name="person-outline"></ion-icon>
            </button>
            {showLogoutMenu && (
              <div className="absolute top-full right-0 mt-2  bg-white border border-gray-200 shadow-md rounded-md p-2 z-10">
                <button onClick={handleLogout} className="text-red-700 z-10 font-semibold">
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
        {!isLoggedIn && (
          <Link to={"/login"} className="text-2xl text-gray-900 font-light">
            <ion-icon name="person-outline"></ion-icon>
          </Link>
        )}
      </div>

      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onKeyDown={toggleDrawer(false)}
          style={{ width: 450, scrollbarWidth: 0 }}
          className="px-4 pt-6 relative"
        >
          <div className="flex items-center justify-between my-4">
            <h1 className="heading text-3xl">Cart</h1>
            <button
              onClick={toggleDrawer(false)}
              className="text-gray-900 text-3xl"
            >
              <ion-icon name="close-circle"></ion-icon>
            </button>
          </div>

          {/* Render the products here */}
          <div className="flex flex-col w-full mt-[40px]">
            {/* Cards - to render the local storage items */}
            {[0, 1].map((e) => (
              <div
                key={e}
                className="flex justify-between border-b border-gray-100 pb-5 mb-5"
              >
                <div className="flex items-center justify-center">
                  {/* Image */}
                  <div className="h-[150px] w-[120px] bg-greyish object-contain flex items-center justify-center rounded-md">
                    <img src={benchImg} alt="bench" className="w-full" />
                  </div>
                  <div className="flex flex-col h-full ml-3">
                    <h2 className="text-lg text-gray-900 font-semibold">
                      Tray Table
                    </h2>
                    <p className="text-gray-400 text-sm my-2">Color : Black</p>
                    <div className="flex border-[0.4px] border-gray-600 h-[40px] px-2 rounded-[5px] items-center justify-center gap-[3px]">
                      {/* Add - Functionality */}
                      <button className="outline-none text-gray-600 w-[40px]">
                        <ion-icon name="remove-outline"></ion-icon>
                      </button>
                      <input
                        type="number"
                        className="outline-none border-none w-[30px]"
                        value={0}
                      />
                      {/* Add + Functionality */}
                      <button className="outline-none text-gray-600 w-[30px]">
                        <ion-icon name="add-outline"></ion-icon>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-lg text-gray-700 mb-2 font-semibold">
                    $19.00
                  </p>
                  <button className="text-gray-900 text-2xl font-semibold">
                    <ion-icon name="close-outline"></ion-icon>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[240px] py-6 px-5">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-3">
            <p className="text-md text-gray-900">Subtotal</p>
            <p className="text-md text-gray-900 font-semibold">$100</p>
          </div>

          <div className="flex items-center justify-between pb-4 mb-3">
            <p className="text-xl text-gray-900 font-semibold">Total</p>
            <p className="text-xl text-gray-900 font-semibold">$234</p>
          </div>

          <button className="bg-black w-full text-xl text-white py-3 rounded-md mb-3">
            Checkout
          </button>

          <div className="w-full text-center">
            <Link
              to={"/cart"}
              className="w-[100px] text-md text-gray-900 border-b border-gray-900 font-semibold"
            >
              View Cart
            </Link>
          </div>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
