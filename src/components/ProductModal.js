import './ProductModal.scss';
import { useDispatch } from 'react-redux';
import {setClickedProduct, setQueue, DeleteOrderFromProduct, clearDeletedOrder} from '../redux/slice';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import CustomAlert from './CustomAlert';


/**
 * MenuSection has <ProductModal>
 * ProductModal displays information of each product with it's image,title
 * calories and description. It also leads into /build/${productTitle} 
 * when clicked on the image.
 * 
 * build:Bool will determine if ProductModal will be used in Menu.js; View
 * or Build.js; View where ProductModal has an ability to set numbers of clicked on it's image 
 * 
 * 
 * @param props represents 
 //                 .rule: Object:{limit:String, portion:String}  
 //                 .selectedItem:useState  
 //                 .setSelectedItem:setState
 //                 .build: Bool : False -> will be used in Menu.js 
 //                 .imgTitle:String, represents the category of product
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


    // handles click events when user clicks on <img>
    function handleClick(title){

        //did not reach limit yet
        if(!props.reachedLimitFlag){
            let temp;
            //icrementing by the given rules, props.rule
            //if clicked Item was clicked already at least once, just increment
            if(props.selectedItem[title]){
                
                //selectedItem's length is only one 
                if(Object.values(props.selectedItem).length == 1){
                    let temp = props.selectedItem[title] + 1;

                    props.setSelectedItem({
                        ...props.selectedItem,
                        [title]: temp
                    });

                }
                //selectedItem's length is more than one 
                else{
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
            //append order:Object into state.queue in store
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

            setClicked(prevState => prevState + 1);
        }
        //reached limit for product selection 
        else{
            //if current click is 0, alert message "you can only select up to ${props.limit}"
            if(clicked == 0){
                handleShowAlert();
            }
            //if current click is more than 0, make it back to 0 
            else{
                //setting locally; <productModal>
                setClicked(0);
                //update <MenuSection>
                props.setSelectedItem({
                    ...props.selectedItem,
                    [title]:0
                })
                //delete clicked Product from store's queue, which gets displayed in  <OrderList>
                dispatch(DeleteOrderFromProduct({title: title}));
            }

        }

    }

    //used in builder.js 
    if(props.build){
        return(
            <div className="productModalContainer">

                <div className='productWrapper'>
                    <div className={'counterWrapper' + (clicked > 0 ? '': 'DoesNotExist')}>
                        <span>{clicked}</span>
                    </div>
                    <img src={require(`../images/build/${props.imgTitle.toLowerCase()}/${props.data.imageSrc}`)}
                        //onClick={()=>handleDispatch()}
                        onClick={()=>handleClick(props.data.title)}
                        className={clicked > 0 ? 'imgClicked' : ''}
                    />
                </div>

                <div>
                    <p>{props.data.title}</p>
                    <p>{props.data.calorie + " "}Cal</p>
                </div>
              
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

    //used in 
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