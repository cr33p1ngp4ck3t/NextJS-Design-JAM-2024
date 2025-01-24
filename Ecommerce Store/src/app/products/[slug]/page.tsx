import FeaturedProduct from '@/app/components/ui/product/featuredproducts';
import { FooterProduct, HeaderProduct } from '../../components/ui/misc/nav';
import Newsletter from '../../components/ui/misc/newsletter';
import Proof from '../../components/ui/misc/proof';
import '../../styles/page-product.css';
import '../../styles/style.css';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import ProductDetails from '@/app/components/ui/product/singleproduct';

async function getPost(slug: string) {
    const PRODUCT_QUERY = groq`
        *[_type == "product" && slug.current == $slug][0] {
            ...,
            "image": image.asset->url,
        }`;
    const product = await client.fetch(PRODUCT_QUERY, { slug });
    return product;
}

interface PageProps {
    params: Promise<{
        slug: string;
    }>
}

export default async function ProductPage({ params }: PageProps) {
    const {slug} = await params;
    const product = await getPost(slug);

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div>
            <HeaderProduct />
            <ProductDetails product={product} />
            <div className="related-products mt-12 mx-6">
                <div className="related-title">You Might Also Like</div>
                <FeaturedProduct />
            </div>
            <div className="proof-section">
                <Proof />
            </div>
            <div className="newsletter-section">
                <Newsletter />
            </div>
            <FooterProduct />
        </div>
    );
}
