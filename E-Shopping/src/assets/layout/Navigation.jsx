import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "antd";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../images/logo/logo.png";
import "../../App.css";
import { useCart } from "../cart/CartContext";

const Navigation = ({ onClick }) => {
  const { cartItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="container max-w-[90%] mx-auto py-4 flex items-center justify-between relative z-50">
      {/* Logo */}
      <div className="logo">
        <img src={logo} className="logo-image w-[120px]" alt="logo" />
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      {/* Navigation Links + Mobile Tools */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-20 left-0 w-full bg-white py-4 space-y-4 text-center md:static md:flex md:space-y-0 md:space-x-6 md:bg-transparent md:w-auto md:top-0 md:left-0 z-40`}
      >
        <ul className="font-poppins flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0 font-semibold ">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-700 text-decoration-none text-[17px]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/product" onClick={() => setIsOpen(false)} className="text-gray-700 text-decoration-none text-[17px]">
              Products
            </Link>
          </li>
          <li>
            <Link to="/promotion" onClick={() => setIsOpen(false)} className="text-gray-700 text-decoration-none text-[17px]">
              Promotions
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)} className="text-gray-700 text-decoration-none text-[17px]">
              About
            </Link>
          </li>
        </ul>
      </div>

      {/* Desktop View: Search, Cart, User */}
      <div className="hidden md:flex items-center space-x-4" onClick={onClick}>
        <div className="flex items-center space-x-4">
          {/* Cart Icon on Left */}
          <Link to="/cart" className="relative">
            <IoCartOutline size={30} />
            
          </Link>
        </div>
        <Input placeholder="Search" className="search w-[200px]" />
        <HiOutlineUserCircle size={35} />
      </div>

      {/* Floating Cart Button (Mobile View) */}
      <div className="fixed bottom-4 left-[270px] transform -translate-x-1/2 z-50 md:hidden">
        <Link to="/cart" className="relative">
          <IoCartOutline
            size={60}
            className="text-black rounded-full p-3"
          />
         
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
