import './ProductModal.scss';
import { useDispatch } from 'react-redux';
import {setClickedProduct, setQueue, DeleteOrderFromProduct, clearDeletedOrder} from '../redux/slice';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";







/**
 * 
 * @param {*object} props represents 
 *                  .rule 
 *                  .selectedItem
 *                  .setSelectedItem
 *                  .productData = {
 *                                  
 * 
 *                                  }
 *  
 * @returns 
 */
export default function ProductModal(props){

    const navigate = useNavigate();
    const [id, setId] = useState(null);

    //numbers of click on image, it will be used to display on top of image
    const [clicked, setClicked] = useState(0);
    const dispatch = useDispatch();

    const deletedOrderName = useSelector(state => state.slice.deletedOrder[props.data.title]);
    const orderId = useSelector(state => state.slice.orderId);

    // getting deletedOrderName
    //console.log("deletedOrderName", deletedOrderName);

    useEffect(() => {
        setId(orderId);
    },[])

    /*
    useEffect(() => {
        console.log("props.selectedItem", props.selectedItem)
    },[props.selectedItem])
    */

    useEffect(() => {

        //if order gets deleted, decrement that item in props.selectedItem
        if(deletedOrderName){

            console.log("deleting order from Product", props.selectedItem);

            setClicked(prevState => prevState + 1);
            //iterate props.selectedItem and find key that has same name as deletedOrderName
            Object.keys(props.selectedItem).forEach((itemName=>{
                console.log("itemName", itemName, deletedOrderName);
                if(itemName == deletedOrderName){
                    //props.selectedItem[itemName] - 1;

                    let value = props.selectedItem[itemName] - 1;
                    //console.log("value is ", value);
                    props.setSelectedItem((prevState)=>
                        ({
                            ...prevState,
                            [itemName]: value,
                        })
                    );
                }
            }))
        }

        //empty state.slice.deletedOrder
        dispatch(clearDeletedOrder({}));
    },[deletedOrderName])



    // handles click events when user clicks on imgage
    function handleClick(title){

        let temp;
        //when 
        if(props.selectedItem[title]){
            
            let value = props.selectedItem[title];
            props.setSelectedItem((prevState)=>
                ({
                    ...prevState,
                    [title]: value++,
                })
            );
        }else{
            if(props.rule == "half"){
                temp = {
                    ...props.selectedItem,
                    [title]: 0.5,
                };
            }else{
                temp = {
                    ...props.selectedItem,
                    [title]: 1,
                };
            }
            props.setSelectedItem(temp);
        }

        if(!clicked){
            dispatch(setClickedProduct({id: orderId, category: props.imgTitle.toLowerCase(), title: props.data.title, calorie: props.data.calorie}))
            dispatch(setQueue(
                {order:
                    {
                        id: orderId,
                        title: props.data.title,
                        calorie: props.data.calorie,
                        category: props.imgTitle.toLowerCase()
                    }
                }
            ));
        }
        //if user click on hightlighted image, delete it from order list and remove highlight effect
        else{
            dispatch(DeleteOrderFromProduct({id: id}));

            //delete item in parent's component 
            //if value is 1, delete value completely from props.selectedItem
            let value = props.selectedItem[props.data.title] - 1;
            
            props.setSelectedItem((prevState)=>
                ({
                    ...prevState,
                    [props.data.title]: value,
                })
            );
        }
        
        setClicked(prevState => !prevState);


    }

    if(props.build){
        return(
            <div className="productModalContainer">

                <div>
                    <div className='counter'></div>
                    <img src={require(`../images/build/${props.imgTitle.toLowerCase()}/${props.data.imageSrc}`)}
                        //onClick={()=>handleDispatch()}
                        onClick={()=>handleClick(props.data.title)}
                        className={clicked ? 'imgClicked' : 'imgNotClicked'}
                    />
                </div>
                <h2>{props.data.title}</h2>
                <p>{props.data.calorie}</p>
            </div>
        )
    }
    else{
        return(
            <div className="productModalContainer">
                <img src={require(`../images/home/product/${props.imgTitle.toLowerCase()}/${props.data.imageSrc}`)}
                    
                    onClick={()=>(console.log(props.data.title.replace(/\s/g, '-')),
                        navigate(`/builder/${props.data.title.replace(/\s/g, '-')}`,  {state: props.data.title.replace(/\s/g, '-')}))}
                />
                <h2>{props.data.title}</h2>
                <p>{props.data.calorie}</p>
                <p>{props.data.description}</p>
            </div>
        )
    }
    
} 