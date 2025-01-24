"use client";

import React from "react";

interface AddToCartButtonProps {
  productId: string;
  quantity: number;
}

const Checkout: React.FC<AddToCartButtonProps> = ({ productId, quantity }) => {
  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
          quantity,
        }),
      });

      if (response.ok) {
        alert("Added to cart successfully!");
      } else {
        alert("Failed to add to cart");
      }
    } catch (error) {
        alert(`Error during checkout: ${error}`);
    }
  };

  return (
    // <button className="cart-button" onClick={handleCheckout}>
    //   Checkout
    // </button>
      <div className="flex justify-end ">
        <button className="bg-[#2a254b] text-white py-4 px-10 text-xl " onClick={handleCheckout}>Proceed</button>
      </div>
  );
};

export default Checkout;
