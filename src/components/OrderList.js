
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
    //reading in the queue:Array[] from store
    const orderQueue = useSelector(state => state.slice.queue);

    function deleteOrder(deleteId, fromTitle, fromCategory){
        console.log("deleting order..", deleteId, fromTitle,fromCategory);
        dispatch(addDeleteOrder({category: fromCategory, title: fromTitle, index: deleteId}));
        //dispatch(addDeleteOrder({id: deleteId}));
    }


    //map queue:Array from store 
    const orderList = orderQueue.map((order, index) =>(
      
        <div>
            <div>{order.title}</div>
            <button onClick={()=>deleteOrder(index, order.title, order.category)}>delete</button>
        </div>
    ));

    return(
        <div>
            {orderQueue && orderList}
        </div>
    )
}