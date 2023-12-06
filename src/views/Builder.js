import data from '../tempDataBase/data.json'
import Header from '../components/Header';
import MenuSection from '../components/MenuSection';
import { useSelector } from 'react-redux';
import OrderList from '../components/OrderList';
import { useLocation } from 'react-router-dom';
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

    

    
    //@categoryName:String which represnets the name of Key of data.build 
    const menu = Object.keys(data.build).map((categoryName)=>(
        //@title:String, Key of data.build 
        //@data:Object, value of data.build[categoryName:String]
        //@rule:Object:{limit:String, portion:String}
        //uses current route address with '-' exclusion.
        <MenuSection build={true} title={categoryName} data={data.build[categoryName]} rule={data.menu[location.state.replace(/[-]/g, " ")][categoryName]}/>
    ))
    return(
        <section className={'BuilderSection'}>
            <div>
                {menu}
            </div>
            <div className='selectedMenu'>
                <a>Back to Menu</a>
                <h3>{location.state.replace(/[-]/g, " ")}</h3>
                <span>$10.95 • 0 Cal</span>
                <hr></hr>
                <ul></ul>
                <hr></hr>
                <a>Add to bag</a>
                <OrderList/>
            </div>
            
        </section>
    )
}