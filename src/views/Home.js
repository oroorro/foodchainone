import data from '../tempDataBase/data.json'
import Header from  '../components/Header'
import Slider from '../components/Slider'
import { Helmet } from "react-helmet";
import { useState, useEffect} from 'react';

export default function Home(){

    const [curIdx, setcurIdx] = useState(0);
    const popularList = ["BALSAMIC DATE CHICKEN", "MARKET SPICE", "Chicken + RightRice®"];

    return(
        <>
        <Helmet>
        <meta name="description" content="width=device-width" />
        </Helmet>
        <Header/>
        <Slider data={data.homeSliderData[curIdx]} curIdx={curIdx} setcurIdx={setcurIdx}/>
        </>
    )

}