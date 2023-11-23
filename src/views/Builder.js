import data from '../tempDataBase/data.json'
import Header from '../components/Header';
import MenuSection from '../components/MenuSection';
import { useSelector } from 'react-redux';

import './Builder.scss';


export default function Builder(){

    
    const title = useSelector(state => state.slice.orders);
    console.log(title);

    const menu = Object.keys(data.build).map((productName)=>(
        <MenuSection build={true} title={productName} data={data.build[productName]}/>
    ))
    return(
        <section className={'BuilderSection'}>
            <div>
                {menu}
            </div>
            <div className='selectedMenu'>
                <a>Back to Menu</a>
                <h3>GREEK SALAD</h3>
                <span>$10.95 • 0 Cal</span>
                <hr></hr>
                <ul></ul>
                <hr></hr>
                <a>Add to bag</a>
            </div>
            
        </section>
    )
}