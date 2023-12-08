import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'counter',
  initialState: {

    //treated as global orderId
    orderId:0,
    orders: {},
    queue:[],
    //deletedOrder: null,
    deletedOrder: {},
    //productTitle: null,
    //produtCalorie: null
  },
  reducers: {
    

    //adds given order into state.orders based on it's exsitence. 
    // setClickedProduct: (state, action)=>{
      
    //     const order = {
    //         productId: action.payload.id,
    //         productTitle:  action.payload.title,
    //         produtCalorie: action.payload.calorie
    //     }

    //     //append to the category that the order belongs to
    //     if(state.orders[action.payload.category]){
    //         state.orders[action.payload.category].push(order);
    //     }
    //     //make a new array for category if the category did not exist
    //     else{
    //         state.orders[action.payload.category] = [order];
    //     }
    //     //increase global orderId
    //     state.orderId++;
    // },

    //add order into state.queue
    //@action.payload.order:Object {id:Number, title:String, calorie:Number, category:String}
    setQueue:(state,action)=>{
      //state.testObj.testThree = action.payload.h2;
      state.queue.push(action.payload.order)
    },

    //add to deleted order and filter orderList to exclude deleted item
    addDeleteOrder:(state, action)=>{
      //add deletedOrder
      state.deletedOrder[action.payload.title] = action.payload.title;
     
      //delete given index's element;order:Object from queue
      state.queue.splice(action.payload.index, 1);
    },

    //delete given order with given order's title 
    //@action.payload.title:String, the title of an order
    DeleteOrderFromProduct:(state, action)=>{
      state.queue = state.queue.filter((order) => (order.title != action.payload.title));
    },

    //clears out state.deletedOrder Object
    clearDeletedOrder:(state,action)=>{
      for (let key in state.deletedOrder) {
        delete state.deletedOrder[key];
      }
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { setClickedProduct,setQueue, addDeleteOrder, DeleteOrderFromProduct,clearDeletedOrder } = slice.actions

export default slice.reducer