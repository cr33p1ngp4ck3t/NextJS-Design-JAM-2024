"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { useEffect, useState } from "react"
import Menu from "./menu";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import LogoMenu from "./socials";

const searchBar = (
<div
  className="p-2 overflow-hidden w-[40px] h-[40px] hover:w-[270px] bg-[#F9F9F9] shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex group items-center hover:duration-300 duration-300"
>
  <div className="flex items-center justify-center fill-black">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Isolation_Mode"
      data-name="Isolation Mode"
      viewBox="0 0 24 24"
      width="22"
      height="22"
    >
      <path
        d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"
      ></path>
    </svg>
  </div>
  <input
    type="text"
    className="outline-none text-[20px] bg-[#F9F9F9] w-full font-normal px-4"
  />
</div>

)

const HEADER_QUERY = `
    *[_type == 'category' && defined(slug.current)]  {
    _id,
  name,
  slug
}
`


export function Header() {
    const [category, setCategory] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        async function fetchCategory() {
            const fetchedCategory = await client.fetch(HEADER_QUERY);
            setCategory(fetchedCategory);
        }
        fetchCategory();

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
                <div className="header-container">
                    <div className="header-container-1">
                        <Link href={'/'} style={{textDecoration:"none"}}><div id="heading">Avion</div></Link>
                        <div>
                            {
                                !isMobile ? (
                                    <div style={{display:"flex", gap:"20px", alignItems:"center", justifyContent:"center",}}>
                                        {searchBar}
                                        <Link href={'/cart'}><Image loading="lazy" src="/cart.svg" alt="Cart" width={24} height={24}/></Link>
                                        <Image loading="lazy" src="/user.svg" alt="" width={24} height={24}/>
                                    </div>
                                ): (
                                    <div className="hamburger-menu">
                                        <div className="hamburger-icon flex items-center">
                                            {searchBar}
                                            <Link href={'/cart'}><Image loading="lazy" src="/cart.svg" alt="Cart" width={24} height={24}/></Link>
                                            <Menu category={category} />
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
            {
                !isMobile ? (
                    <><div style={{ borderBottom: "1px solid lightgray", width: "100%" }}></div><div className="header-container-2">
                            <div className="header-container-items">
                                {
                                    category.map((item: any) => (
                                        <div key={item._id}>
                                            <Link href={`/category/${item.slug.current}`} className="" style={{textDecoration:"none", color:"inherit"}}>{item.name}</Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div></>
                ) :
                (
                    <div>

                    </div>
                )
            }
            </div>  
        </div>
    )
}
export function Footer () {
    const [category, setCategory] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        async function fetchCategory() {
            const fetchedCategory = await client.fetch(HEADER_QUERY);
            setCategory(fetchedCategory);
        }

        fetchCategory();

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            {
                !isMobile ? (

            <div style={{ background:"rgba(42, 37, 75, 1)"}} className="footer">
                <div style={{padding:"50px 70px 0",}} className="footer-container">
                    <div className="footer-content">
                        <div id="footer-content-1">
                            <div>
                                <div id="h">Menu</div>
                                <div id="h">Categories</div>
                                <div id="h">Our Company</div>
                                <div style={{fontSize:"16px", flex:"2"}}>Join our mailing list</div>
                            </div>
                        <div id="footer-content-2">
                            <div className="x">
                                <div>New arrivals</div>
                                <div>Best sellers</div>
                                <div>Recently viewed</div>
                                <div>Popular this week</div>
                                <div>all product</div>
                            </div>
                            <div className="x">
                            {
                                    category.map((item: any) => (
                                        <div key={item._id}>
                                            <Link href={`/category/${item.slug.current}`} className="" style={{textDecoration:"none", color:"inherit"}}>{item.name}</Link>
                                        </div>
                                    ))
                                }

                            </div>
                            <div className="x">
                            <div><Link href={'/about'} style={{color:"white", fontFamily:"Satoshi, sans-serif", textDecoration:'none'}}>About us</Link></div>
                            <div>contact us</div>
                                <div>vacancies</div>
                                <div>Privacy</div>
                                <div>return policy</div>
                            </div>
                            <div className="x">
                                <input type="text" id="input-field" placeholder="your@email.com"/>
                                <input type="submit" id="input-submit" value={"Sign up"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-links">
                        <div style={{fontSize:"14px", alignContent:"center"}}>Copyright 2022 Avion LTD</div>
                        <div>
                            <div style={{ display:'flex', gap:"20px", cursor:"pointer"}}>
                                <LogoMenu/>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
                ) : (
                    <div style={{background:"#2A254B", height:"100%", width:"100%", color:"white"}}>
                        <div style={{display:"grid", gridTemplateColumns:"repeat(2, 1fr)", textTransform:"capitalize", margin:"0 20px 20px", paddingTop:"30px"}}>
                            <div style={{padding:"10px 0"}}>
                                <div style={{fontSize:"16px", padding:"10px 0",color:"white"}}>Category</div>
                                {
                                    category.map((item: any) => (
                                        <div key={item._id} className="flex flex-col" style={{padding:"10px 0", fontFamily:"Satoshi, sans-serif"}}>
                                            <Link href={`/category/${item.slug.current}`} className="" style={{textDecoration:"none", color:"white", fontSize:"14px",  }}>{item.name}</Link>
                                        </div>
                                    ))
                                }
                            </div>
                            <div style={{padding:"10px 0"}}>
                                <div style={{fontSize:"16px", padding:"10px 0",color:"white"}}>Menu</div>
                                <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>New arrivals</div>
                                <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>Best sellers</div>
                                <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>Recently viewed</div>
                                <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>Popular this week</div>
                                <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif",}}><Link href={'/products'} style={{ color:"white", textDecoration:'none',}}>all product</Link></div>
                           </div>
                            <div>
                                <div style={{fontSize:"16px", color:"white", padding:"10px 0"}} >Our Company</div>
                                <Link href={'/about'}><div style={{fontSize:"14px", color:"white", padding:"10px 0"}}>About us</div></Link>
                                <div style={{fontSize:"14px", fontFamily:"Satoshi, sans-serif", color:"white", padding:"10px 0"}}>contact us</div>
                                <div style={{fontSize:"14px", fontFamily:"Satoshi, sans-serif", color:"white", padding:"10px 0"}}>vacancies</div>
                                <div style={{fontSize:"14px", fontFamily:"Satoshi, sans-serif", color:"white", padding:"10px 0"}}>Privacy</div>
                                <div style={{fontSize:"14px", fontFamily:"Satoshi, sans-serif", color:"white", padding:"10px 0"}}>return policy</div>
                            </div>
                        </div>
                        <div>
                        <div className="x" style={{ display:'flex', margin:"0 20px"}}>
                            <input type="text" id="input-field" style={{height:"56px", background:"#FFFFFF26", width:"100%", maxWidth:"254px",  border:"none"}} placeholder="your@email.com"/>
                            <input type="submit" id="input-submit" style={{height:"56px",  border:"none", width:"120px"}} value={"Sign up"}/>
                        </div>
                        </div>
                        <div style={{padding:"20px 20px 0", textAlign:'center'}}>
                            <div style={{fontSize:"14px", alignContent:"center",color:"white", padding:"20px 0", borderTop:"1px solid #4E4D93"}}>Copyright 2022 Avion LTD</div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export function HeaderProduct() {
    const [category, setCategory] = useState([]);
    const [show, setShow] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        async function fetchCategory() {
            const fetchedCategory = await client.fetch(HEADER_QUERY);
            setCategory(fetchedCategory);
        }
        fetchCategory();

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const Close = () => {
        setShow(false);
    };

    return (
        <div>
            {show && (
                <div className="promo-bar">
                    <div className="promo-content">
                        <Image loading="lazy" src="/Deliveryx1.png" alt="Delivery" className="promo-image" width={24} height={24}/>
                        <div className="promo-text">Free delivery on all orders over £50 with code easter checkout</div>
                    </div>
                    <div className="close-icon" onClick={Close}>
                        <Image loading="lazy" src="/Close.png" alt="Close" width={24} height={24}/>
                    </div>
                </div>
            )}
            <div className="header-container-product">
                <Link href={'/'} style={{ textDecoration:'none' }}><div id="heading">Avion</div></Link>

                {!isMobile ? (
                    <>
                        <div className="header-container-1">
                            <div className="header-container-items">
                            {
                                    category.map((item: any) => (
                                        <div key={item._id}>
                                            <Link href={`/category/${item.slug.current}`} className="" style={{textDecoration:"none", color:"inherit"}}>{item.name}</Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="header-icons">
                            {searchBar}
                            <Link href={'/cart'}><Image loading="lazy" src="/cart.svg" alt="Cart" width={24} height={24}/></Link>
                            <Image loading="lazy" src="/user.svg" alt="User" width={24} height={24}/>
                        </div>
                    </>
                ) : 
                (
                    <div className="hamburger-menu">
                        <div className="hamburger-icon flex items-center">
                        {searchBar}
                        <Link href={'/cart'}><Image loading="lazy" src="/cart.svg" alt="Cart" width={24} height={24}/></Link>
                        <Menu category={category} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}



export function FooterProduct() {
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth <= 768);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const fetchCategory = async () => {
            const result = await client.fetch(HEADER_QUERY);
            setCategory(result);
        };

        fetchCategory();

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return( 
        <div>
            {
                !isMobile ?
                (
                    
                <div className="product-footer">
                    <div className="product-footer-container">
                        <div>
                            <Link href={'/'} style={{textDecoration:"none"}}><div id="h">Avion</div></Link>
                            <div id="t">
                                <div>21 New York Street</div>
                                <div>New York City</div>
                                <div>United States of America</div>
                                <div>432 34</div>
                            </div>
                        </div>
                        <div style={{flex:'1', marginLeft:"50px"}}>
                            <div className="product-footer-header">
                                <div id="h">Social Links</div>
                                <div id="h">Menu</div>
                                <div id="h">Categories</div>
                                <div id="h">Our Company</div>
                            </div>
                            <div className="product-footer-text">
                                <div id="t">
                                    <div style={{display:'flex', gap:"20px", cursor:"pointer"}}>
                                        <LogoMenu/>
                                    </div>
                                </div>
                                <div id="t">
                                    <div>New arrivals</div>
                                    <div>Best sellers</div>
                                    <div>Recently viewed</div>
                                    <div>Popular this week</div>
                                    <div>all product</div>
                                </div>
                                <div id="t">
                                    {
                                    category.map((item: any) => (
                                        <Link href={`/category/${item.slug.current}`} key={item._id} className="" style={{textDecoration:"none", color:"inherit"}}>{item.name}</Link>
                                    ))
                                }
                                </div>
                                <div id="t">
                                <div><Link href={'/about'} style={{color:"white", fontFamily:"Satoshi, sans-serif", textDecoration:'none'}}>About us</Link></div>
                                <div>contact us</div>
                                    <div>vacancies</div>
                                    <div>Privacy</div>
                                    <div>return policy</div>
                                </div>
                            </div>
                    <br /> 
                    <br /> 
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div style={{fontSize:"14px", alignContent:"center"}}>Copyright 2022 Avion LTD</div>
                    </div>
                </div>
                ) : (
                    <div style={{background:"#2A254B", height:"100%", width:"100%", color:"white"}}>
                        <div style={{display:"grid", gridTemplateColumns:"repeat(2, 1fr)", textTransform:"capitalize", margin:"0 20px 20px", paddingTop:"30px"}}>
                            <div>
                                <Link href={'/'} style={{textDecoration:"none"}}><div style={{fontSize:"36px", color:"white", padding:"5px"}}>Avion</div></Link>
                                <div>
                                    <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>21 New York Street</div>
                                    <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>New York City</div>
                                    <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>United States of America</div>
                                    <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>432 34</div>
                                </div>
                            </div>
                            <div style={{padding:"10px 0"}}>
                                <div style={{fontSize:"16px", padding:"15px 0 ", color:"white"}}>Social Links</div>
                                <div style={{ display:'grid', gridTemplateColumns:"repeat(3, 1fr)", gap:"20px", cursor:"pointer"}}>
                                    <LogoMenu/>
                                </div>
                            </div>
                            <div>
                                <div style={{fontSize:"16px", padding:"10px 0",color:"white"}}>Menu</div>
                                <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>New arrivals</div>
                                <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>Best sellers</div>
                                <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>Recently viewed</div>
                                <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>Popular this week</div>
                                <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>all product</div>
                           </div>
                            <div>
                                <div style={{fontSize:"16px", color:"white", padding:"10px 0"}} >Our Company</div>
                                <Link href={'/about'}><div style={{fontSize:"14px", color:"white", padding:"10px 0", textDecoration:"none"}}>About us</div></Link>
                                <div style={{fontSize:"14px", fontFamily:"Satoshi, sans-serif", color:"white", padding:"10px 0"}}>contact us</div>
                                <div style={{fontSize:"14px", fontFamily:"Satoshi, sans-serif", color:"white", padding:"10px 0"}}>vacancies</div>
                                <div style={{fontSize:"14px", fontFamily:"Satoshi, sans-serif", color:"white", padding:"10px 0"}}>Privacy</div>
                                <div style={{fontSize:"14px", fontFamily:"Satoshi, sans-serif", color:"white", padding:"10px 0"}}>return policy</div>
                            </div>
                        </div>
                        <div style={{padding:"20px 20px 0"}}>
                            <div style={{fontSize:"14px", alignContent:"center", color:"white", padding:"20px 0", borderTop:"1px solid #4E4D93"}}>Copyright 2022 Avion LTD</div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export function AboutHeader() {
    const [show, setShow] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [category, setCategory] = useState([]);
    const Close = () => {
        setShow(false);
    };

    useEffect(() => {
        const fetchCategory = async () => {
            const fetchedCategory = await client.fetch(HEADER_QUERY);
            setCategory(fetchedCategory);
        };

        fetchCategory();

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return(
        <div>
            <div>
                <div>
                {show && (
                    <div className="promo-bar">
                        <div className="promo-content">
                            <Image loading="lazy" src="/Deliveryx1.png" alt="Delivery" className="promo-image" width={24} height={24}/>
                            <div className="promo-text">Free delivery on all orders over £50 with code easter checkout</div>
                        </div>
                        <div className="close-icon" onClick={Close}>
                            <Image loading="lazy" src="/Close.png" alt="Close" width={24} height={24} />
                        </div>
                    </div>
                )}
                <div className="header-container-about">
                    <div className="header-container-1">
                        <Link href={'/'} style={{ textDecoration:'none' }}><div id="heading">Avion</div></Link>
                        <div className="header-icons-about">
                            {
                                !isMobile ? (
                                    <div className="header-icons-about">
                                        <div id="about-links">
                                        <div><Link href={'/about'} style={{textDecoration:'none'}}>About us</Link></div>
                                        <div>Contact</div>
                                            <div>Blog</div>
                                        </div>
                                        <div>
                                        {/* {searchBar} */}
                                        </div>
                                        <Link href={'/cart'}><Image loading="lazy" src="/cart.svg" alt="Cart" width={24} height={24}/></Link>
                                        <Image loading="lazy" src="/user.svg" alt="User" width={24} height={24}/>
                                    </div>
                                    
                                ): (
                                    <div className="hamburger-menu">
                                        <div className="hamburger-icon flex items-center">
                                        {searchBar}
                                        <Link href={'/cart'}><Image loading="lazy" src="/cart.svg" alt="Cart" width={24} height={24}/></Link>
                                        <Menu category={category} />
                                        </div>
                                    </div>
                                
                            )
                            
                        }
                        </div>
                    </div>
                        {
                            !isMobile ? (
                                <>
                                <div>
                                    <div className="header-container-2">
                                        <div className="header-container-items">
                                        {
                                    category.map((item: any) => (
                                        <div key={item._id}>
                                            <Link href={`/category/${item.slug.current}`} className="" style={{textDecoration:"none", color:"inherit"}}>{item.name}</Link>
                                        </div>
                                    ))
                                }
                                        </div>
                                    </div>
                                </div>
                                </>
                            ) : (
                                
                               <div>
                               
                               </div>
                                
                            )
                        }
                </div>
            </div>
        </div>
    </div>
    )
}
