// import { current } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit";

//   const counterReducer=(state ={current_count:1},action)=>{
//     console.log(action);
    
//     if (action.type ==="INCREMENT") {
//         return{current_count: state.current_count +1}
        
//     }
//     return state

//   }
//   export default counterReducer
const counterSlice= createSlice({
name: 'count',
//use store key 'count'
initialState:{current_value:0},
reducers:{
  increment: (state,action)=>{
    state.current_value +=action.payload
    //useing += assignment only possible in slice

  },
  decrement:(state,action)=>{
    state.current_value -= action.payload
  }
}
})
export const {increment,decrement}=counterSlice.actions
export default counterSlice.reducer

