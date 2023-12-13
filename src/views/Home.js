import data from '../tempDataBase/data.json'
import Header from  '../components/Header'
import Slider from '../components/Slider'
import { Helmet } from "react-helmet";
import { useState, useEffect} from 'react';
import Product from '../components/Product';
import './Home.scss';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

export default function Home(){

    const [curIdx, setcurIdx] = useState(0);
    //const popularList = ["BALSAMIC DATE CHICKEN", "MARKET SPICE", "Chicken + RightRice®", "HARISSA AVOCADO", "Greek Salad", "TAHINI CAESAR"];

    console.log(data.popularProductData);
    
    const popularListComponents = Object.keys(data.popularProductData).map((key)=>
            
            <Product data={data.popularProductData[key]} main={true} />
    )    
    
    

    return(
        <>
        <Helmet>
        <meta name="description" content="width=device-width" />
        </Helmet>
        <Header/>
        <main>

            
            <Slider data={data.homeSliderData[curIdx]} curIdx={curIdx} setcurIdx={setcurIdx}/>
            {/* <Carousel data={data.homeSliderData}/> */}
            <section className='popularListSection home' >
                
                <h1>WHAT'S POPULAR</h1>
                <div className='popularPorductContainer'>
                    {popularListComponents}
                </div>
                
            </section>
            <section className='menuPromotion'>
                <img 
                width={"100%"}
                height={711}
                src={require("../images/home/home_section3_image.png")}
                />
                <div>
                    <div className='textWrapper'>
                        <h1>Apple Cider Vinaigrette </h1>
                        <div>
                            <p>refreshing and herb-infused dressing that pairs apple cider vinegar
                            , ideal for autumn salads or drizzling over roasted root vegetables.
                            </p>
                        </div>
                        <a><span>Try it now</span></a>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
        </>
    )

}