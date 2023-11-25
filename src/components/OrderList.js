
/**
 * This component reads queue from store.slice and display them
 * It also dispatch deleted object to store.
 * 
 */ 
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addDeleteOrder} from '../redux/slice';
export default function OrderList(){


    const dispatch = useDispatch();
    //reading in queue
    const orderQueue = useSelector(state => state.slice.queue);

    function deleteOrder(fromTitle,fromCategory){
        //console.log("deleting order..", fromTitle,fromCategory);
        dispatch(addDeleteOrder({category: fromCategory, title: fromTitle}));
        
    }


    const orderList = orderQueue.map((order) =>(
      
        <div>
            <div>{order.title}</div>
            <button onClick={()=>deleteOrder(order.title, order.category)}>delete</button>
        </div>
    ));

    return(
        <div>
            {orderQueue && orderList}
        </div>
    )
}