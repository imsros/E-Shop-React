import React, { useEffect, useState } from "react";
import { Button } from "antd";
import {
  StarFilled,
  StarOutlined,
  HeartOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "../../App.css";
import { useCart } from "../cart/CartContext";

import { useLocation } from "react-router-dom";

// Watch images
import watch01 from "../../assets/images/series9/01.webp";
import watch02 from "../../assets/images/series9/02.png";
import watch03 from "../../assets/images/series9/03.jpg";
import watch04 from "../../assets/images/series9/04.jpg";
import watch05 from "../../assets/images/series10/watch05.jpg";
import watch06 from "../../assets/images/series10/watch06.webp";
import watch07 from "../../assets/images/series10/watch07.jpg";
import watch08 from "../../assets/images/series10/watch08.jpg";
// Phone images
import phone01 from "../images/iphone-features/phone01.png";
import phone02 from "../images/iphone-features/phone02.webp";
import phone03 from "../images/iphone-features/phone03.webp";
import phone04 from "../images/iphone-features/phone04.webp";
import phone05 from "../images/iphone-features/phone05.jpg";
import phone06 from "../images/iphone-features/phone06.jpg";
import phone07 from "../images/iphone-features/phone07.webp";
import phone08 from "../images/iphone-features/phone08.jpg";

// laptop images
import mac01 from "../images/macbook-features/01.jpg";
import mac02 from "../images/macbook-features/02.jpg";
import mac03 from "../images/macbook-features/03.jpg";
import mac04 from "../images/macbook-features/04.jpg";
import mac05 from "../images/macbook-features/05.jpg";
import mac06 from "../images/macbook-features/06.jpg";
import mac07 from "../images/macbook-features/07.jpg";
import mac08 from "../images/macbook-features/08.jpg";

// airpod images
import airpod01 from "../images/airpod/01.jfif";
import airpod02 from "../images/airpod/02.jpeg";
import airpod03 from "../images/airpod/03.jpg";
import airpod04 from "../images/airpod/04.jpg";
import airpod05 from "../images/airpod/05.avif";
import airpod06 from "../images/airpod/06.jpg";

// Create watch product data
const watchProducts = [
  {
    id: 1,
    name: "Apple Watch Series 9",
    color: "Gray",
    price: 519,
    image: watch01,
    rating: 4,
  },
  {
    id: 2,
    name: "Apple Watch Series 9",
    color: "Black",
    price: 519,
    image: watch02,
    rating: 5,
  },
  {
    id: 3,
    name: "Apple Watch Series 10",
    color: "Slategray",
    price: 519,
    image: watch03,
    rating: 3,
  },
  {
    id: 4,
    name: "Apple Watch Series 9",
    color: "Pink",
    price: 519,
    image: watch04,
    rating: 5,
  },
  {
    id: 5,
    name: "Apple Watch Series 10",
    color: "Gold",
    price: 519,
    image: watch05,
    rating: 5,
  },
  {
    id: 6,
    name: "Apple Watch Series 10",
    color: "Black",
    price: 519,
    image: watch06,
    rating: 5,
  },
  {
    id: 7,
    name: "Apple Watch Series 10",
    color: "Silver",
    price: 519,
    image: watch07,
    rating: 5,
  },
  {
    id: 8,
    name: "Apple Watch Series 10",
    color: "White",
    price: 519,
    image: watch08,
    rating: 5,
  },
];

const phoneProducts = [
  {
    id: 1,
    name: "IPHONE 16",
    color: "Gray",
    price: 1229,
    image: phone01,
    rating: 4,
  },
  {
    id: 2,
    name: "IPHONE 16",
    color: "Black",
    price: 1229,
    image: phone02,
    rating: 5,
  },
  {
    id: 3,
    name: "IPHONE 16",
    color: "Slategray",
    price: 1229,
    image: phone03,
    rating: 3,
  },
  {
    id: 4,
    name: "IPHONE 16",
    color: "Pink",
    price: 1229,
    image: phone04,
    rating: 5,
  },
  {
    id: 5,
    name: "IPHONE 15",
    color: "Gold",
    price: 1229,
    image: phone05,
    rating: 5,
  },
  {
    id: 6,
    name: "IPHONE 15",
    color: "Black",
    price: 1229,
    image: phone06,
    rating: 5,
  },
  {
    id: 7,
    name: "IPHONE 15",
    color: "Silver",
    price: 1229,
    image: phone07,
    rating: 5,
  },
  {
    id: 8,
    name: "IPHONE 15",
    color: "Bluelight",
    price: 1229,
    image: phone08,
    rating: 5,
  },
];
const laptopProducts = [
  {
    id: 1,
    name: "Macbook M4",
    color: "Gray",
    price: 1600,
    image: mac01,
    rating: 4,
  },
  {
    id: 2,
    name: "Macbook M4",
    color: "Black",
    price: 1600,
    image: mac02,
    rating: 5,
  },
  {
    id: 3,
    name: "Macbook M4",
    color: "Slategray",
    price: 1600,
    image: mac03,
    rating: 3,
  },
  {
    id: 4,
    name: "Macbook M4",
    color: "Pink",
    price: 1600,
    image: mac04,
    rating: 5,
  },
  {
    id: 5,
    name: "Macbook M3",
    color: "Gold",
    price: 1600,
    image: mac05,
    rating: 5,
  },
  {
    id: 6,
    name: "Macbook M3",
    color: "Black",
    price: 1600,
    image: mac06,
    rating: 5,
  },
  {
    id: 7,
    name: "Macbook M3",
    color: "Silver",
    price: 1600,
    image: mac07,
    rating: 5,
  },
  {
    id: 8,
    name: "Macbook M3",
    color: "Bluelight",
    price: 1600,
    image: mac08,
    rating: 5,
  },
];

const airpodProducts = [
  {
    id: 1,
    name: "Airpods 3",
    color: "White",
    price: 219,
    image: airpod01,
    rating: 4,
  },
  {
    id: 2,
    name: "Airpods 3 Pro",
    color: "White",
    price: 219,
    image: airpod02,
    rating: 5,
  },
  {
    id: 3,
    name: "Airpods 2",
    color: "White",
    price: 219,
    image: airpod03,
    rating: 3,
  },
  {
    id: 4,
    name: "Airpods 2 Pro",
    color: "White",
    price: 219,
    image: airpod04,
    rating: 5,
  },
  {
    id: 5,
    name: "Airpod 1",
    color: "White",
    price: 219,
    image: airpod05,
    rating: 5,
  },
  {
    id: 6,
    name: "Airpod 1 Pro",
    color: "White",
    price: 219,
    image: airpod06,
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

const ProductPage = () => {
  const { addToCart } = useCart();
  const [selectedMenu, setSelectedMenu] = useState("watch");
  const location = useLocation();
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="font-poppins flex flex-col md:flex-row mt-[100px] max-w-full">
      {/* Sidebar */}
      <aside className="w-full md:w-[200px] md:min-h-screen bg-gray-100 p-4 shadow-md flex flex-col md:block">
        <h2 className="text-lg md:text-xl font-bold mb-4 text-center md:text-left">
          Product Menu
        </h2>
        <ul className="flex md:flex-col justify-around md:space-y-2 space-x-2 md:space-x-0 overflow-x-auto">
          <li>
            <button
              onClick={() => setSelectedMenu("watch")}
              className={`px-4 py-2 rounded whitespace-nowrap ${
                selectedMenu === "watch"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              Watch
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedMenu("phone")}
              className="px-4 py-2 rounded whitespace-nowrap hover:bg-gray-200"
            >
              Phone
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedMenu("laptop")}
              className="px-4 py-2 rounded whitespace-nowrap hover:bg-gray-200"
            >
              Laptop
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedMenu("airpod")}
              className="px-4 py-2 rounded whitespace-nowrap hover:bg-gray-200"
            >
              Airpod
            </button>
          </li>
        </ul>
      </aside>

      {/* Content */}
      <main className="flex-1 p-4 sm:p-6">
        {(selectedMenu === "watch" ||
          selectedMenu === "phone" ||
          selectedMenu === "laptop" ||
          selectedMenu === "airpod") && (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            data-aos="fade-up"
          >
            {(selectedMenu === "watch"
              ? watchProducts
              : selectedMenu === "phone"
              ? phoneProducts
              : selectedMenu === "laptop"
              ? laptopProducts
              : airpodProducts
            ).map((product) => (
              <div
                key={product.id}
                className="p-3 border rounded-xl shadow-md bg-gray-100"
              >
                <div className="mb-3">
                  <div className="w-48 h-48 flex justify-center items-center bg-gray-100 rounded-full overflow-hidden mx-auto">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="mt-2 flex justify-center gap-2">
                    <Button className="rounded-3xl p-2">
                      <HeartOutlined />
                    </Button>
                    <Button className="rounded-3xl p-2">
                      <SearchOutlined />
                    </Button>
                  </div>
                </div>
                <div className="space-y-1 text-center">
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-sm text-gray-600">
                    Color: {product.color}
                  </p>
                  <StarRating rating={product.rating} />
                  <p className="text-lg font-bold text-blue-600">
                    ${product.price}
                  </p>
                  <Button
                    type="primary"
                    className="w-full rounded-3xl"
                    onClick={() => addToCart(product)}
                  >
                    Add to cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductPage;
