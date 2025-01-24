/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { AboutHeader, FooterProduct } from "../components/ui/misc/nav";
import { CartDetails, CartTotal } from "../components/ui/order/cartcontent";
import "../styles/page-product.css"
import "../styles/page-about.css"
import "@/app/styles/shop-cart.css"
import "@/app/styles/globals.css"
import { useCart } from "../../context/carthandler/page";

export default function Checkout() {
    const { cartItems } = useCart()
    const clearCart = () => localStorage.removeItem('cart');


    const handleCheckout = async () => {
        try {
          const items = cartItems.map((item: any) => ({
            productId: item.product._id,
            quantity: item.quantity,
          }));
    
          const response = await fetch("/api/order", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ items }),
          });
    
          if (response.ok) {
            alert("Order placed successfully!");
            clearCart()
            window.location.href = "/";

          } else {
            const errorData = await response.json();
            alert(`Failed to place order: ${errorData.message}`);
          }
        } catch (error) {
          alert(`Error during checkout: ${error}`);
        }
      };

  return (
    <div>
        <AboutHeader />
        <div>
            <div className="mx-6 my-6">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid flex-col sm:grid-cols-[1fr_0.5fr] gap-5  ">
                        <div>
                            <div className="text-4xl font-bold ">Order Details</div>
                            <CartDetails key={cartItems.map((item: any) => item.product._id)} />
                            <div>

                            </div>
                        </div>
                        <div className="mx-auto flex w-full justify-center">
                            <div className=" bg-[#F9F9F9] p-6 w-full h-full   ">
                                <div className="flex flex-col gap-3 justify-between h-full  ">
                                    <div className="text-4xl font-bold">Checkout</div>
                                    <div className="text-2xl"><CartTotal /></div>
                                    <div className="flex justify-end ">
                                        <button className="bg-[#2a254b] text-white py-4 px-10 text-xl " onClick={handleCheckout}>Proceed</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterProduct />
    </div>
    )
}