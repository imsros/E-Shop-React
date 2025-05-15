import React from "react";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Flex, Input, Carousel, Button } from "antd";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi2";
// import logo from "../images/logo/logo.png";
import watch from "../images/carousel/series 9.jpg";
import iphone from "../images/carousel/iphone.avif";
import macbook from "../images/carousel/macbook.png";
import airpod from "../images/carousel/airpod.jpg";
// icons explore product
import icon_watch from "../images/explore-icons/watch.png";
import icon_iphone from "../images/explore-icons/phone.png";
import icon_macbook from "../images/explore-icons/computer.png";
import icon_airpod from "../images/explore-icons/airpods.png";
// watch feature icons
import performance_icon from "../images/smartwatch-features/growth.png";
import battery_icon from "../images/smartwatch-features/full-battery.png";
import quality_icon from "../images/smartwatch-features/quality.png";
import price_icon from "../images/smartwatch-features/label.png";
import connection_icon from "../images/smartwatch-features/connection.png";
import date_icon from "../images/smartwatch-features/calendar.png";
// pear-watch
import watch01 from "../images/series9/01.webp";
import watch02 from "../images/series9/02.png";
import watch03 from "../images/series9/03.jpg";
import watch04 from "../images/series9/04.jpg";
// pear phone

import phone01 from "../images/iphone-features/phone01.png";
import phone02 from "../images/iphone-features/phone02.webp";
import phone03 from "../images/iphone-features/phone03.webp";
import phone04 from "../images/iphone-features/phone04.webp";

// pear mac
import mac01 from "../images/macbook-features/01.jpg";
import mac02 from "../images/macbook-features/02.jpg";
import mac03 from "../images/macbook-features/03.jpg";
import mac04 from "../images/macbook-features/04.jpg";
// airpod
import airpod01 from "../images/airpod/01.jfif";
import airpod02 from "../images/airpod/02.jpeg";
import airpod03 from "../images/airpod/03.jpg";
import airpod04 from "../images/airpod/04.jpg";
// social media

import { useCart } from "../cart/CartContext";

import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram, FaTelegram, FaLinkedin } from "react-icons/fa";
import {
  StarFilled,
  StarOutlined,
  HeartOutlined,
  SearchOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Footer } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleDiscoverMoreWatch = () => {
    navigate("/product#watch-section");
  };
  const handleDiscoverMorePhone = () => {
    navigate("/product#phone-section");
  };
  const handleDiscoverMoreMac = () => {
    navigate("/product#mac-section");
  };
  const handleDiscoverMoreAirpods = () => {
    navigate("/product#airpods-section");
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const { addToCart } = useCart();
  const StarRating = ({ rating }) => {
    return (
      <p className="watch-rate">
        {[...Array(5)].map((_, index) =>
          index < rating ? (
            <StarFilled key={index} style={{ color: "darkyellow" }} />
          ) : (
            <StarOutlined key={index} style={{ color: "gray" }} />
          )
        )}
      </p>
    );
  };
  return (
    <>
      {/* ended navigation section */}
      <div className="top-content max-w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Image at Top on Mobile */}

        {/* Text at Bottom on Mobile */}
        <div
          className="top-content-description w-full md:w-1/2 text-center md:text-left"
          data-aos="fade-right"
        >
          <p className="text-lg">Skip the impossible</p>
          <h1 className="text-2xl font-bold mt-2">
            Extraordinery <span className="text-blue-300">Performance</span>
          </h1>
          <Button type="primary" className="mt-4 p-2">
            Purchase Now
          </Button>
        </div>
        <div
          className="top-content-image w-full md:w-1/2 mb-6 md:mb-0"
          data-aos="fade-left"
        >
          <img
            src={watch}
            alt="Watch"
            className="w-full h-[300px] sm:h-[400px] object-contain md:h-auto"
          />
        </div>
      </div>

      {/* top watch show ended */}
      <div className="explore-product max-w-[80%] mx-auto mt-8  h-32">
        <div className="explore-product-title h-[40%] w-full font-semibold">
          <h1>Explore Product</h1>
        </div>
        <div className="explore-products h-[60%] w-full">
          <div className="items">
            <img src={icon_watch} alt="icon_watch" />
          </div>
          <div className="items">
            <img src={icon_iphone} alt="icon_iphone" />
          </div>
          <div className="items">
            <img src={icon_macbook} alt="icon_macbook" />
          </div>
          <div className="items">
            <img src={icon_airpod} alt="icon_airpod" />
          </div>
        </div>
      </div>

      <div className="smartwatch-title max-w-[90%] mx-auto h-7  mb-3 flex flex-row">
        <div className="line h-[100%] w-2 bg-sky-600 rounded "></div>
        <div className="title-name ml-5 font-sans">
          <h4>Smartwatch</h4>
        </div>
      </div>
      {/* product explore ended */}

      <div className="smartwatch-features">
        <div className="features-wrapper ">
          <div className="feature" data-aos="fade-right">
            <img src={performance_icon} alt="Performance" />
            <div>
              <h3>Extraordinary Performance</h3>
              <p>A smartwatch is a wearable computer in the form of a watch.</p>
            </div>
          </div>
          <div className="feature" data-aos="fade-right">
            <img src={battery_icon} alt="Battery" />
            <div>
              <h3>Excellent Battery Life</h3>
              <p>A smartwatch is a wearable computer in the form of a watch.</p>
            </div>
          </div>
          <div className="feature" data-aos="fade-right">
            <img src={connection_icon} alt="Connectivity" />
            <div>
              <h3>Connectable</h3>
              <p>A smartwatch is a wearable computer in the form of a watch.</p>
            </div>
          </div>
        </div>
        <img className="smartwatch" src={watch} alt="Smartwatch" />

        <div className="features-wrapper">
          <div className="feature" data-aos="fade-left">
            <img src={date_icon} alt="Time" />
            <div>
              <h3>Shows Time & Date</h3>
              <p>A smartwatch is a wearable computer in the form of a watch.</p>
            </div>
          </div>
          <div className="feature" data-aos="fade-left">
            <img src={price_icon} alt="Price" />
            <div>
              <h3>Affordable Price</h3>
              <p>A smartwatch is a wearable computer in the form of a watch.</p>
            </div>
          </div>
          <div className="feature" data-aos="fade-left">
            <img src={quality_icon} alt="Quality" />
            <div>
              <h3>Best Quality and Design</h3>
              <p>A smartwatch is a wearable computer in the form of a watch.</p>
            </div>
          </div>
        </div>
      </div>
      {/* smartwatch features ended */}
      <div className="pear-watch-title">
        <h2 className="text-center text-slate-600 mt-3 ">
          Pear-watch Products
        </h2>
      </div>
      <div
        className="pear-watch hide-scrollbar overflow-x-auto flex md:flex-row md:justify-between md:flex-wrap flex-nowrap gap-4 px-2"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="pear-watch-box min-w-[300px]  flex-shrink-0">
          <div className="pear-watch-image">
            <div className="circle">
              <img src={watch01} alt="watch01" />
            </div>
            <div className="on-hover">
              <Button className="rounded-3xl p-3 w-24">
                <HeartOutlined />
                <SearchOutlined />
              </Button>
            </div>
          </div>
          <div className="pear-watch-description space-y-1">
            <p className="watch-name">Apple Watch Series 9</p>
            <p className="watch-color">Color Gray</p>
            <p className="watch-rate text-yellow-600">
              <StarRating rating={4} />
            </p>
            <p className="watch-price">$519</p>
            <Button
              type="primary"
              className="p-3 rounded-3xl mb-2"
              onClick={() =>
                addToCart({
                  id: 1,
                  name: "Apple Watch Series 9",
                  color: "Gray",
                  price: 519,
                  image: watch01,
                })
              }
            >
              Add to cart
            </Button>
          </div>
        </div>
        <div className="pear-watch-box min-w-[300px] flex-shrink-0">
          <div className="pear-watch-image">
            <div className="circle">
              <img src={watch02} alt="watch02" />
            </div>
            <div className="on-hover">
              <Button className="rounded-3xl p-3 w-24">
                <HeartOutlined />
                <SearchOutlined />
              </Button>
            </div>
          </div>
          <div className="pear-watch-description space-y-1">
            <p className="watch-name">Apple Watch Series 9</p>
            <p className="watch-color">Color Black</p>
            <p className="watch-rate text-yellow-600">
              <StarRating rating={5} />
            </p>
            <p className="watch-price">$519</p>
            <Button
              type="primary"
              className="p-3 rounded-3xl mb-2"
              onClick={() =>
                addToCart({
                  id: 2,
                  name: "Apple Watch Series 9",
                  color: "Black",
                  price: 519,
                  image: watch02,
                })
              }
            >
              Add to cart
            </Button>
          </div>
        </div>
        <div className="pear-watch-box min-w-[300px] flex-shrink-0">
          <div className="pear-watch-image">
            <div className="circle">
              <img src={watch03} alt="watch03" />
            </div>
            <div className="on-hover">
              <Button className="rounded-3xl p-3 w-24">
                <HeartOutlined />
                <SearchOutlined />
              </Button>
            </div>
          </div>
          <div className="pear-watch-description space-y-1">
            <p className="watch-name">Apple Watch Series 9</p>
            <p className="watch-color">Color Slategray</p>
            <p className="watch-rate text-yellow-600">
              <StarRating rating={3} />
            </p>
            <p className="watch-price">$519</p>
            <Button
              type="primary"
              className="p-3 rounded-3xl mb-2"
              onClick={() =>
                addToCart({
                  id: 3,
                  name: "Apple Watch Series 9",
                  color: "Slategray",
                  price: 519,
                  image: watch03,
                })
              }
            >
              Add to cart
            </Button>
          </div>
        </div>
        <div className="pear-watch-box min-w-[300px] flex-shrink-0">
          <div className="pear-watch-image">
            <div className="circle">
              <img src={watch04} alt="watch04" />
            </div>
            <div className="on-hover">
              <Button className="rounded-3xl p-3 w-24">
                <HeartOutlined />
                <SearchOutlined />
              </Button>
            </div>
          </div>
          <div className="pear-watch-description space-y-1">
            <p className="watch-name">Apple Watch Series 9</p>
            <p className="watch-color">Color Pink</p>
            <p className="watch-rate text-yellow-600">
              <StarRating rating={5} />
            </p>
            <p className="watch-price">$519</p>
            <Button
              type="primary"
              className="p-3 rounded-3xl mb-2"
              onClick={() =>
                addToCart({
                  id: 4,
                  name: "Apple Watch Series 9",
                  color: "Pink",
                  price: 519,
                  image: watch04,
                })
              }
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
      <div className="discover-more" onClick={handleDiscoverMoreWatch}>
        <p className="w-7 h-7 rounded-3xl bg-black text-white text-center">
          <ArrowRightOutlined />
        </p>
        <p>Discover More</p>
      </div>
      {/* a whole smart watch ended */}

      {/* started the phone section */}
      <div className="smartwatch-title max-w-[90%] mx-auto h-7  mb-3 flex flex-row">
        <div className="line h-[100%] w-2 bg-sky-600 rounded "></div>
        <div className="title-name ml-5 font-sans">
          <h4>IPhone</h4>
        </div>
      </div>

      <div className="top-content max-w-[80%] mx-auto   bg-white flex flex-row-reverse">
        <div className="top-content-description max-w-[50%] bg-white">
          <p>Skip the impossible</p>
          <h1 className="text-xl indent-2">
            The apple reminds us that the seeds of knowledge grow from life's
            simplest elements.
          </h1>
          <Button type="primary" className="mt-4 p-2">
            Purchase Now
          </Button>
        </div>
        <div className="top-content-image max-w-[50%]">
          <img src={iphone} alt="" />
        </div>
      </div>

      {/* pear phone  */}
      <div className="pear-watch-title ">
        <h2 className="text-center text-slate-600 mt-3 ">
          Pear-phone Products
        </h2>
      </div>
      <div
        className="pear-watch hide-scrollbar overflow-x-auto flex md:flex-row md:justify-between md:flex-wrap flex-nowrap gap-4 px-4"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="pear-watch-box min-w-[300px] flex-shrink-0">
          <div className="pear-watch-image min-w-[300px] flex-shrink-0">
            <div className="circle">
              <img src={phone01} alt="phone01" />
            </div>
            <div className="on-hover">
              <Button className="rounded-3xl p-3 w-24">
                <HeartOutlined />
                <SearchOutlined />
              </Button>
            </div>
          </div>
          <div className="pear-watch-description space-y-1">
            <p className="watch-name">IPHONE 16</p>
            <p className="watch-color">Color Black</p>
            <p className="watch-rate text-yellow-600">
              <StarRating rating={4} />
            </p>
            <p className="watch-price">$1229</p>
            <Button
              type="primary"
              className="p-3 rounded-3xl mb-2"
              onClick={() =>
                addToCart({
                  id: 5,
                  name: "IPHONE 16",
                  color: "Black",
                  price: 1229,
                  image: phone01,
                })
              }
            >
              Add to cart
            </Button>
          </div>
        </div>
        <div className="pear-watch-box min-w-[300px] flex-shrink-0">
          <div className="pear-watch-image">
            <div className="circle">
              <img src={phone02} alt="phone02" />
            </div>
            <div className="on-hover">
              <Button className="rounded-3xl p-3 w-24">
                <HeartOutlined />
                <SearchOutlined />
              </Button>
            </div>
          </div>
          <div className="pear-watch-description space-y-1">
            <p className="watch-name">IPHONE16</p>
            <p className="watch-color">Color Pink</p>
            <p className="watch-rate text-yellow-600">
              <StarRating rating={5} />
            </p>
            <p className="watch-price">$1229</p>
            <Button
              type="primary"
              className="p-3 rounded-3xl mb-2"
              onClick={() =>
                addToCart({
                  id: 6,
                  name: "IPHONE 16",
                  color: "Pink",
                  price: 1229,
                  image: phone02,
                })
              }
            >
              Add to cart
            </Button>
          </div>
        </div>
        <div className="pear-watch-box min-w-[300px] flex-shrink-0">
          <div className="pear-watch-image">
            <div className="circle">
              <img src={phone03} alt="phone03" />
            </div>
            <div className="on-hover">
              <Button className="rounded-3xl p-3 w-24">
                <HeartOutlined />
                <SearchOutlined />
              </Button>
            </div>
          </div>
          <div className="pear-watch-description space-y-1">
            <p className="watch-name">IPHONE16</p>
            <p className="watch-color">Color Blue</p>
            <p className="watch-rate text-yellow-600">
              <StarRating rating={3} />
            </p>
            <p className="watch-price">$1229</p>
            <Button
              type="primary"
              className="p-3 rounded-3xl mb-2"
              onClick={() =>
                addToCart({
                  id: 7,
                  name: "IPHONE 16",
                  color: "Blue",
                  price: 1229,
                  image: phone03,
                })
              }
            >
              Add to cart
            </Button>
          </div>
        </div>
        <div className="pear-watch-box min-w-[300px] flex-shrink-0">
          <div className="pear-watch-image">
            <div className="circle">
              <img src={phone04} alt="phone04" />
            </div>
            <div className="on-hover">
              <Button className="rounded-3xl p-3 w-24">
                <HeartOutlined />
                <SearchOutlined />
              </Button>
            </div>
          </div>
          <div className="pear-watch-description space-y-1">
            <p className="watch-name">IPHONE16</p>
            <p className="watch-color">Color Teal</p>
            <p className="watch-rate text-yellow-600">
              <StarRating rating={5} />
            </p>
            <p className="watch-price">$1229</p>
            <Button
              type="primary"
              className="p-3 rounded-3xl mb-2"
              onClick={() =>
                addToCart({
                  id: 8,
                  name: "IPHONE 16",
                  color: "Teal",
                  price: 1229,
                  image: phone04,
                })
              }
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
      <div className="discover-more" onClick={handleDiscoverMorePhone}>
        <p className="w-7 h-7 rounded-3xl bg-black text-white text-center">
          <ArrowRightOutlined />
        </p>
        <p>Discover More</p>
      </div>

      <div className="smartwatch-title max-w-[90%] mx-auto h-7  mb-3 flex flex-row">
        <div className="line h-[100%] w-2 bg-sky-600 rounded "></div>
        <div className="title-name ml-5 font-sans">
          <h4>MacBook</h4>
        </div>
      </div>
      {/* started the mac section */}
      <div className="top-content max-w-[80%] mx-auto ">
        <div className="top-content-description max-w-[50%] ">
          <p>Skip the impossible</p>
          <h1 className="text-xl indent-2">
            Macbooks are not just computers, they are a way of life. They
            inspire creativity, productivity, and a seamless user experience.
          </h1>
          <Button type="primary" className="mt-4 p-2">
            Purchase Now
          </Button>
        </div>
        <div className="top-content-image max-w-[50%]">
          <img src={macbook} alt="" />
        </div>
      </div>

      {/* pear macbook  */}
      <div className="pear-watch-title">
        <h2 className="text-center text-slate-600 mt-3 ">
          Pear-MacBook Products
        </h2>
      </div>
      <div
        className="pear-watch hide-scrollbar overflow-x-auto flex md:flex-row md:justify-between md:flex-wrap flex-nowrap gap-4 px-4"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="pear-watch-box min-w-[300px] flex-shrink-0">
          <div className="pear-watch-image">
            <div className="circle">
              <img src={mac01} alt="phone01" />
            </div>
            <div className="on-hover">
              <Button className="rounded-3xl p-3 w-24">
                <HeartOutlined />
                <SearchOutlined />
              </Button>
            </div>
          </div>
          <div className="pear-watch-description space-y-1">
            <p className="watch-name">Macbook M4</p>
            <p className="watch-color">Color Midnight</p>
            <p className="watch-rate text-yellow-600">
              <StarRating rating={4} />
            </p>
            <p className="watch-price">$1600</p>
            <Button
              type="primary"
              className="p-3 rounded-3xl mb-2"
              onClick={() =>
                addToCart({
                  id: 9,
                  name: "Macbook M4",
                  color: "Midnight",
                  price: 1600,
                  image: mac01,
                })
              }
            >
              Add to cart
            </Button>
          </div>
        </div>
        <div className="pear-watch-box min-w-[300px] flex-shrink-0">
          <div className="pear-watch-image">
            <div className="circle">
              <img src={mac02} alt="phone02" />
            </div>
            <div className="on-hover">
              <Button className="rounded-3xl p-3 w-24">
                <HeartOutlined />
                <SearchOutlined />
              </Button>
            </div>
          </div>
          <div className="pear-watch-description space-y-1">
            <p className="watch-name">Macbook M4</p>
            <p className="watch-color">Color Sky Blue</p>
            <p className="watch-rate text-yellow-600">
              <StarRating rating={5} />
            </p>
            <p className="watch-price">$1600</p>
            <Button
              type="primary"
              className="p-3 rounded-3xl mb-2"
              onClick={() =>
                addToCart({
                  id: 10,
                  name: "Macbook M4",
                  color: "Sky Blue",
                  price: 1600,
                  image: mac02,
                })
              }
            >
              Add to cart
            </Button>
          </div>
        </div>
        <div className="pear-watch-box min-w-[300px] flex-shrink-0">
          <div className="pear-watch-image">
            <div className="circle">
              <img src={mac03} alt="phone03" />
            </div>
            <div className="on-hover">
              <Button className="rounded-3xl p-3 w-24">
                <HeartOutlined />
                <SearchOutlined />
              </Button>
            </div>
          </div>
          <div className="pear-watch-description space-y-1">
            <p className="watch-name">Macbook M4</p>
            <p className="watch-color">Color Starlight</p>
            <p className="watch-rate text-yellow-600">
              <StarRating rating={3} />
            </p>
            <p className="watch-price">$1600</p>
            <Button
              type="primary"
              className="p-3 rounded-3xl mb-2"
              onClick={() =>
                addToCart({
                  id: 11,
                  name: "Macbook M4",
                  color: "Starlight",
                  price: 1600,
                  image: mac03,
                })
              }
            >
              Add to cart
            </Button>
          </div>
        </div>
        <div className="pear-watch-box min-w-[300px] flex-shrink-0">
          <div className="pear-watch-image">
            <div className="circle">
              <img src={mac04} alt="phone04" />
            </div>
            <div className="on-hover">
              <Button className="rounded-3xl p-3 w-24">
                <HeartOutlined />
                <SearchOutlined />
              </Button>
            </div>
          </div>
          <div className="pear-watch-description space-y-1">
            <p className="watch-name">Macbook M4</p>
            <p className="watch-color">Color Silver</p>
            <p className="watch-rate text-yellow-600">
              <StarRating rating={5} />
            </p>
            <p className="watch-price">$1600</p>
            <Button
              type="primary"
              className="p-3 rounded-3xl mb-2"
              onClick={() =>
                addToCart({
                  id: 12,
                  name: "Macbook M4",
                  color: "Silver",
                  price: 1600,
                  image: mac04,
                })
              }
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
      <div className="discover-more" onClick={handleDiscoverMoreMac}>
        <p className="w-7 h-7 rounded-3xl bg-black text-white text-center">
          <ArrowRightOutlined />
        </p>
        <p>Discover More</p>
      </div>

      <div className="smartwatch-title max-w-[90%] mx-auto h-7  mb-3 flex flex-row">
        <div className="line h-[100%] w-2 bg-sky-600 rounded "></div>
        <div className="title-name ml-5 font-sans">
          <h4>Airpods</h4>
        </div>
      </div>

      <div className="top-content max-w-[80%] mx-auto bg-white flex flex-row-reverse">
        <div className="top-content-description max-w-[50%] bg-white">
          <p>Skip the impossible</p>
          <h1 className="text-xl indent-2">
            That airpod is hanging on for dear life.
          </h1>
          <Button type="primary" className="mt-4 p-2">
            Purchase Now
          </Button>
        </div>
        <div className="top-content-image max-w-[50%] ">
          <img src={airpod} alt="" />
        </div>
      </div>

      {/* pear airpod */}
      <div className="pear-watch-title">
        <h2 className="text-center text-slate-600 mt-3 ">
          Pear-airpod Products
        </h2>
      </div>
      <div
        className="pear-watch hide-scrollbar overflow-x-auto flex md:flex-row md:justify-between md:flex-wrap flex-nowrap gap-4 px-4"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="pear-watch-box min-w-[300px] flex-shrink-0">
          <div className="pear-watch-image">
            <div className="circle">
              <img src={airpod01} alt="phone01" />
            </div>
            <div className="on-hover">
              <Button className="rounded-3xl p-3 w-24">
                <HeartOutlined />
                <SearchOutlined />
              </Button>
            </div>
          </div>
          <div className="pear-watch-description space-y-1">
            <p className="watch-name">Airpods 3</p>
            <p className="watch-color">Color White</p>
            <p className="watch-rate text-yellow-600">
              <StarRating rating={4} />
            </p>
            <p className="watch-price">$219</p>
            <Button
              type="primary"
              className="p-3 rounded-3xl mb-2"
              onClick={() =>
                addToCart({
                  id: 13,
                  name: "Airpods 3",
                  color: "White",
                  price: 219,
                  image: airpod01,
                })
              }
            >
              Add to cart
            </Button>
          </div>
        </div>
        <div className="pear-watch-box min-w-[300px] flex-shrink-0">
          <div className="pear-watch-image">
            <div className="circle">
              <img src={airpod02} alt="phone02" />
            </div>
            <div className="on-hover">
              <Button className="rounded-3xl p-3 w-24">
                <HeartOutlined />
                <SearchOutlined />
              </Button>
            </div>
          </div>
          <div className="pear-watch-description  space-y-1">
            <p className="watch-name">Airpods 3 Pro</p>
            <p className="watch-color">Color White</p>
            <p className="watch-rate text-yellow-600">
              <StarRating rating={5} />
            </p>
            <p className="watch-price">$219</p>
            <Button
              type="primary"
              className="p-3 rounded-3xl mb-2"
              onClick={() =>
                addToCart({
                  id: 14,
                  name: "Airpods 3 Pro",
                  color: "White",
                  price: 219,
                  image: airpod02,
                })
              }
            >
              Add to cart
            </Button>
          </div>
        </div>
        <div className="pear-watch-box min-w-[300px] flex-shrink-0">
          <div className="pear-watch-image">
            <div className="circle">
              <img src={airpod03} alt="phone03" />
            </div>
            <div className="on-hover">
              <Button className="rounded-3xl p-3 w-24">
                <HeartOutlined />
                <SearchOutlined />
              </Button>
            </div>
          </div>
          <div className="pear-watch-description space-y-1">
            <p className="watch-name">Airpods 2</p>
            <p className="watch-color">Color White</p>
            <p className="watch-rate text-yellow-600">
              <StarRating rating={3} />
            </p>
            <p className="watch-price">$219</p>
            <Button
              type="primary"
              className="p-3 rounded-3xl mb-2"
              onClick={() =>
                addToCart({
                  id: 15,
                  name: "Airpods 2",
                  color: "White",
                  price: 219,
                  image: airpod03,
                })
              }
            >
              Add to cart
            </Button>
          </div>
        </div>
        <div className="pear-watch-box min-w-[300px] flex-shrink-0">
          <div className="pear-watch-image">
            <div className="circle">
              <img src={airpod04} alt="phone04" />
            </div>
            <div className="on-hover">
              <Button className="rounded-3xl p-3 w-24">
                <HeartOutlined />
                <SearchOutlined />
              </Button>
            </div>
          </div>
          <div className="pear-watch-description space-y-1">
            <p className="watch-name">Airpods 2 Pro</p>
            <p className="watch-color">Color White</p>
            <p className="watch-rate text-yellow-600">
              <StarRating rating={5} />
            </p>
            <p className="watch-price">$219</p>
            <Button
              type="primary"
              className="p-3 rounded-3xl mb-2"
              onClick={() =>
                addToCart({
                  id: 16,
                  name: "Airpods 2 Pro",
                  color: "White",
                  price: 219,
                  image: airpod04,
                })
              }
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
      <div className="discover-more" onClick={handleDiscoverMoreAirpods}>
        <p className="w-7 h-7 rounded-3xl bg-black text-white text-center">
          <ArrowRightOutlined />
        </p>
        <p>Discover More</p>
      </div>
    </>
  );
};

export default HomePage;
