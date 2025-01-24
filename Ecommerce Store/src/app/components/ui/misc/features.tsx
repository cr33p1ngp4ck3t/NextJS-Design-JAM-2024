import Link from "next/link";

export default function Features() {
    return (
        <>
        <div style={{display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"center", width:"100%", color:"white"}}>
            <div className="features">
                <div id="features-container-1" >
                    <div id="features-content">
                      <div>
                        <div id="h">It started with a small idea</div>
                        <div id="t">A global brand with local beginnings, our story begain in a small studio in South London in early 2014</div>
                      </div>
                      <div style={{width:"100%"}}><Link href={'/products'}><button className="content-button" style={{background:"#F9F9F926", color:"white"}}>View Collection</button></Link></div>
                    </div>
                </div>
                <div id="features-container-2" ></div>
            </div>
        </div>        
        </>
    )
}