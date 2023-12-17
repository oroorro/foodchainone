import data from '../tempDataBase/data.json'
import Header from '../components/Header';
import MenuSection from '../components/MenuSection';
import './Menu.scss';
import {useState,useRef,forwardRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

export default function Menu(){

    const menuSectionRef = useRef(null);

    

    console.log("menuSectionRef", menuSectionRef);

    const navRef = useRef(null);
    

    const [navTop, setNavTop] = useState(0);

    const [isFix, setFix] = useState(false);

    const [currScrollYPosition, setCurrScrollYPosition] = useState(0);

    //get bowls, drink, kidmenu
    const menu = Object.keys(data.product).map((productName)=>(
        <MenuSection ref={menuSectionRef} build={false} title={productName} data={data.product[productName]}/>
    ))

    function setFixed(){
        //setWindowYSize(window.scrollY );
        const y = window.scrollY;
        setCurrScrollYPosition(y);
        //console.log(y);
        
        
    }

    useEffect(()=>{

        console.log("currScrollYPosition", currScrollYPosition, navTop);

        if(currScrollYPosition >= navTop){
            
            //document.getElementById("root").addClassList();
            document.getElementById("root").style.paddingTop = navRef.offsetTop;
            setFix(true);
            window.removeEventListener("scroll", setFixed);

        }else{
            setFix(false);
            window.removeEventListener("scroll", setFixed);
        }

    },[currScrollYPosition])


    useEffect(()=>{
        if(navRef.current) setNavTop(navRef.offsetTop);
        

    },[navRef.current])


  
    //scroll to top when loaded
    useEffect(()=>{
        window.scrollTo({top: 0, left: 0})
    },[])


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