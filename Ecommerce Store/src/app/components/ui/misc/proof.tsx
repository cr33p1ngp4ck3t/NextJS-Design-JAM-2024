"use client"
import Image from 'next/image';
import '@/app/styles/style.css'
import '@/app/styles/page-product.css'
import { usePathname } from 'next/navigation';


const content= [
    {
        img:'/Delivery-unfilled.png',
        title:'Next day as standard',
        desc:"Order before 3pm and get your order the next day as standard"
    },
    {
        img:'/checkmark.png',
        title:'Made by true artisans',
        desc:"Handmade crafted goods made with real passion and craftmanship"
    },
    {
        img:'/purchase.png',
        title:'Unbeatable prices',
        desc:"For our materials and quality you won’t find better prices anywhere"
    },
    {
        img:'/sprout.png',
        title:'Recycled packaging',
        desc:"We use 100% recycled to ensure our footprint is more manageable"
    },
    
]

export default function Proof() {
    const pathname = usePathname(); 
    const isHomePage = (pathname === '/') || (pathname === '/about');
    return (
        <>
        <div>

            <div className="proof-container">
                <div id="proof-header">
                    <div id="h">What Makes Our Brand Different</div>
                </div>
                <div className="proof-content">
                    {
                        content.map((details, index)=> (
                            <div key={index} className={ isHomePage ? 'proof-container-1' : 'proof-container-2'}>
                                <div style={{width:"205px", display:"flex", flexDirection:"column", height:"145px", justifyContent:"space-between"}}>
                                    <div><Image width={24} height={24} src={details.img} alt={details.title} /></div>
                                    <div id="h">{details.title}</div>
                                    <div id="t">{details.desc}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        </>
    )

}