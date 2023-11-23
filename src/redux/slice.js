import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'counter',
  initialState: {
    orders: {},
    queue:[],
    
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
    
  },
})

// Action creators are generated for each case reducer function
export const { setClickedProduct } = slice.actions

export default slice.reducer