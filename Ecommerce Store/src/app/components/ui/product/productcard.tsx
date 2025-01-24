"use client"
import Link from 'next/link';
import "@/app/styles/style.css"
import { type SanityDocument } from "next-sanity";
import Image from 'next/image';

export default function ProductCard({ product }: { product: SanityDocument }) { 

    return ( 
        <>
        <div className='flex justify-center items-center'>
            <div>
                <Link href={`/products/${product.slug.current}`} style={{ textDecoration: 'none' }}>
                    <div className="product-style">
                        <Image
                            src={product.image_url}
                            alt="Image"
                            width={305}
                            height={375}
                            className='object-center object-cover bg-no-repeat h-[375px] w-[305px] '
                            loading='lazy'
                            />
                        <div id="product-desc">
                            <div id="product-name">{product.name}</div>
                            <div id="product-price">£{product.price}</div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </>
    )
} 
