import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'counter',
  initialState: {
    orderId:0,
    orders: {},
    queue:[],
    test: null,
    testObj:{
      testOne: null,
      testTwo: null,
    },
    deletedOrder: {},
    //productTitle: null,
    //produtCalorie: null
  },
  reducers: {
    
    setClickedProduct: (state, action)=>{
        //state.productTitle = action.payload.title;
        //state.produtCalorie = action.payload.calorie;
        const order = {
            productId: action.payload.id,
            productTitle:  action.payload.title,
            produtCalorie: action.payload.calorie
        }
        if(state.orders[action.payload.category]){
            state.orders[action.payload.category].push(order);
        }else{
            state.orders[action.payload.category] = [order];
        }
        state.orderId++;
    },

    setQueue:(state,action)=>{
      //state.testObj.testThree = action.payload.h2;
      state.queue.push(action.payload.order)
    },

    //add to deleted order and filter orderList to exclude deleted item
    addDeleteOrder:(state, action)=>{
      state.deletedOrder[action.payload.title] = action.payload.category;
      state.queue = state.queue.filter((order) => (order.title != action.payload.title));
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setClickedProduct,setQueue, addDeleteOrder } = slice.actions

export default slice.reducer