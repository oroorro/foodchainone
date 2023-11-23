import data from '../tempDataBase/data.json'
import Header from '../components/Header';
import MenuSection from '../components/MenuSection';
import './Menu.scss';
import {useState,useRef} from 'react';

export default function Menu(){

    const navRef = useRef(null);
    const [isFix, setFix] = useState(false);

    //get bowls, pita, drknk, kidmenu
    const menu = Object.keys(data.product).map((productName)=>(
        <MenuSection build={false} title={productName} data={data.product[productName]}/>
    ))

    function setFixed(){
        //setWindowYSize(window.scrollY );
        const y = window.scrollY;
        //console.log(y);
        if(y >= 82.66667){
            
            //document.getElementById("root").addClassList();
            document.getElementById("root").style.paddingTop = navRef.offsetHeight;
            setFix(true);

        }else{
            setFix(false);
        }
        
    }


  

    window.addEventListener("scroll", setFixed);


    return(
        <>
        <Header/>
       
        <nav ref={navRef}  className={isFix ?'menuNavFixed' : `menuNav`}>
            <ul>
                <li><a href={"#BOWLSection"}>Bowls</a></li>
                <li><a href={"#PITASection"}>Pitas</a></li>
                <li><a href={"#DRINKSection"}>Drinks</a></li>
                <li><a href={"#KIDMENUSection"}>Kid's meal</a></li>
            </ul>
        </nav>
      
        {menu}
        </>
    );
}