import './ProductModal.scss';
import { useDispatch } from 'react-redux';
import {setClickedProduct, setQueue, DeleteOrderFromProduct} from '../redux/slice';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
export default function ProductModal(props){

    const navigate = useNavigate();
    const [id, setId] = useState(null);
    const [clicked, setClicked] = useState(false);
    const dispatch = useDispatch();
    //console.log("what is it? ", props.data.category);
    const deletedOrder = useSelector(state => state.slice.deletedOrder[props.data.title]);
    const orderId = useSelector(state => state.slice.orderId);



    useEffect(() => {
        setId(orderId);
    },[])

    useEffect(() => {

        if(deletedOrder){
            setClicked(prevState => !prevState);
        }

    },[deletedOrder])


    function handleDispatch(){


        //check orders to see if user has reached limit of selections
        //orders
        console.log("orderId", orderId);
        
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

        }
        
        setClicked(prevState => !prevState);
        
    }


    function testQueue(){
        dispatch(setQueue({h2:props.data.title}));
    }

    // title refers to Product's title
    function handleClick(title){

        if(props.selectedItem[title]){
            props.selectedItem[title]++;
            
        }else{
            let temp;
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
    }

    if(props.build){
        return(
            <div className="productModalContainer">

                <img src={require(`../images/build/${props.imgTitle.toLowerCase()}/${props.data.imageSrc}`)}
                    //onClick={()=>handleDispatch()}
                    onClick={()=>handleClick(props.data.title)}
                    className={clicked ? 'imgClicked' : 'imgNotClicked'}
                />
                <h2 onClick={testQueue}>{props.data.title}</h2>
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