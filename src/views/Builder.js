import data from '../tempDataBase/data.json'
import Header from '../components/Header';
import MenuSection from '../components/MenuSection';
import { useSelector } from 'react-redux';
import OrderList from '../components/OrderList';
import { useLocation } from 'react-router-dom';
import { HiMiniArrowSmallLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import './Builder.scss';


export default function Builder(){

    /*
    const title = useSelector(state => state.slice.orders);
    console.log(title);

    const queue = useSelector(state => state.slice.testObj.testThree);
    console.log(queue);
    */

    const location = useLocation(); 

    //read data.menu[location.state.replace(/[-]/g, " ")]
    //need to send data.menu[location.state.replace(/[-]/g, " ")] same as categoryName
    //by 


    const navigate = useNavigate();

    


    
    //@categoryName:String which represnets the name of Key of data.build 
    const menu = Object.keys(data.build).map((categoryName)=>(
        //@title:String, Key of data.build 
        //@data:Array[Object], value of data.build[categoryName:String]
        //@rule:Object:{limit:String, portion:String}
        //uses current route address with '-' exclusion.
        <MenuSection build={true} title={categoryName} data={data.build[categoryName]} rule={data.menu[location.state.replace(/[-]/g, " ")][categoryName]}/>
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
                        <span>$10.95</span>
                        <span>222 Cal</span>
                    </div>

                    <div className='orderContainer'>
                        <OrderList/>
                    </div>
                    <button>Add to bag</button>
                </div>
            </div>
            
        </section>
        </div>
    )
}