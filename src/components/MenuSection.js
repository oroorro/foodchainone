import ProductModal from "./ProductModal";
import './MenuSection.scss';
import { useState, useEffect } from "react";

// 
// This compnents holds a title, and it's products by givings props to ProductModal.js
// @props 
//      .build:Bool, flag to indicate 
//      .title:String, Key of data.build 
//      .data:Array[Object], 
//      .rule:Object,{limit:String, portion:String}
// 
export default function MenuSection(props){

    //stores selected item from ProductModal's onClick
    const [selectedItem, setSelectedItem] = useState({});
    //references rule:Object from Builder.js's prop.rule
    const [rule, setRule] = useState({});



    
    useEffect(()=>{
        //console.log("props.data type is ", typeof(props.data), props.data instanceof Array, props.data instanceof Object );
        //setting Object:{limit:String, portion:String} as rule
        setRule(props.rule);
    },[])


    useEffect(()=>{
        if(Object.keys(selectedItem).length != 0){
            console.log(selectedItem)
        }
        console.log("selectedItem state");
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


   

    //@productData: Object:{title:String, calorie:Number, imageSrc:String}
    let products = props.data.map((productData) =>(
        //@rule: Object:{limit:String, portion:String}  @selectedItem:useState  @setSelectedItem:setState
        //@build: Bool  @imgTitle:String   @data: Object:{title:String, calorie:Number, imageSrc:String}
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