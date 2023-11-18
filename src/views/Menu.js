import data from '../tempDataBase/data.json'
import Header from '../components/Header';
import MenuSection from '../components/MenuSection';

export default function Menu(){

    //get bowls, pita, drknk, kidmenu
    const menu = Object.keys(data.product).map((productName)=>(
        <MenuSection title={productName} data={data.product[productName]}/>
    ))

    return(
        <>
        <Header/>
        {menu}
        </>
    );
}