import ProductModal from "./ProductModal";
import './MenuSection.scss';
import { useState, useEffect } from "react";

// 
// This compnents holds a title, and it's products by givings props to ProductModal.js
// @props 
//      .build:Bool, flag to indicate 
//      .title:String, Key of data.build 
//      .data:Array[Object], 
//      .rule:Object,{limit:Number, portion:String}
// 
export default function MenuSection(props){



    //stores selected item from ProductModal's onClick
    const [selectedItem, setSelectedItem] = useState({});
    //references rule:Object from Builder.js's prop.rule
    const [rule, setRule] = useState({});

    const [reachedLimitFlag, setReachedLimitFlag] = useState(false);

    
    useEffect(()=>{
        //console.log("props.data type is ", typeof(props.data), props.data instanceof Array, props.data instanceof Object );
        //setting Object:{limit:String, portion:String} as rule
        setRule(props.rule);
    },[])


    useEffect(()=>{


        console.log("Menu ",selectedItem);

        //if(Object.keys(selectedItem).length > 0)  console.log("selectedItem state",Object.keys(selectedItem).length, rule.limit);
        setReachedLimitFlag(false);
        if(rule  &&  Object.keys(selectedItem).length > 0 && (Object.values(selectedItem).reduce((accum,curr)=> {return accum + curr}) == rule.limit)){
            console.log("reached limit in MenuSection",selectedItem)
            setReachedLimitFlag(true);

         //rule has arrived, selectedItem can be empty but it is less than limit
        }
        // else if(rule  &&  Object.keys(selectedItem).length >= 0 && (Object.values(selectedItem).reduce((accum,curr)=> {return accum + curr},0) < rule.limit)){
           
        // }

       
        
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
        //@rule: Object:{limit:Number, portion:String}  @selectedItem:useState  @setSelectedItem:setState
        //@build: Bool  @imgTitle:String   @data: Object:{title:String, calorie:Number, imageSrc:String}
        <ProductModal  reachedLimitFlag={reachedLimitFlag} rule={rule} selectedItem={selectedItem} setSelectedItem={setSelectedItem}   build={props.build} imgTitle={props.title} data={productData}/>
    ));

    return(
        <div className="menuSectionDiv">
        <section id={`${props.title}Section`} className={`${props.title}Section menuSection`}>
            <h3 className="menuSectionTitle"> {props.title}</h3>
            <div className="gridMenu">
                {products}
            </div>
        </section>
        </div>
    )
} 