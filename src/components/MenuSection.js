import ProductModal from "./ProductModal";
import './MenuSection.scss';
import { useState, useEffect } from "react";

export default function MenuSection(props){

    //stores selected item from ProductModal's onClick
    const [selectedItem, setSelectedItem] = useState({});
    const [rule, setRule] = useState({});

    useEffect(()=>{
        //check rules
        //console.log(props.rule);
        setRule(props.rule);
        //console.log(rule);
    },[])


    useEffect(()=>{
        if(Object.keys(selectedItem).length != 0){
            console.log(selectedItem)
        }
    },[selectedItem])
    /*
    function clickedOnItem(name){

        console.log("clicked on ", name);
        console.log(rule, props.rule);
        if(selectedItem[name]){
            selectedItem[name]++;
        }else{
            let temp;
            console.log(rule);
            if(rule["portion"] == "half"){
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
    */
    //connect to store and read deletedItem 


    //console.log("menu", props.title);
    const products = props.data.map((productData) =>(
        <ProductModal  rule={rule} selectedItem={selectedItem} setSelectedItem={setSelectedItem}   build={props.build} imgTitle={props.title} data={productData}/>
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