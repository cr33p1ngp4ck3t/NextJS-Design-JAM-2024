'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCart } from '@/context/carthandler/page';
import Image from 'next/image';

export default function ProductDetails({ product }: { product: any }) {
    const { addToCart } = useCart()

    return (
        <div className="product-hero">
            <div className="container-1">
                <Image src={product.image} alt={product.name} width={721} height={759} loading="lazy" />
            </div>
            <div className="container-2">
                <div className="container-desc">
                    <div>
                        <div className="product-name text-6xl">{product.name}</div>
                        <div className="product-price text-4xl">£{product.price}</div>
                    </div>
                    <div>
                        <div className='text-2xl mt-4'>Description</div>
                        <div className="product-desc md:text-lg lg:text-2xl sm:text-xl text-xl">{product.description}</div>
                        <ul className="product-features md:text-lg lg:text-2xl sm:text-xl text-xl">
                            {product.features?.map((feature: string, index: number) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="product-dimensions mt-5">
                        <div className='text-2xl'>Dimension</div>
                        <div className="dimensions-row">
                            <div className="dimension-label text-xl">Height</div>
                            <div className="dimension-label text-xl">Width</div>
                            <div className="dimension-label text-xl">Depth</div>
                        </div>
                        <div className="dimensions-row">
                            <div className="dimension-value text-xl">{product.dimensions?.height}</div>
                            <div className="dimension-value text-xl">{product.dimensions?.width}</div>
                            <div className="dimension-value text-xl">{product.dimensions?.depth}</div>
                        </div>
                    </div>
                    <div className="product-actions gap-5 mt-2">
                        <div className="product-amount text-2xl">
                            Amount <span className="amount-value text-2xl">{product.quantity}</span>
                        </div>
                        <div className="add-to-cart">
                            <button className='cart-button md:text-lg lg:text-xl ' onClick={() => addToCart(product)} onClickCapture={(_)=>alert('Item added successfully')} >Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
