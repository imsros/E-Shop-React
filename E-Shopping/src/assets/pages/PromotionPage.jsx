import React, { useState, useEffect } from "react";
import bigone from "../images/series10/big-one.jpg";
import airpod05 from "../images/airpod/05.avif";
import airpod06 from "../images/airpod/06.jpg";
import watch08 from "../../assets/images/series10/watch08.jpg";
import phone08 from "../images/iphone-features/phone08.jpg";
import { Button } from "antd";
import {
  StarFilled,
  StarOutlined,
  HeartOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../App.css";
import { useCart } from "../cart/CartContext";

const PromotionPage = () => {
  const { addToCart } = useCart();
  const [selectedMenu] = useState("airpod");

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const airpodProducts = [
    {
      id: 5,
      name: "Airpod 1",
      color: "White",
      price: 170,
      image: airpod05,
      rating: 5,
    },
    {
      id: 6,
      name: "Apple Watch Series 9",
      color: "White",
      price: 180,
      image: watch08,
      rating: 5,
    },
    {
      id: 7,
      name: "Airpod 1 Pro",
      color: "White",
      price: 500,
      image: airpod06,
      rating: 5,
    },
    {
      id: 8,
      name: "IPHONE 15",
      color: "Bluelight",
      price: 1100,
      image: phone08,
      rating: 5,
    },
  ];

  const StarRating = ({ rating }) => (
    <p className="watch-rate">
      {[...Array(5)].map((_, index) =>
        index < rating ? (
          <StarFilled key={index} style={{ color: "darkgoldenrod" }} />
        ) : (
          <StarOutlined key={index} style={{ color: "gray" }} />
        )
      )}
    </p>
  );

  return (
    <>
      {/* Promo Banner Section */}
      <div
        className="font-poppins relative w-[95%] mx-auto mt-[100px] rounded-xl bg-cover bg-center flex flex-col md:flex-row items-start md:items-center text-white px-6 py-10"
        style={{
          minHeight: "400px",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bigone})`,
        }}
      >
        <div className="space-y-3 md:space-y-6 max-w-[600px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Promotion <br className="hidden sm:block" /> up to 30%
          </h1>
          <p className="text-base sm:text-lg md:text-xl">
            Get the latest deals on our newest products—limited time only!
          </p>
          <button className="mt-3 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Product Section */}
      {selectedMenu === "airpod" && (
        <div
          id="airpods-section"
          className="w-[95%] mx-auto mt-10 mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-aos="fade-up"
        >
          {airpodProducts.map((product) => (
            <div
              key={product.id}
              className="p-3 border rounded-xl shadow-md bg-white text-black flex flex-col"
            >
              <div className="mb-4 flex justify-center items-center  ">
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-[200px] h-[200px] "
                  />
                </div>
              </div>
              <div className="space-y-2 text-center">
                <p className="text-lg font-semibold">{product.name}</p>
                <p className="text-sm text-gray-600">Color: {product.color}</p>
                <StarRating rating={product.rating} />
                <p className="text-lg font-bold">${product.price}</p>
                <Button
                  type="primary"
                  className="w-full rounded-3xl mt-2"
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PromotionPage;
