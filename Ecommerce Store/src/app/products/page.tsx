"use client";
import { useState, useEffect } from "react";
import { Footer, Header } from "../components/ui/misc/nav";
import ProductCard from "../components/ui/product/productcard";
import "../styles/products-page.css";
import Filter from "../components/ui/product/filter";
import { client } from "@/sanity/lib/client";
import { type SanityDocument } from "next-sanity";

async function fetchProducts(filterQuery = "", limit = 11) {
  const QUERY = `
    *[_type == "product"] | order(${filterQuery || "_createdAt desc"}) [0..${limit}] {
      _id,
      name,
      price,
      slug,
      "image_url": image.asset -> url,
      tags,
      "catg_name": category->name
    }
  `;
  return await client.fetch(QUERY);
}

export default function ProductPage() {
  const [products, setProducts] = useState<SanityDocument[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterQuery, setFilterQuery] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [limit, setLimit] = useState(11);

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      setLoading(true);
      const data = await fetchProducts(filterQuery, limit);
      setProducts(data);
      setLoading(false);
    };
    fetchFilteredProducts();
  }, [filterQuery, limit]); 
  

  const handleFilterChange = (newFilterQuery: string) => {
    setFilterQuery(newFilterQuery); 
    setLimit(11); 
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 12);
  };

  return (
    <div>
      <Header />
      <div>
        <div className="products-page">
          <div>All Products</div>
        </div>
        <div className={isMobile ? "filter-container-mobile" : "filter-container"}>
          <div className="mx-8  ">
            <Filter onFilterChange={handleFilterChange} />
          </div>
        </div>
        <div>
          {loading && products.length === 0 ? (
            <div className="flex justify-center my-8 items-center w-[300px] rounded-lg h-12 fixed top-0 right-0 bg-green-300 text-green-800">
              Loading...
            </div>
          ) : (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-8">
              {products.map((product) => (
                <ProductCard product={product} key={product._id} />
              ))}
            </div>
          )}
          <div className="flex justify-center my-8 items-center w-full">
            {loading && products.length > 0 && (
              <div className="flex justify-center my-8 items-center w-[300px] rounded-lg h-12 fixed top-0 right-0 bg-green-300 text-green-800">
                Loading more products...
              </div>
            )}
            {!loading && products.length >= limit && (
              <button onClick={handleLoadMore} className="load-more-button bg-[#F9F9F9] px-6 py-4  ">
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
