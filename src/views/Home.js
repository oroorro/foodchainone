import data from '../tempDataBase/data.json'
import Header from  '../components/Header'
import Slider from '../components/Slider'
import { Helmet } from "react-helmet";
import { useState, useEffect} from 'react';
import Product from '../components/Product';
import './Home.scss';

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
        <section className='popularListSection home' >
            
            <h1>WHAT'S POPULAR</h1>
            <div className='popularPorductContainer'>
                {popularListComponents}
            </div>
            
        </section>
        </main>
        </>
    )

}