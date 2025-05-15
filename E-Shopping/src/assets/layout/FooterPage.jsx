import React from "react";
import logo from "../images/logo/logo.png";
import { Layout, Input, Button } from "antd";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram, FaTelegram, FaLinkedin } from "react-icons/fa";

const { Footer } = Layout;

const FooterPage = () => {
  return (
    <div className="bg-white">
      <div style={{ marginTop: "150px" }}></div> {/* Spacer */}

      <Footer className="flex flex-col md:flex-row justify-between w-[95%] mx-auto rounded mt-10 py-10">
        {/* Shop / Logo Section */}
        <div className="shop w-full md:w-[40%] mb-8 md:mb-0 px-4">
          <div className="logo text-center md:text-left">
            <img
              src={logo}
              className="logo-image rounded-full mx-auto md:mx-0 w-20 h-20"
              alt="logo"
            />
            <p className="font-light text-base font-poppins mt-4">
              Steve Jobs was more than just a co-founder of Apple.
            </p>
            <div className="social-media flex justify-center md:justify-start space-x-3 mt-6 md:ml-28">
              <div className="w-10 h-10 outline outline-1 outline-gray-400 rounded-full flex justify-center items-center hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer">
                <MdOutlineFacebook className="w-6 h-6" />
              </div>
              <div className="w-10 h-10 outline outline-1 outline-gray-400 rounded-full flex justify-center items-center hover:bg-pink-500 hover:text-white transition duration-300 cursor-pointer">
                <FaInstagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 outline outline-1 outline-gray-400 rounded-full flex justify-center items-center hover:bg-blue-400 hover:text-white transition duration-300 cursor-pointer">
                <FaTelegram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 outline outline-1 outline-gray-400 rounded-full flex justify-center items-center hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer">
                <FaLinkedin className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Menu and Support Section */}
        <div className="menu w-full md:w-[30%]  text-center flex flex-col md:flex-row justify-between px-4 mb-8 md:mb-0">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-poppins font-bold mb-2">Menu</p>
            <ul className="font-poppins font-light space-y-2 -translate-x-2 ">
              <li>
                <a href="#" className="text-black text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-black text-decoration-none">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-black text-decoration-none">
                  Discounts
                </a>
              </li>
              <li>
                <a href="#" className="text-black text-decoration-none">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-lg font-poppins font-bold mb-2">Supports</p>
            <ul className="font-poppins font-light space-y-2 -translate-x-2">
              <li>
                <a href="#" className="text-black text-decoration-none">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-black text-decoration-none">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-black text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-black text-decoration-none">
                  Report
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Stay In Touch Section */}
        <div className="stay-in-touch w-full md:w-[25%] px-4">
          <p className="text-lg font-poppins font-bold mb-3 text-center md:text-left">
            Stay in touch
          </p>
          <div className="flex flex-col items-center md:items-start">
            <Input
              type="email"
              placeholder="Email"
              required
              className="mb-3 w-full max-w-xs"
            />
            <Button
              htmlType="submit"
              type="primary"
              className="w-full max-w-xs"
            >
              Submit
            </Button>
          </div>
        </div>
      </Footer>

      {/* Bottom Bar */}
      <div className="text-center text-sm py-3 bg-gray-100">
        &copy; 2025 E-Shop. All rights reserved.
      </div>
    </div>
  );
};

export default FooterPage;
