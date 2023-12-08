import './ProductModal.scss';
import { useDispatch } from 'react-redux';
import {setClickedProduct, setQueue, DeleteOrderFromProduct, clearDeletedOrder} from '../redux/slice';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import CustomAlert from './CustomAlert';






/**
 * MenuSection has <ProductModal>
 * @param props represents 
 //                 .rule: Object:{limit:String, portion:String}  
 //                 .selectedItem:useState  
 //                 .setSelectedItem:setState
 //                 .build: Bool
 //                 .imgTitle:String
 //                 .data: Object:{title:String, calorie:Number, imageSrc:String
 *                  .reachedLimitFlag:Bool , indication to tell if the category of this product has reached a limit of selection.
 */
export default function ProductModal(props){

    //handles alert modal
    const [showAlert, setShowAlert] = useState(false);

    const handleShowAlert = () => {
        setShowAlert(true);
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };



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

            console.log(`deleting order of ++${deletedOrderName}`, props.selectedItem);

            //delete given deletedOrderName from store in props.selectedItem
            //iterate props.selectedItem and find key that has same name as deletedOrderName
            Object.keys(props.selectedItem).forEach((itemName=>{
               
                if(itemName == deletedOrderName){
                    
                    //getting current quantity of deletedOrderName
                    let value = props.selectedItem[itemName] - 1;
                    //updating for deletedOrderName to have one less value
                    props.setSelectedItem((prevState)=>
                        ({
                            ...prevState,
                            [itemName]: value,
                        })
                    );
                }
            }))

        //update current ProductModal's clicked quantity.
        setClicked(prevState => prevState - 1);

        //empty state.slice.deletedOrder for future usage. 
        dispatch(clearDeletedOrder({}));

        }
        
        
    },[deletedOrderName])



    // handles click events when user clicks on imgage
    function handleClick(title){

        

        //if(!props.reachedLimitFlag){
            let temp;
            //icrementing by the given rules, props.rule
            //if clicked Item was clicked already at least once, just increment
            if(props.selectedItem[title]){
                

                // let value =  props.selectedItem;
                // console.log("before", value);
                // value[title]++;
                // console.log("after", value);


                // props.setSelectedItem(value);
                let value = props.selectedItem[title];
                console.log("ProductModal", value, props.selectedItem[title]);
                //not working 

                //only one value case
                if(Object.values(props.selectedItem).length == 1){
                    let temp = props.selectedItem[title];

                    props.setSelectedItem({
                        ...props.selectedItem,
                        [title]: temp++
                    });

                    
                    // props.setSelectedItem({});
                    // props.setSelectedItem({title:temp++});
                    //props.setSelectedItem((propsselectedItem)=>(props.selectedItem[title]++));


                }else{
                    //does not work after 2 but why? 
                    // props.setSelectedItem((prevState)=>
                    // ({
                    //     ...prevState,
                    //     [title]: value++,
                    // })
                    // );

                    let v = props.selectedItem[title] + 1;

                    temp = {
                        ...props.selectedItem,
                        [title]: v,
                    };
                    props.setSelectedItem(temp);


                }



                
            }
            //if it is the first time of clikcing item, create a new entry into selectedItem;useState:Object
            else{
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

            // if(!clicked){
            //     dispatch(setClickedProduct({id: orderId, category: props.imgTitle.toLowerCase(), title: props.data.title, calorie: props.data.calorie}))
            //     dispatch(setQueue(
            //         {order:
            //             {
            //                 id: orderId,
            //                 title: props.data.title,
            //                 calorie: props.data.calorie,
            //                 category: props.imgTitle.toLowerCase()
            //             }
            //         }
            //     ));
            // }
            // //if user click on hightlighted image, delete it from order list and remove highlight effect
            // else{
            //     dispatch(DeleteOrderFromProduct({id: id}));

            //     //delete item in parent's component 
            //     //if value is 1, delete value completely from props.selectedItem
            //     let value = props.selectedItem[props.data.title] - 1;
                
            //     props.setSelectedItem((prevState)=>
            //         ({
            //             ...prevState,
            //             [props.data.title]: value,
            //         })
            //     );
            // }
            
            //setClicked(prevState => !prevState);
            setClicked(prevState => prevState + 1);
        //}
        //reached limit for product selection 
        // else{
        //     //if current click is more than 0, make it back to 0 

        //     //if current click is 0, alert message "you can only select up to ${props.limit}"
            
        //     //handleShowAlert();
        // }

    }

    if(props.build){
        return(
            <div className="productModalContainer">

                <div>
                    <div className='counter'>{clicked}</div>
                    <img src={require(`../images/build/${props.imgTitle.toLowerCase()}/${props.data.imageSrc}`)}
                        //onClick={()=>handleDispatch()}
                        onClick={()=>handleClick(props.data.title)}
                        /*className={clicked ? 'imgClicked' : 'imgNotClicked'}*/
                    />
                </div>
                <h2>{props.data.title}</h2>
                <p>{props.data.calorie}</p>

                <div>
                

                {showAlert && (
                    <CustomAlert
                    message={`you can only select up to ${props.rule.limit}`}
                    onClose={handleCloseAlert}
                    />
                )}
                </div>
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