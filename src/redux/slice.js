import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'counter',
  initialState: {
    orders: {},
    queue:[],
    test: null,
    testObj:{
      testOne: null,
      testTwo: null,
    }
    //productTitle: null,
    //produtCalorie: null
  },
  reducers: {
    
    setClickedProduct: (state, action)=>{
        //state.productTitle = action.payload.title;
        //state.produtCalorie = action.payload.calorie;
        const order = {
            productTitle:  action.payload.title,
            produtCalorie: action.payload.calorie
        }
        if(state.orders[action.payload.category]){
            state.orders[action.payload.category].push(order);
        }else{
            state.orders[action.payload.category] = [order];
        }
        
    },

    setQueue:(state,action)=>{
      state.testObj.testOne = action.payload.h2;

    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setClickedProduct,setQueue } = slice.actions

export default slice.reducer