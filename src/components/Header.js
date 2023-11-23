//import './Header.css';
import './Header.scss';
import { Link } from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";

export default function Header(){
    return(
    <header>
        <ul className='leftMenu'>
            <li><Link to="/">Mealz</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/rewards">Rewards</Link></li>
            <li><Link to="/catering">Catering</Link></li>
            <li><Link to="/rewards">Locations</Link></li>
        </ul>
      
      <ul className='rightMenu'>
        <li>
            <button className='signInButton'>
                <CiUser size={30}/>
                <span>Sign In</span> 
            </button>
        </li>
        <li>
            <button className='shoppingBagButton'>
                <IoBagOutline size={30}/>
            </button>
        </li>
        <li>
            <button className='orderButton'>
                <span>Order</span>
            </button>
        </li>
      </ul>
      
    </header>
    )
}