import data from '../tempDataBase/data.json'
import Header from '../components/Header';
import MenuSection from '../components/MenuSection';
import { useSelector } from 'react-redux';
import OrderList from '../components/OrderList';
import { useLocation } from 'react-router-dom';
import { HiMiniArrowSmallLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

import './Builder.scss';

//represents /build page 
//gets initated when user click on <img> in <ProductModal>
//passed state from <ProductModal>'s <img> will be product's title that has '-' replaced for space,whitespace

export default function Builder(){

    /*
    const title = useSelector(state => state.slice.orders);
    console.log(title);

    const queue = useSelector(state => state.slice.testObj.testThree);
    console.log(queue);
    */

    //scroll to top when loaded
    useEffect(()=>{
        window.scrollTo({top: 0, left: 0})
    },[])


    const location = useLocation(); 

    //read data.menu[location.state.replace(/[-]/g, " ")]
    //need to send data.menu[location.state.replace(/[-]/g, " ")] same as categoryName
    //by 


    const navigate = useNavigate();

    
    //orderQueue used for button's style ,will using useState be better? 
    const orderQueue = useSelector(state => state.slice.queue);


    
    //@categoryName:String which represnets the name of Key of data.build 
    const menu = Object.keys(data.build).map((categoryName)=>(
        //@title:String, Key of data.build 
        //@data:Array[Object], value of data.build[categoryName:String]
        //@rule:Object:{limit:String, portion:String} , rule is getting accessed by using location.state, the product title replaced with '-'
        //now it is accessing rule in data.build after removing '-'  
        //uses current route address with '-' exclusion.        
        //missing on rule> error reason 
        //             
        <MenuSection build={true} title={categoryName} data={data.build[categoryName]} rule={data.menu[location.state.replace(/[-]/g, " ")]["rule"][categoryName]}/>
    ))
    return(
        <div>
            <Header/>
        <section className={'BuilderSection'}>
            <div className='productMenu'>
                <div className='productwrapper'>
                    {menu}
                </div>
            </div>
            <div className='selectedMenu'>
                <div>
                    <a onClick={()=>navigate(`/menu`)}><HiMiniArrowSmallLeft size={20}/>Back to Menu</a>
                    <h1>{location.state.replace(/[-]/g, " ")}</h1>
                    <div className='orderInfoWrapper'>
                        <span>${data.menu[location.state.replace(/[-]/g, " ")]["price"]}</span>
                        <span>{data.menu[location.state.replace(/[-]/g, " ")]["calorie"]}Cal</span>
                    </div>

                    <div className='orderContainer'>
                        <OrderList/>
                    </div>
                  
                    <button className={`itemInBag` + (orderQueue.length === 0 ? 'DoesNotExist' : 'Exist')}>Add to bag</button>
                </div>
            </div>
            
        </section>
        </div>
    )
}