'use client'
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image"
import "@/app/styles/shop-cart.css"
import { useCart } from "@/context/carthandler/page";
import Link  from "next/link";
import { useMemo } from "react";

export function CartContent( order? : { order: any }) {
    

    return (
        <div className="cart-page">
            <div className="cart-container">
                <div className="cart-content">
                    <div className="cart-title">Your shopping cart</div>
                    <div className="cart-items"> 
                        <div className="cart-header">
                            <div className="cart-header-item md:text-2xl sm:text-lg">Product</div>
                            <div className="cart-header-item md:text-2xl sm:text-lg">Quantity</div>
                            <div className="cart-header-item md:text-2xl sm:text-lg">Total</div>
                            <div className="cart-header-item md:text-2xl sm:text-lg"></div>
                        </div>
                        <CartDetails />
                    </div>
                    <div className="flex justify-end border-t border-gray-400 my-[10px] ">
                        <div className="my-[10px] flex flex-col gap-[10px] items-end  ">
                            <CartTotal />
                            <div className="text-[#4E4D93] text-sm  ">Taxes and shipping are calculated at checkout</div>
                            <Link href='/checkout'><button id="input-checkout">Go To Checkout</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}


export const CartDetails= ( key? : any ) => {
    const { cartItems, updateQuantity, removeItem } = useCart()

    const cartItemsList = useMemo(() => {
        return cartItems.map((item: any) => (
            <div className="cart-item" key={item.product._id}>
                <div className="flex flex-row gap-2 items-center">
                    <Image
                        className="object-cover object-center bg-no-repeat w-[50px] sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[120px] lg:w-[140px] lg:h-[170px] "
                        src={item.product?.image}
                        alt={item.product.name}
                        width={200}
                        height={200}
                        loading="lazy"
                    />
                    <div className="cart-item-info">
                        <div className=" md:text-xl sm:text-sm lg:text-2xl">{item.product.name}</div>
                        <div className="flex-1 md:text-xl sm:text-sm lg:text-2xl">£{item.product.price}</div>
                    </div>
                </div>
                <div className="items-center flex flex-1">
                    <input
                        type="number"
                        min='1'
                        required={true}
                        value={item.quantity}
                        className="flex text-start md:text-center xl:text-end w-full bg-inherit"
                        onChange={(e) => {
                            const value = parseInt(e.target.value, 10);
                            if (isNaN(value) || value < 1) {
                                updateQuantity(item.product._id, 1);
                            } else {
                                updateQuantity(item.product._id, value);
                            }
                        }}
                    />
                </div>
                <div className="cart-item-total w-full justify-end items-center flex">
                    £{(item.product.price * item.quantity).toFixed(2)}
                </div>
                <button className="flex-1 justify-end items-center flex border-none bg-inherit cursor-default">
                    <Image src={'trash.svg'} alt="" width={30} height={30} onClick={() => removeItem(item.product._id)} className="cursor-pointer" loading="lazy" />
                </button>
            </div>
        ));
    }, [cartItems, updateQuantity, removeItem]);
    return (
        <div>
            {cartItemsList}
        </div>
    )
}

export const CartTotal = () => {
    const { cartItems } = useCart();
    const calculateSubtotal = () =>
        cartItems
            .reduce(
                (sum, item) => sum + item.product.price * item.quantity,
                0
            )
            .toFixed(2);

    return (
        <div className="flex items-center justify-between gap-3">
            <div className="text-[#4E4D93] gap-[10px] inline text-3xl  ">Subtotal</div>
            <span className="text-2xl">{calculateSubtotal()}</span>
        </div>
    )
}