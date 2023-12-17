
/**
 * This component reads queue from store.slice and display them
 * It also dispatch deleted object to store.
 * 
 */ 
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addDeleteOrder} from '../redux/slice';
import { IoIosCloseCircleOutline } from "react-icons/io";
import './OrderList.scss';

export default function OrderList(){


    const dispatch = useDispatch();
    //reading in the queue:Array[] from store
    const orderQueue = useSelector(state => state.slice.queue);

    function deleteOrder(deleteId, fromTitle, fromCategory){
        console.log("deleting order..", deleteId, fromTitle,fromCategory);
        dispatch(addDeleteOrder({category: fromCategory, title: fromTitle, index: deleteId}));
        //dispatch(addDeleteOrder({id: deleteId}));
    }


    //map queue:Array[Object] from store 
    const orderList = orderQueue.map((order, index) =>(
    
        //console.log("orderList:", order.title, order.category),
        <div className='order'>
            <img src={require(`../images/build/${order.category}/${order.title.toLowerCase().replace(/\s/g, '_')}.png`)}/>
            <p>{order.title}</p>
            <button onClick={()=>deleteOrder(index, order.title, order.category)}><IoIosCloseCircleOutline size={25}/></button>
        </div>
    ));

    return(
        <div className='orderList'>
            {orderQueue && orderList}
        </div>
    )
}