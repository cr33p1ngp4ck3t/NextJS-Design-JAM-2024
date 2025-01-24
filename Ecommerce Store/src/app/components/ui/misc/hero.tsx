"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "@/app/styles/style.css";

export default function Hero() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 425);
        };

        window.addEventListener("resize", handleResize);
        handleResize()

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className={isMobile ? "s-hero-mobile" : "s-hero"}>
            <div id="container-custom" className={isMobile ? "container-mobile" : "container-custom"}>
                <div className={isMobile ? "content-wrapper-mobile" : "content-wrapper"} style={{margin:'10%'}}>
                    <div id="content" className={isMobile ? "content-mobile" : "content"}>
                        <h1>Luxury homeware for people who love timeless design quality</h1>
                        <p>Shop the new Spring 2022 collection today</p>
                    </div>
                </div>
                <div className={isMobile ? "button-wrapper-mobile" : "button-wrapper"} style={{alignSelf:"start", margin:"10%"}}>
                    <Link href="/products" style={{flex:'1'}}><button id="content-button" className={isMobile ? "content-button-mobile" : "content-button"}>View Collection</button></Link>
                </div>
            </div>
            <Image src={'/hero.jpeg'} alt="" width={1440} height={960} />
        </div>
    );
}
