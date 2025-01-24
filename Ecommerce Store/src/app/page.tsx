import FeaturedProduct from "./components/ui/product/featuredproducts";
import Features from "./components/ui/misc/features";
import Hero from "./components/ui/misc/hero";
import { Footer, Header } from "./components/ui/misc/nav";
import Newsletter from "./components/ui/misc/newsletter";
import Proof from "./components/ui/misc/proof";


export default function HomePage() {
  return (
    <>
      <div>
        <Header/>
          <div>
            <div>
              <Hero />
            </div>
            <div style={{margin:"50px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", borderCollapse:"separate"}}>
              <Proof />
              <br />
              <br />
              <br />
              <br />
              <FeaturedProduct />
              <br />
              <br />
              <br />
              <br />
              <Features />
              <br />
              <br />
              <br />
            </div>
            <div>
              <Newsletter />
            </div>
          </div>
          <Footer />
      </div>
    </>
  )
}