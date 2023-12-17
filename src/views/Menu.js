import data from '../tempDataBase/data.json'
import Header from '../components/Header';
import MenuSection from '../components/MenuSection';
import './Menu.scss';
import {useState,useRef,forwardRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

export default function Menu(){

    const menuSectionRef = useRef(null);

    console.log("menuSectionRef", menuSectionRef);

    const navRef = useRef(null);
    const [isFix, setFix] = useState(false);

    //get bowls, drink, kidmenu
    const menu = Object.keys(data.product).map((productName)=>(
        <MenuSection ref={menuSectionRef} build={false} title={productName} data={data.product[productName]}/>
    ))

    function setFixed(){
        //setWindowYSize(window.scrollY );
        const y = window.scrollY;
        //console.log(y);
        if(y >= 82.66667){
            
            //document.getElementById("root").addClassList();
            document.getElementById("root").style.paddingTop = navRef.offsetHeight;
            setFix(true);
            window.removeEventListener("scroll", setFixed);

        }else{
            setFix(false);
            window.removeEventListener("scroll", setFixed);
        }
        
    }


  

    window.addEventListener("scroll", setFixed);


    return(
        <>
        <Header/>
       
        <nav ref={navRef}  className={isFix ?'menuNavFixed' : `menuNav`}>
            <ul>
                {/* <li><a href={"#BOWLSection"}>Bowls</a></li> */}
                <li><Link 
                    activeClass="active" 
                    to="BOWLSection" 
                    spy={true} 
                    smooth={true} 
                    offset={0} 
                    duration={500} 
                   
                    >
                    Bowls
                    </Link>
                </li>
                {/* <li><a href={"#PITASection"}>Pitas</a></li> */}
                <li>
                    <Link 
                        activeClass="active" 
                        to="DRINKSection" 
                        spy={true} 
                        smooth={true} 
                        offset={-106} 
                        duration={200} 
                    
                        >
                        Drinks
                    </Link>
                
                </li>
                {/* <li><a href={"#KIDMENUSection"}>Kid's meal</a></li> */}
                <li>
                <Link 
                    activeClass="active" 
                    to="KIDMENUSection" 
                    spy={true} 
                    smooth={true} 
                    offset={-53} 
                    duration={500} 
                   
                    >
                    Kid's meal
                </Link>

                </li>
            </ul>
        </nav>
      
        {menu}
        </>
    );
}