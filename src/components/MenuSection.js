import ProductModal from "./ProductModal";
import './MenuSection.scss';
import { useState } from "react";

export default function MenuSection(props){

    //stores selected item from ProductModal's onClick
    const [selectedItem, setSelectedItem] = useState({});


    //check rules
    console.log(props.rule);

    function clickedOnItem(name){
        if(selectedItem[name]){
            selectedItem[name]++;
        }else{
            let temp;
           
            if(props.rule["portion"] == "half"){
                //selectedItem[name] = 0.5;
                temp = {
                    ...selectedItem,
                    [name]: 0.5,
                };
            }else{
                //selectedItem[name] = 1;
                temp = {
                    ...selectedItem,
                    [name]: 1,
                };
            }
            setSelectedItem(temp);
        }
        console.log(selectedItem)
    }
    //connect to store and read deletedItem 


    //console.log("menu", props.title);
    const products = props.data.map((productData) =>(
        <ProductModal  onClick={clickedOnItem}   build={props.build} imgTitle={props.title} data={productData}/>
    ));

    return(
        <div className="menuSectionDiv">
        <section id={`${props.title}Section`} className={`${props.title}Section menuSection`}>
            <h2> {props.title}</h2>
            <div className="gridMenu">
            {products}
            </div>
        </section>
        </div>
    )
} 