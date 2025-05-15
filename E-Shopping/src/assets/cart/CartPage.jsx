import React from "react";
import { useCart } from "./CartContext";
import "../../App.css";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="font-poppins cart-page max-w-full mx-auto px-4 py-6  ">
      <h2 className="text-center text-xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="pl-4">No items in cart.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="flex -translate-x-4 w-full items-center mb-2 border p-2 rounded">
                <img src={item.image} alt={item.name} className="w-16 h-16" />
                <div className="font-bold">
                  <p>Model : {item.name}</p>
                  <p>Color : {item.color}</p>
                  <p>Price : ${item.price}</p>
                </div>
                <div
                  className="ml-auto flex items-center justify-center cursor-pointer pr-2"
                  onClick={() => removeFromCart(index)}
                >
                  <button
                    type="button"
                    className="bg-red-500 text-white w-8 h-8 rounded-full text-sm font-bold hover:bg-red-600"
                  >
                    ×
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t pt-4 flex justify-between items-center font-semibold text-lg">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <div className="mt-4 text-center">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded">
              Checkout
            </button>
          </div>
        </>
      )}
      

    </div>
  );
};

export default CartPage;
