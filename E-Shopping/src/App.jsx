import React from "react";
import HomePage from "./assets/pages/HomePage";
import AboutPage from "./assets/pages/AboutPage";
import ProductPage from "./assets/pages/ProductPage";
import PromotionPage from "./assets/pages/PromotionPage";
import Navigation from "./assets/layout/navigation";
import Footer from "./assets/layout/FooterPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './assets/cart/CartContext';
import CartPage from "./assets/cart/CartPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/promotion" element={<PromotionPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;